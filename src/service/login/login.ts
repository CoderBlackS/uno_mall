import hyRequest from '@/service'
import { IAccount, ILoginResult, IDataType } from './types'
//登录操作存token
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: '/admin/doLogin',
    data: account
  })
}
//Menu菜单
export function loginLeftMenus(){
  return hyRequest.post<any>({
    url:'/admin/roleMenu'
  })
}
