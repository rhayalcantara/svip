import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcosComponent } from '../app/Pages/barcos/barcos.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'barcos', component: BarcosComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
