import { Action } from '../'
import { Types } from './type'

export interface DataPayload {
  id: string;
  password: string;
}

export const setDataAction = (id: string, password: string): Action<DataPayload> => {
  return { type: Types.DATA_SAVED, payload: { id: id, password: password } }
}

export const getDataAction = (id: string, password: string): Action<DataPayload> => {
  return { type: Types.DATA_LOADED, payload: { id: id, password: password } }
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IDPayload {
  id: string;
}

export const setIdAction = (id: string): Action<IDPayload> => {
  return { type: Types.SET_ID, payload: { id: id } }
}

export interface PasswordPayload {
  password: string;
}

export const setPasswordAction = (password: string): Action<PasswordPayload> => {
  return { type: Types.SET_PASSWORD, payload: { password: password } }
}