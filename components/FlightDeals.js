"use client";
import React from "react";
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";

const flightDeals = [
  {
    id: 1,
    image: "/images/deals/london.jpg",
    price: "$350.00",
    route: "London",
    type: "Multiway Flight",
    rating: 4.5,
    reviews: 36,
  },
  {
    id: 2,
    image: "/images/deals/new-york.jpg",
    price: "$899.00",
    route: "New York",
    type: "Oneway Flight",
    rating: 4.8,
    reviews: 48,
  },
  {
    id: 3,
        image: "/images/deals/paris.jpg",
    price: "$350.00",
    route: "Paris",
    type: "Oneway Flight",
    rating: 4.2,
    reviews: 32,
  },
    {
    id: 3,
        image: "/images/deals/los-angeles.jpg",
    price: "$370.00",
    route: "Los Angeles",
    type: "Oneway Flight",
    rating: 4.2,
    reviews: 30,
  },
    {
    id: 3,
        image: "/images/deals/miami.jpg",
    price: "$250.00",
    route: "Miami",
    type: "Oneway Flight",
    rating: 4.2,
    reviews: 35,
  },
    {
    id: 3,
        image: "/images/deals/canada.jpg",
    price: "$450.00",
    route: "Canada",
    type: "Oneway Flight",
    rating: 4.2,
    reviews: 38,
  },
];

const FlightDeals = () => {
  return (
    <section className="flight-deals-section py-5 text-center">
      <h2 className="fw-bold mb-1">Featured Flight Deals</h2>
      <div className="underline mb-4 mx-auto"></div>

      <div className="container">
        <div className="row justify-content-center">
          {flightDeals.map((deal) => (
            <div key={deal.id} className="col-md-4 mb-4">
              <div className="deal-card position-relative shadow-sm rounded-4 overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.route}
                  width={400}
                  height={300}
                  className="img-fluid w-100 deal-img"
                />
                <button className="wishlist-btn position-absolute top-0 end-0 m-2 btn btn-light rounded-circle p-2">
                  <FaHeart color="#d33" />
                </button>
                <div className="price-tag position-absolute bottom-0 start-0 bg-white px-3 py-1 rounded-top-end fw-semibold">
                  From {deal.price}
                </div>
              </div>
              <div className="mt-2 text-start ps-2">
                <small className="text-muted">{deal.type}</small>
                <h6 className="fw-semibold">{deal.route}</h6>
                <div className="text-warning d-flex align-items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={12} color={i < Math.round(deal.rating) ? "#f9a825" : "#ddd"} />
                  ))}
                  <span className="ms-1 text-danger fw-medium">
                    {deal.reviews} Reviews
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightDeals;

