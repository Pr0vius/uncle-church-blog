"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function HeroSlider({ images }: Props) {
  const config: SwiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: "fade",
    autoplay: {
      delay:3000,
      disableOnInteraction: false,
      
    },
    loop: true,
  };
  return (
    <Swiper {...config}>
      {images.map((image, index) => (
        <SwiperSlide className="w-full" key={index}>
          <div className="w-full relative" style={{ paddingTop: "90%" }}>
            <Image
              className="rounded-md object-cover object-center absolute top-0 left-0 w-full"
              src={image}
              alt=""
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
