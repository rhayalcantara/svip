import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DatosService } from "src/app/Serveces/datos.service";

@Injectable({
  providedIn: 'root'
})
export default class BarcoController { 
  url: string = "" 
  constructor(private http:HttpClient,
              private datos:DatosService){
                this.url=this.datos.url_root
              }
 public  GetBancos():Observable<Barco[]>{
    return this.http.get<Barco[]>(this.url+'api/barcoes')
  }
}

export interface Barco{
    id: number;
    nombre: string;
    cedula: string;
    cantBodega: number;
    capacidadBodega: number;
  }