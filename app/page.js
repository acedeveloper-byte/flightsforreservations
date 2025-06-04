"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import FlightDeals from "@/components/FlightDeals";
import FlightTickets from "@/components/FlightTickets";
import Footer from "@/components/Footer";
import TopDestinations from "@/components/TopDestinations";
import ExpediaModal from "@/components/Modal/Popup";
import CustomerCard from "@/components/Customercard";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <Header />

      <ExpediaModal show={showModal} onClose={() => setShowModal(false)} />

      <SearchEngine />
      <FlightDeals />
      <FlightTickets />

      <TopDestinations />
      <Footer />
    </>
  );
}
