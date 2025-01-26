import { tempClothingData } from "@/static/staticData";
import styles from "./styles.module.scss";
import images from "@/assets";
import Card from "@/components/card";

import "swiper/swiper-bundle.css";

// import required modules
import { Pagination, A11y, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { useState } from "react";

function Home() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeSwiperIndex, setActiveSwiperIndex] = useState<number>(0);

  const CustomPagination = ({ swiper, current, total }) => {
    return (
      <div className={styles.customPagination}>
        <button
          type="button"
          title="Jump to the first slide"
          className={styles.firstSlide}
          onClick={() => swiper.slideTo(0)}
        >
          <FaAngleDoubleLeft />
        </button>
        <button
          type="button"
          title="Previous slide"
          className={styles.prevSlide}
          onClick={() => swiper.slidePrev()}
        >
          <FaChevronLeft />
        </button>
        <span className={styles.pagination}>
          {current + 1} / {total}
        </span>
        <button
          type="button"
          title="Next slide"
          className={styles.nextSlide}
          onClick={() => swiper.slideNext()}
        >
          <FaChevronRight />
        </button>
        <button
          type="button"
          title="Jump to the last slide"
          onClick={() => swiper.slideTo(total - 1)}
          className={styles.lastSlide}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    );
  };
  return (
    <main className={styles.home}>
      <section className={styles.videoBanner}>
        <video
          id="background-video"
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source
            src={images.videos.homieside_promotional_video_2.src}
            type="video/mp4"
          />
          <source
            src={images.videos.homieside_promotional_video_2.src}
            type="video/ogg"
          />
          Your browser does not support the video tag. I suggest you upgrade
          your browser.
        </video>
      </section>
      <section className={styles.news}>
        <h1 className={styles.header}>News & Updates</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            setActiveSwiperIndex(0);
            setSwiperInstance(swiper);
          }}
          onActiveIndexChange={(swiper) => {
            setActiveSwiperIndex(swiper.activeIndex);
          }}
          modules={[Pagination, A11y, Navigation]}
          className={styles.swiper}
          breakpoints={{
            0: {
              slidesPerView: "auto", // Extra small devices
              pagination: {
                enabled: true,
                el: styles.pagination,
                type: "fraction",
              },
              allowTouchMove: true,
              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0,
            },
            576: {
              slidesPerView: 1.5, // Small devices
              slidesOffsetAfter: 25,
              slidesOffsetBefore: 25,
              pagination: {
                enabled: true,
                el: styles.pagination,
                type: "fraction",
              },
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 4, // Large devices
              pagination: {
                paginationDisabledClass: "swiper-pagination-disabled",
                enabled: false,
              },
              allowTouchMove: false,
              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0,
            },
          }}
          freeMode={{
            enabled: true,
            sticky: true,
          }}
        >
          {tempClothingData.map((item, index) => {
            if (index > 3) return null;
            return (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                <Card
                  key={index}
                  thumbnail={item.items[0].thumbnail}
                  title={item.items[0].name}
                  description={item.items[0].description}
                  link="/home"
                  className={styles.card}
                />
              </SwiperSlide>
            );
          })}
          <CustomPagination
            swiper={swiperInstance}
            current={activeSwiperIndex}
            total={swiperInstance?.slides.length}
          />
        </Swiper>
      </section>
    </main>
  );
}

export default Home;
