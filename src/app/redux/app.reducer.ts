import * as fromUsuario from './usuario.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface State {
  usuario: fromUsuario.State;
}

export const reducers: ActionReducerMap<State> = {
  usuario: fromUsuario.usuarioReducer,
};

export const getUsuarioState = createFeatureSelector<fromUsuario.State>('usuario');
export const getUsuario = createSelector(getUsuarioState, fromUsuario.getUsuario);
export const usesIsValid = createSelector(getUsuarioState, fromUsuario.isValid);
