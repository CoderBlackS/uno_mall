import hyRequest from '@/service'
//店铺信息
export function accountLoginRequest(page:number,pageSize:number) {
  return hyRequest.get({
    url: `admin/shop/list?page=${page}&pagesize=${pageSize}`
  })
}
