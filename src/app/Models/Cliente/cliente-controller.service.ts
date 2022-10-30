import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DatosService } from "src/app/Serveces/datos.service";

@Injectable({
  providedIn: 'root'
})
export class ClienteControllerService {
  url: string = "" 
  constructor(private http:HttpClient,
    private datos:DatosService){
      this.url=this.datos.url_root
    }
    public  GetClientes():Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.url+'api/Clientes')
    }
    public insertClientes(obj:Cliente):Observable<Cliente>{
      var headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
      return this.http.post<Cliente>(this.url+'api/Clientes' , JSON.stringify(obj), { headers })
    }
    public updateCliente(obj:Cliente){
      var headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      });
       return this.http.put(this.url+`api/Clientes/${obj.id}` , JSON.stringify(obj), { headers })
      
    }
    public deleteCliente(Cliente:Cliente):Observable<boolean>{
      return this.http.delete<boolean>(this.url+`api/Clientes/${Cliente.id}`)
    }

}
export interface Cliente{
  id: number;
  nombre: string;
  responsable:string;
  direccion:string;
}