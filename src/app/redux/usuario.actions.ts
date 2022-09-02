import {Action} from "@ngrx/store";
import {UsuarioModel} from "../model/UsuarioModel";

export const INGRESAR_USUARIO = '[Usuario] Crear';

export class CrearUsuario implements Action {
  readonly type = INGRESAR_USUARIO;

  constructor(public payload: UsuarioModel) {
  }
}

export type UsuarioAction = CrearUsuario;
