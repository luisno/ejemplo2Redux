import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MenuComponent } from './menu/menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { RegistrarLibroComponent } from './menu/opciones/registrar-libro/registrar-libro.component';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./redux/app.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RegistrarLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
