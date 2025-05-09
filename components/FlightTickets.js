"use client";
import Image from "next/image";
import { Container, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  {
    location: "New York",
    price: "From $350/ oneway",
    image: "/images/flight-deals/luftansa.png",
  },
  {
    location: "Paris",
       price: "From $350/ oneway",

    image: "/images/flight-deals/delta.png",
  },
  {
    location: "London",
       price: "From $350/ oneway",

    image: "/images/flight-deals/nepa.png",
  },
  {
    location: "Tokyo",
       price: "From $350/ oneway",

    image: "/images/flight-deals/delta.png",
  },
];

const FlightTickets = () => {
  return (
    <div className="flight-section py-5">
      <Container className="text-center">
        {/* Title */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="hr-line"></div>
          <h2 className="fw-bold px-4 py-2 text-white">
            Cheap Flights & Air Tickets
          </h2>
          <div className="hr-line"></div>
        </div>

        {/* Swiper */}
        <div className="position-relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="flight-swiper"
          >
            {destinations.map((dest, idx) => (
              <SwiperSlide key={idx}>
                <Card className="flight-card m-2">
                  <div className="card-img-wrapper">
                    <Image
                      src={dest.image}
                      alt={dest.location}
                      fill
                      className="card-img"
                    />
                  </div>
                  <Card.Body className="text-start px-4 py-3">
                    <Card.Title className="fw-bold fs-5">{dest.location}</Card.Title>
                    <div className="d-flex justify-content-between mt-3">
                      <Button variant="" className=" px-3 py-1 fw-semibold " style={{    fontSize: '15px',
    padding: '0px !important'}}>
                        {dest.price}
                      </Button>
                      <Button variant="outline-light" className=" px-3 py-1 fw-semibold button-call">
                        <a href="tel: +1" className="text-decoration-none text-white">
                          Book Now &gt;
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default FlightTickets;
