import React from 'react'
import CarouselHome from './CarouselHome/CarouselHome'

export default function Home() {
    // call API Banner,Lisfilm trong FilmAction.js 
    // save API Listfilm => state FilmReducer
    // RenderBanner = () => {
    //     // render banner từ API
    //     // dùng thư viện chuyển slide (slick or owl-carousel)


    // }

    // RenderListFilm = () => {
    //     // render danh sách phim lấy từ API
    //     // dùng thư viện chuyển slide (slick or owl-carousel)

    // }
    return (
        <div>
            <CarouselHome />
        </div>
    )
}
