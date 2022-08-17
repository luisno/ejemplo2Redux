import { Component, OnInit } from '@angular/core';
import {DataLoginService} from "../services/data-login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dataUsuario: any;

  constructor(private dataLoginService: DataLoginService) { }

  ngOnInit(): void {
    this.dataUsuario = this.dataLoginService.dataUsuario;
  }

}
