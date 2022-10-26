import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DatosService } from "src/app/Serveces/datos.service";

@Injectable({
  providedIn: 'root'
})
export class CamionControllerService {
  url: string = "" 
  constructor(private http:HttpClient,
    private datos:DatosService){
      this.url=this.datos.url_root
    }

    public  GetCamions():Observable<Camion[]>{
      return this.http.get<Camion[]>(this.url+'api/Camions')
    }
    public insertCamion(camion:Camion):Observable<Camion>{
      var headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
      return this.http.post<Camion>(this.url+'api/Camions' , JSON.stringify(camion), { headers })
    }
    public updateCamion(camion:Camion){
      var headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
       return this.http.put(this.url+`api/Camions/${camion.id}` , JSON.stringify(camion), { headers })
      
    }
    public deleteCamion(camion:Camion):Observable<boolean>{
      return this.http.delete<boolean>(this.url+`api/Camions/${camion.id}`)
    }
}
export interface Camion {
  id: number;
  placa: string;
  ficha: string;
}