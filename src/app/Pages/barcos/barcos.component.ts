import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcoFormComponent } from 'src/app/Components/Forms/barco-form/barco-form.component';
import { DatosService } from 'src/app/Serveces/datos.service';
import { ReportsService } from 'src/app/Serveces/reports.service';
import BarcoController, { Barco } from '../../Models/Barco/BarcoController';
@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})
export class BarcosComponent implements OnInit {
  public barcos: Barco[] = [];
  constructor( private toastr: MatDialog,   
               private barcoController: BarcoController,
               private datos:DatosService,
               private repo:ReportsService){ }

  ngOnInit(): void {
    this.getbarcos()
  }
  ticket(){
    this.repo.Recibos(null);
  }
  getbarcos(){
    this.barcos=[];
    this.barcoController.GetBarcos().subscribe({
      next: (res:Barco[]) => {
        this.barcos=res;
      },error: (err:Error)=> {
          this.datos.showMessage(err.message,"Error en la Cargo de los Barcos","error")
      }

    })
  }
  abrirmodaledit(barco:Barco): void {
    const dialogRef = this.toastr.open(BarcoFormComponent,{width:"85%" ,height:"70%",data:{barco: barco}})
     dialogRef.afterClosed().subscribe(
      {next:  result => 
        {
          if (result!=null) {
            this.getbarcos() 
          }
                  
        } 
      })
  }
  abrirmodal(){
    let barco: Barco = {
      id:0,
      nombre:'', 
      cedula:'',
      cantBodega:0,
      capacidadBodega:0.000
    }
    this.abrirmodaledit(barco)
     
  }
  delete(barco:Barco): void{
    this.barcoController.deleteBarco(barco).subscribe({
      next: (res:boolean) => {
        
          this.datos.showMessage("Eliminado el Barco","Eliminando Barco","info")
          this.getbarcos()
        
      }
    })
  }
  

}
