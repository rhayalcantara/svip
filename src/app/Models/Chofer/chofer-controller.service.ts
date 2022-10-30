import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DatosService } from "src/app/Serveces/datos.service";

@Injectable({
  providedIn: 'root'
})
export class ChoferControllerService {
  url: string = "" 
  constructor(private http:HttpClient,
    private datos:DatosService){
      this.url=this.datos.url_root
    }
public  GetChofers():Observable<Chofer[]>{
return this.http.get<Chofer[]>(this.url+'api/Choferes')
}
public insertChofers(chofer:Chofer):Observable<Chofer>{
var headers = new HttpHeaders({
'Content-Type': 'application/json; charset=utf-8'
});
return this.http.post<Chofer>(this.url+'api/Choferes' , JSON.stringify(chofer), { headers })
}
public updateChofer(chofer:Chofer){
var headers = new HttpHeaders({
'Content-Type': 'application/json; charset=utf-8'
});
return this.http.put(this.url+`api/Choferes/${chofer.id}` , JSON.stringify(chofer), { headers })

}
public deleteChofer(chofer:Chofer):Observable<boolean>{
return this.http.delete<boolean>(this.url+`api/Choferes/${chofer.id}`)
}
}

export interface Chofer{
id: number;
nombre: string;
cedula: string;
}
