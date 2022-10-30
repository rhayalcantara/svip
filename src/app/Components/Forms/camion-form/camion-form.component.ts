import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Camion, CamionControllerService } from 'src/app/Models/Camion/camion-controller.service';
import { DatosService } from 'src/app/Serveces/datos.service';

@Component({
  selector: 'app-camion-form',
  templateUrl: './camion-form.component.html',
  styleUrls: ['./camion-form.component.css']
})
export class CamionFormComponent implements OnInit {
  public formGroup: FormGroup;
  public campos:string[]=[];
  public mantenimiento:string = "Nuevo";
  public bntsubmit:string ="Agregar"
  public camion:Camion={
    id: 0,
    placa: '',
    ficha: ''
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CamionFormComponent>,
    private camionController:CamionControllerService,
    private datos:DatosService,
    private fb:FormBuilder
  ) {
    this.formGroup=this.fb.group({})
    if(this.data.camion.id!=0) {
      this.mantenimiento="Actualizando"
      this.bntsubmit="Actualizar"
    }
  }

  ngOnInit(): void {
    this.campos=Object.keys(this.data.camion);
     //llenar el formgroup con los datos del obj
     for (let control of this.campos) {
      let newFormControl: FormControl = new FormControl();      
      newFormControl.setValue(this.data.camion[control]);
      this.formGroup.addControl(control, newFormControl);
    }  
    this.camion = this.data.camion;
  }
  grabar(){
    this.camion = this.formGroup.value;
    if (this.camion.id==0){
      //Agregando 
      this.camionController.insertCamion(this.camion).subscribe(
        {next: (result: Camion) =>{
          this.datos.showMessage("Grabado Exitosamente","Agregando Camion","success")
          this.cerrar(this.camion)
        },error: (error: Error) =>{
          this.datos.showMessage("Error Grabando Camion:"+error.message,"Error","error")
        }}
      )
    }else{
      //Actualizando
      this.camionController.updateCamion(this.camion).subscribe({
        next: (result:any) =>{
            this.datos.showMessage("Camion Actualizando","Actualizando Camion","success")
            this.cerrar(this.camion)
        },error: (error: Error) =>{
          this.datos.showMessage("Error Actualizando Camion:"+error.message,"Error","error")
        }});
    }
    
  }
  cerrar(obj:Camion){
    this.dialogRef.close(obj);
  }
  cerrar2(){
    this.dialogRef.close();
  }

}
