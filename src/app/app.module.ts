import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Pages/login/login.component';
import { BarcosComponent } from './Pages/barcos/barcos.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarcoFormComponent } from './Components/Forms/barco-form/barco-form.component';
import  BarcoController  from './Models/Barco/BarcoController';
import { DatosService } from './Serveces/datos.service';
import { HttpClientModule } from '@angular/common/http';
import { CamionFormComponent } from './Components/Forms/camion-form/camion-form.component';
import { CamionComponent } from './Pages/camion/camion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BarcosComponent,
    InicioComponent,
    BarcoFormComponent,
    CamionFormComponent,
    CamionComponent
  ],
  entryComponents:[BarcoFormComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatDialogModule,
    MatPaginatorModule,    
    MatMenuModule,
    
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
 ],
  providers: [DatosService,BarcoController],
  bootstrap: [AppComponent]
})
export class AppModule { }
