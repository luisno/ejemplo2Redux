import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import {RegistrarLibroComponent} from "./menu/opciones/registrar-libro/registrar-libro.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'menu', component: MenuComponent, canActivate: [AuthGuardGuard],
  children: [
    {path: "registrar-libro", component: RegistrarLibroComponent}
  ]},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
