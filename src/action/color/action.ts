import { Color } from '../../entity'
import { Action } from '../'
import { Types } from './type'

export interface GetListPayload {
  colors: Color[];
}

export const getListAction = (colors: Color[]): Action<GetListPayload> => {
  return { type: Types.LIST_DATA_LOADED, payload: { colors: colors } }
}