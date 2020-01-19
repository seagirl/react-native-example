export * from './member.creator'

export interface Action {
  type: string;
  payload?: object;
}

export enum ActionTypes {
  LIST_DATA_LOADED = 'LIST_DATA_LOADED',
  DETAIL_DATA_LOADED = 'DETAIL_DATA_LOADED',
  SELECT_MEMBER = 'SELECT_MEMBER',
}