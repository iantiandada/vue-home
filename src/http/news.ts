import axios from "@/http/axios.ts";

export interface newsData{
    newsTitle: string
    newsType: number
    newsContent:string
}

export const newsList = (currentPage: number, rows: number, category?: number) => {
    return axios({
        url: '/api/news/newsList',
        method: 'GET',
        params: { currentPage, rows, category }   // category 可选，不传则查全部
    })
}
export const getNewsById = (id: number) => {
    return axios({
        url: `/api/news/${id}`,
        method: 'GET'
    })
}