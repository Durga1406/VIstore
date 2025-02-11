import React from "react";
import logo1 from "./viimage.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <img src={logo1} alt="logo1" />
        <h1>Welcome to Fancy Numbers!</h1>
        <p>
          Looking for a number that stands out? At{" "}
          <strong>Fancy Numbers</strong>, we make it easy for you to get the
          perfect fancy number that matches your style, personality, or business
          needs.
        </p>
        <h2>What We Offer:</h2>
        <ul>
          <li>
            <strong>Exclusive Fancy Numbers:</strong> Choose from a wide range
            of premium and personalized numbers.
          </li>
          <li>
            <strong>Easy Booking Process:</strong> Request your favorite number
            with just a few clicks.
          </li>
          <li>
            <strong>Wide Availability:</strong> Explore options across multiple
            categories to find the ideal number.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> Competitive rates for all your
            fancy number needs.
          </li>
        </ul>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Simplicity:</strong> A user-friendly platform to browse,
            select, and book your desired number.
          </li>
          <li>
            <strong>Reliability:</strong> Transparent processes with no hidden
            charges.
          </li>
          <li>
            <strong>Fast Service:</strong> Quick responses to your requests,
            ensuring you get your number without hassle.
          </li>
        </ul>
        <p>
          <strong>Make Your Mark with a Fancy Number!</strong>
        </p>
        <Link to="/Home">Get Started Now!</Link>;
      </div>
    </div>
  );
};

export default Main;
