import request from "../network/request"

export function getTag() {
    return request({
        url: '/blog/getTag',
        method: 'get',
    })
}

export function getPopularBlog() {
    return request({
        url: '/blog/getPopularBlog',
        method: 'get',
    })
}