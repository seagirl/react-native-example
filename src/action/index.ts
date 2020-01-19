export * from './member.creator'

export interface Action {
  type: string;
  payload?: object;
}