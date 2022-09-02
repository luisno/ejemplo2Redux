import {UsuarioModel} from "../model/UsuarioModel";
import {INGRESAR_USUARIO, UsuarioAction} from "./usuario.actions";


export interface State {
  isValid: boolean;
  usuario: UsuarioModel;
}

const initialState: State = {
  isValid: false,
  usuario: {
  password: null,
    email: null,
  }
};

export function usuarioReducer(state = initialState, action: UsuarioAction) {
  switch (action.type) {
    case INGRESAR_USUARIO:
      return {
        ...state,
        usuario: {
          password: action.payload.password,
          email: action.payload.email
        }
      }
  }
}

export const getUsuario = (state: State) => state?.usuario;
export const isValid = (state: State) => state?.isValid;
