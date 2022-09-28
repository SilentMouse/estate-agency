// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// export const fakeApi = createApi({
//     reducerPath: "fakseApi/api",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "localhost"
//     }),
//     endpoints: build => ({
//         getEstates: build.query({
//             query: () => ({
//                 url: "estates"
//             })
//         })
//     })
// })

// const {useGetEstatesQuery } = fakeApi

import estate from "../mocks/estate.json" 
import estate_second from "../mocks/estate_second.json" 

export default class fakeApi{

    static getEstates(){
        return {data: [estate,estate_second]}
    }

}