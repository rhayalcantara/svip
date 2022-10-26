import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import BarcoController, { Barco } from 'src/app/Models/Barco/BarcoController';
import { DatosService } from 'src/app/Serveces/datos.service';

@Component({
  selector: 'app-barco-form',
  templateUrl: './barco-form.component.html',
  styleUrls: ['./barco-form.component.css']
})
export class BarcoFormComponent implements OnInit {
  public formGroup: FormGroup;
  public campos:string[]=[];
  public mantenimiento:string = "Nuevo";
  public bntsubmit:string ="Agregar"
  public barco:Barco ={
    id: 0,
    nombre: '',
    cedula: '',
    cantBodega: 0,
    capacidadBodega: 0
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<BarcoFormComponent>,
              private barcoController:BarcoController,
              private datos:DatosService,
              private fb:FormBuilder
              ) {
                this.formGroup=this.fb.group({})
                if(this.data.barco.id!=0) {
                  this.mantenimiento="Actualizando"
                  this.bntsubmit="Actualizar"
                }
              }

  ngOnInit(): void {

    this.campos=Object.keys(this.data.barco);
     //llenar el formgroup con los datos de la persona
     for (let control of this.campos) {
      let newFormControl: FormControl = new FormControl();      
      newFormControl.setValue(this.data.barco[control]);
      this.formGroup.addControl(control, newFormControl);
    }  
    this.barco = this.data.barco;
  }
  grabar(){
    this.barco = this.formGroup.value;
    if (this.barco.id==0){
      //Agregando 
      this.barcoController.insertBarcos(this.barco).subscribe(
        {next: (result: Barco) =>{
          this.datos.showMessage("Grabado Exitosamente","Agregando Barco","success")
          this.cerrar(this.barco)
        },error: (error: Error) =>{
          this.datos.showMessage("Error Grabando Barco:"+error.message,"Error","error")
        }}
      )
    }else{
      //Actualizando
      this.barcoController.updateBarco(this.barco).subscribe({
        next: (result:any) =>{
            this.datos.showMessage("Barco Actualizando","Actualizando Barco","success")
            this.cerrar(this.barco)
        },error: (error: Error) =>{
          this.datos.showMessage("Error Actualizando Barco:"+error.message,"Error","error")
        }});
    }
    
  }
  cerrar(obj:Barco){
    this.dialogRef.close(obj);
  }
  cerrar2(){
    this.dialogRef.close();
  }
}
