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