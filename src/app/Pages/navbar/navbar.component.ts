import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatSidenav, { static: false }) sidenav!: MatSidenav;
  public mostrarmenu:Boolean = false;
  public isExpanded:Boolean  = false;
  constructor(private router: Router) { }

  ngOnInit(): void {      
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  ngAfterViewInit() {
    
    this.mostrarmenu=true;
    this.sidenav.mode='over';
    } 
  precion(e:string){
    console.log(e)
    if (e=='barco'){
      this.router.navigateByUrl('/barcos')
    }
  }
}
