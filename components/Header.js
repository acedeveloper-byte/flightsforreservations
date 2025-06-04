"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import "../app/globals.css";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-bg-color">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/images/logo/logo.png"
            width={270}
            height={55}
            alt="logo"
            className="logo-layout"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          style={{ fontSize: "11px !important" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mob-nav">
            <a
              href="/"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3 navigation"
            >
              Home
            </a>
            <a
              href="/about-us"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3 navigation"
            >
              About Us
            </a>

            <a
              href="/contact-us"
              className="mx-2 fw-medium text-decoration-none text-dark mx-3 navigation"
            >
              Contact Us
            </a>
          </Nav>

          {/* Right-Aligned Button */}
          <div className="ms-5">
            <Link href="tel: +1-866-294-3029" className="text-decoration-none">
              <button className="call-btn d-flex align-items-center gap-2 px-4 py-2  text-white">
                <FaPhoneVolume size={18} />
                +1-866-294-3029
              </button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
