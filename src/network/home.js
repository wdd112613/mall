import { request } from './request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}



// 多数据整合
export class goods {
    constructor(shopinfo) {
        this.title = shopinfo.title
    }
}