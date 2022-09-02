import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataLoginService} from "../services/data-login.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from "../redux/app.reducer";
import {Subscription} from "rxjs";

export interface Section {
  name: string;
  updated: Date;
  icon: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public usuarioSuscripcion: Subscription;
  public menus: Section[] = [

    {
      name: 'Registrar libros',
      icon: 'menu_book',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Reportes de libros',
      icon: 'auto_stories',
      updated: new Date('1/1/16'),
    }
  ];

  dataUsuario: any;

  constructor(private dataLoginService: DataLoginService,
              private router: Router,
              private store: Store<fromRoot.State>) { }

  ngOnDestroy(): void {
        this.usuarioSuscripcion.unsubscribe();
    }

  ngOnInit(): void {
   this.usuarioSuscripcion = this.store.select(fromRoot.getUsuario).subscribe(response => {
      console.log(response);
    })
    this.dataUsuario = this.dataLoginService.dataUsuario;
  }

  renderizarPantalla(){
    this.router.navigate(['/menu/registrar-libro'])
  }

}
