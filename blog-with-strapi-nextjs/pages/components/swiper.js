import React from 'react'
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'


import img from '../../public/images/Quick & spicy nasi goreng.webp';
import img1 from '../../public/images/quick-chicken-humus-bowl.webp';
import img2 from '../../public/images/quick-tomato-risotto.webp';

export default function Swipers() {
  return (
      <div className="swiper">
        <div className="swiper-wrapper">
        <Image src={img} width={600}  height={400} alt="img"/>
        <Image src={img1} width={600} height={400} alt="img"/>
        <Image src={img2} width={600} height={400} alt="img"/>
        </div>
        <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
      </div>
  )
}
