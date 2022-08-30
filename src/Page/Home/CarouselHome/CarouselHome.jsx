import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { CarouselAction } from '../../../Redux/action/CarouselAction';
import { useDispatch, useSelector } from 'react-redux';
// import { CSSTransition } from 'react-transition-group';
import "./CarouselHome.css"


export default function CarouselHome() {
    const [show, setShow] = useState(true);
    let dispacth = useDispatch()
    useEffect(() => {
        let action = CarouselAction()
        dispacth(action)
    }, [])
    let { mangBanner } = useSelector((state) => {
        return state.bannerReducer
    });
    // console.log(arrayBanner)
    const contentStyle = {
        height: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };
    const renderBanner = () => (
        mangBanner.map((item, index) => {
            return <div key={index}>
                <div
                    style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, }}
                ></div>
            </div>
        })
    );
    // thêm event click hiện trailer phim
    return (
        <div className='carousel_BG'>

            <Carousel autoplay >{renderBanner()}</Carousel>
            {inprop === true && <button onClick={() => {
                console.log("true")
            }} className='img_play_carousel'>
                <img className='img-fluid' style={{ height: "100px" }} src="./img/play.png" alt="" />
            </button>}
        </div >
    )
}

