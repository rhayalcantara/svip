import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-barco-form',
  templateUrl: './barco-form.component.html',
  styleUrls: ['./barco-form.component.css']
})
export class BarcoFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<BarcoFormComponent>
    ) { }

  ngOnInit(): void {
  }
  cerrar(){
    this.dialogRef.close();
  }
}
