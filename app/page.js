"use client";
import Image from "next/image";
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import FlightDeals from "@/components/FlightDeals";
import FlightTickets from "@/components/FlightTickets";
import Footer from "@/components/Footer";
import TopDestinations from "@/components/TopDestinations";

export default function Home() {
  return (
  <>
  <Header/>
  <SearchEngine/>
  <FlightDeals/>
  <FlightTickets/>

<TopDestinations/>
  <Footer/>
  </>
  );
}
