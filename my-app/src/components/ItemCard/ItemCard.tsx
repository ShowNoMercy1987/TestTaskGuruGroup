import { CardWrapper } from "./ItemCardStyles";
import { CardTop } from "./ItemCardStyles";
import { CardBottom } from "./ItemCardStyles";
import { CardBottomWrapper } from "./ItemCardStyles";
import { LikeWrapper } from "./ItemCardStyles";
import { Text } from "./ItemCardStyles";
import { CityWrapper } from "./ItemCardStyles";
import { DateWrapper } from "./ItemCardStyles";
import { ReactComponent as LikeSVG } from "../../img/IconLike.svg";
import { ICard } from "../types/card";
import { VisitedButton } from "../VisitedButton/VisitedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/pagination";

export const ItemCard = ({
  id,
  seen,
  address,
  about,
  createdAt,
  price,
  title,
  onClick,
}: ICard) => {
  const coast = Math.round(price);
  const date = createdAt.slice(0, 9);
  const time = createdAt.slice(11, 18);

  return (
    <>
      <CardWrapper key={id} onClick={onClick}>
        <CardTop>
          {seen && <VisitedButton />}

          <Swiper
          className="slider-img"
            modules={[Pagination]}
            pagination={{ clickable: false }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                className="slider-img"
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fbeach.jpg?w=226&h=260&fit=crop&ixlib=js-2.0.0&s=a8008191b413be738fe881f1227afd78"
                alt="123"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slider-img"
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fbeach.jpg?w=226&h=260&fit=crop&ixlib=js-2.0.0&s=a8008191b413be738fe881f1227afd78"
                alt="123"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slider-img"
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fbeach.jpg?w=226&h=260&fit=crop&ixlib=js-2.0.0&s=a8008191b413be738fe881f1227afd78"
                alt="123"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slider-img"
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fbeach.jpg?w=226&h=260&fit=crop&ixlib=js-2.0.0&s=a8008191b413be738fe881f1227afd78"
                alt="123"
              ></img>
            </SwiperSlide>
            ...
          </Swiper>
        </CardTop>
        <CardBottom>
          <CardBottomWrapper>
            <LikeWrapper>
              <LikeSVG className="like-styles" />
            </LikeWrapper>
            <Text
              fontFamily="Ubuntu"
              fontStyle="normal"
              fontWeight="700"
              fontSize="22px"
              color="#2c2c2c"
            >
              {coast} ₽
            </Text>
            <Text
              fontFamily="Ubuntu"
              fontStyle="normal"
              fontWeight="500"
              fontSize="14px"
              color="#2c2c2c"
            >
              {title}
            </Text>
            <CityWrapper>
              <Text
                fontFamily="Ubuntu"
                fontStyle="normal"
                fontWeight="400"
                fontSize="12px"
                color="#8F8F8F"
                width="102px"
              >
                {address}
              </Text>
              <DateWrapper>
                <Text
                  fontFamily="Ubuntu"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="12px"
                  color="#8F8F8F"
                >
                  {date}
                </Text>
                <Text
                  fontFamily="Ubuntu"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="12px"
                  color="#8F8F8F"
                >
                  {time}
                </Text>
              </DateWrapper>
            </CityWrapper>
          </CardBottomWrapper>
        </CardBottom>
      </CardWrapper>
    </>
  );
};
