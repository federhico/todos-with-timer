export enum  Priority {
  High = 0,
  Medium,
  Low
}

export interface Todo {
  id?:string,
  title?: string,
  spent?: number,
  description?: string,
  inProgress?:boolean,
  priority?:Priority,
  done?:boolean,
  deleted?:boolean,
}
