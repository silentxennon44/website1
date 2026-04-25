import styles from "./styles.module.scss"
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import CustomStepper from "./CustomStepper";
import { setCompletedSteps, setCurrentStep } from "@/store/actions/RegistrationSteps";
import { RegistrationSteps } from "@/static/staticData";
import {  Card } from "@mui/material";
import classNames from "classnames";


import "swiper/swiper-bundle.css";

// import required modules
import { Pagination, A11y, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

function Register() {
  const { currentStep, completedSteps} = useAppSelector(state => state.RegistrationSteps);
  const dispatch = useAppDispatch();


  return (
    <main className={styles.register}>
      <section className={styles.stepper}>
        <CustomStepper/>
      </section>
      <section className={styles.pageContent}>
        
        {/* <Swiper
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
          shortSwipes={false}
          longSwipes={true}
          threshold={65}
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
                  ref={(el) => {
                    if (index === 1 && el) {
                      targetRef.current = el;
                    }
                  }}
                  key={index}
                  thumbnail={item.items[0].thumbnail}
                  title={item.items[0].name}
                  description={item.items[0].description}
                  link="/home"
                  className={classNames(styles.card, {
                    [styles.animate]: animate,
                  })}
                />
              </SwiperSlide>
            );
          })}
          <CustomPagination
            swiper={swiperInstance}
            current={activeSwiperIndex}
            total={swiperInstance?.slides.length}
          />
        </Swiper> */}
      </section>
      <section className={styles.pageAction}>
        {
          currentStep !== "Contact Info" &&completedSteps.length > 0 && <button onClick={()=>{
            dispatch(setCurrentStep(RegistrationSteps[RegistrationSteps.indexOf(currentStep) - 1]));
          }} className="defaultButton">Previous</button>
        }
        {
          currentStep !== "Summary" && 
            <button onClick={()=>{
            dispatch(setCurrentStep(RegistrationSteps[RegistrationSteps.indexOf(currentStep) + 1]));
            dispatch(setCompletedSteps([...completedSteps, currentStep]));
          }} className="defaultButton">Next</button>
        }
      </section>``
    </main>
  )
}

export default Register