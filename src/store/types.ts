import {ILoginState} from '@/store/login/types'

export interface IRootState {
  name: string
  age: number
}
//导出接口 login类型login module里的state类型
export interface IRootWithModule{
  login:ILoginState,
}
//导出这个类型为根和login里的类型
export type IStoreType = IRootState & IRootWithModule
