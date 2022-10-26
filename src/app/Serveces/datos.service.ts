
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // public url_root:  string = "https://localhost:44305/"
  public url_root:string = "http://rhayalcantara-001-site4.ftempurl.com/"
  constructor() { }
  public showMessage(message: string, title: any, messageType: string) {
    switch (messageType) {
      case 'success':
        Swal.fire({
          title: title,
          text: message,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        break;
       case 'info':
         Swal.fire({
          title: title,
          text: message,
          icon: 'info',
          confirmButtonText: 'ok'
        })
         break;
       case 'error':
     //    this.toastr.error(message, title);
          Swal.fire({
            title: title,
            text: message,
            icon: 'error',
            confirmButtonText: 'ok'
          })
              break;
       case 'warning':
     //    this.toastr.warning(message, title);
        Swal.fire({
          title: title,
          text: message,
          icon: 'warning',
          confirmButtonText: 'ok'
        })
        break;
    }
   }

}
