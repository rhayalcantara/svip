import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
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
 public  GetBarcos():Observable<Barco[]>{
    return this.http.get<Barco[]>(this.url+'api/barcoes')
  }
  public insertBarcos(barco:Barco):Observable<Barco>{
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.post<Barco>(this.url+'api/barcoes' , JSON.stringify(barco), { headers })
  }
  public updateBarco(barco:Barco){
    var headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
     return this.http.put(this.url+`api/barcoes/${barco.id}` , JSON.stringify(barco), { headers })
    
  }
  public deleteBarco(barco:Barco):Observable<boolean>{
    return this.http.delete<boolean>(this.url+`api/barcoes/${barco.id}`)
  }
}

export interface Barco{
    id: number;
    nombre: string;
    cedula: string;
    cantBodega: number;
    capacidadBodega: number;
  }