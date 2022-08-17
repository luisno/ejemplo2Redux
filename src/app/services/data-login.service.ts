import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {

  private _dataUsuario: any

  get dataUsuario(): any {
    return this._dataUsuario;
  }

  constructor() { }

  public enviarDataUsuario(dataUsuario: any): void {
    this._dataUsuario = dataUsuario;
  }

}
