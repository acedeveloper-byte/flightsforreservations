"use client";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const destinations = [
      {
    country: "France",
    image: "/images/deals/france.jpg",
    stars: 5,
  },
  {
    country: "Maxico",
    image: "/images/deals/maxico.jpg",
    stars: 5,
  },
  {
    country: "New York",
    image: "/images/deals/new-york.jpg",
    stars: 5,
  },
  {
    country: "Canada",
    image: "/images/deals/canada.jpg",
    stars: 4,
  },
  {
    country: "Los Angeles",
    image: "/images/deals/los-angeles.jpg",
    stars: 5,
  },
];

const TopDestinations = () => {
  return (
    <Container className="my-5">
      {/* Section Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Top Destinations</h2>
        <div
          style={{
            width: "80px",
            height: "3px",
            backgroundColor: "#f5317f",
            margin: "6px auto 0",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      {/* Swiper Cards */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {destinations.map((dest, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: "220px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={dest.image}
                alt={dest.country}
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "12px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                  color: "white",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "6px",
                  }}
                ></span>
                <p className="mb-1 fw-semibold text-white">{dest.country}</p>
                <div className="d-flex gap-1">
                  {Array.from({ length: dest.stars }).map((_, i) => (
                    <FaStar key={i} size={14} color="#FFD700" />
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TopDestinations;
