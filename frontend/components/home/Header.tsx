"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const Header = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="border-2 border-green-400">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/logo.png" alt="image" height={200} width={200} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
