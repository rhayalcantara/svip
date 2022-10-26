import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CamionFormComponent } from 'src/app/Components/Forms/camion-form/camion-form.component';
import { Camion, CamionControllerService } from 'src/app/Models/Camion/camion-controller.service';
import { DatosService } from 'src/app/Serveces/datos.service';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.css']
})
export class CamionComponent implements OnInit {
  public camiones:Camion[] = [];

  constructor( private toastr: MatDialog,   
               private camionController: CamionControllerService,
               private datos:DatosService){ }

               ngOnInit(): void {
                this.getcamiones()
              }
              getcamiones(){
                this.camiones=[];
                this.camionController.GetCamions().subscribe({
                  next: (res:Camion[]) => {
                    this.camiones=res;
                  },error: (err:Error)=> {
                      this.datos.showMessage(err.message,"Error en la Cargo de los camiones","error")
                  }
            
                })
              }
              abrirmodaledit(Camion:Camion): void {
                const dialogRef = this.toastr.open(CamionFormComponent,{width:"85%" ,height:"70%",data:{camion: camion}})
                 dialogRef.afterClosed().subscribe(
                  {next:  result => 
                    {
                      if (result!=null) {
                        this.getcamiones() 
                      }
                              
                    } 
                  })
              }
              abrirmodal(){
                let Camion: Camion = {
                  id:0,
                  placa: '',
                 ficha: ''                 
                }
                this.abrirmodaledit(Camion)
                 
              }
              delete(Camion:Camion): void{
                this.camionController.deleteCamion(Camion).subscribe({
                  next: (res:boolean) => {
                    
                      this.datos.showMessage("Eliminado el Camion","Eliminando Camion","info")
                      this.getcamiones()
                    
                  }
                })
              }

}
