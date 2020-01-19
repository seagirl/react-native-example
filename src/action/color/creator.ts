import { Action } from '../'
import { getListAction, GetListPayload } from './action'

export function getList (): Action<GetListPayload> {
  const colors = [
    { id: 1, code: '#8f9122' },
    { id: 2, code: '#618a1c' },
    { id: 3, code: '#30572e' },
    { id: 4, code: '#b9891c' },
    { id: 5, code: '#600665' },
    { id: 6, code: '#04467e' },
    { id: 7, code: '#666992' },
    { id: 8, code: '#522607' },
    { id: 9, code: '#110000' },
    { id: 10, code: '#a3130d' },
    { id: 11, code: '#b63527' },
    { id: 12, code: '#313642' },
  ]
  return getListAction(colors)
}