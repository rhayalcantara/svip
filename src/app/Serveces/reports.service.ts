import { Injectable } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  public documentD:any 
  constructor() {
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }
  iniciadocumento(){
    this.documentD = { 
        pageSize:{ width: 180, height:550 },
        pageMargins: [ 5, 10, 5, 10 ],
        footer: function(currentPage:number) { return [{text: 'Rhay Alcantara Programador (809-303-8210)',fontSize:8 ,alignment:  'center' },{text: currentPage.toString() ,alignment:  'right',margin: [ 0, 0, 50, 0 ] }] },
        content: 	
        [	
     
       ],
       styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        headerpv: {
            fontSize: 12,
            bold: true,
            alignment:  'center'
          },            
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        subheader2: {
            fontSize: 8,
            bold: false,
            alignment:  'center'
          },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      }
    }; 
}
public async Recibos(pago:any){
    this.iniciadocumento();
    let  documentDefinition = this.documentD;        
    let fecha = moment().format("DD/MM/YYYY");
    
    documentDefinition.content.push(  
            {image: await this.getBase64ImageFromURL("assets/images/logo-1.png"),alignment:  'center',width:25,height:25} ,
            {text:'Lilam', style: 'headerpv',margin: [0, 0, 0, 15]},            
            {text:'C/Dr. Jacinto Maño No25 ',fontSize:8,alignment:  'center',margin: [ 0, 0, 0, 0 ]}, 
            {text:'Edif. Profecional JM Piso 6 Ens. Paraiso',fontSize:8,alignment:  'center',margin: [ 0, 0, 0, 0 ]}, 
            {text:'Sto. Dgo.,R.D.', style: 'subheader2',margin: [ 0, 0, 0, 10 ]} ,
            {text:'Tel.:809-375-0585', style: 'subheader2',margin: [ 0, 0, 0, 10 ]} ,
           
            {text:'Ticket NO. ', style: 'headerpv'},
            {text:'15', style: 'headerpv'},
            {
             style: 'tableExample',
             table:
             {
                widths: ['50%', '50%'],
                body: 
                [
                    [{text:'Ficha:', fontSize:8,alignment:  'left'},
                    {text:'F-150:', fontSize:8,alignment:  'left'}],
                    [{text:'Conductor:', fontSize:8,alignment:  'left'},
                    {text:'Condutor001', fontSize:8,alignment:  'left'}],
                    [{text:'Placa:', fontSize:8,alignment:  'left' },
                    {text:'009-009:', fontSize:8,alignment:  'left'}]
                ]
                    
             },
            layout: { defaultBorder: false}
            },
            {
              style: 'tableExample',
              table:
              {
                 widths: ['50%', '50%'],
                 headerRows: 1,
                 body: 
                 [
                     [{text:'', fontSize:8,alignment:  'left'},
                      {text:'', fontSize:8,alignment:  'left',margin: [0, 0, 0, 15]}],
                      [{text:'CLIENTE:', fontSize:8,alignment:  'left'},
                      {text:'ADM DOINICANA', fontSize:8,alignment:  'left'}],
                
                 ]
                     
              },
             layout:  'headerLineOnly'
             },
             
            ); 
            
            
            
             //documentDefinition.content.push(cont)
             console.log(documentDefinition)
             pdfMake.createPdf(documentDefinition).open();
              //.download(); 
               
                            
    
}
getBase64ImageFromURL(url:any) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      if (ctx){
       ctx.drawImage(img, 0, 0); 
      }
      

      var dataURL = canvas.toDataURL("image/png");

      resolve(dataURL);
    };

    img.onerror = error => {
      reject(error);
    };

    img.src = url;
  });
}
}
