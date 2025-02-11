import React from "react";
import home from "./home.module.css";
import Navbar from "../pages/Navbar";
import { useState } from "react";
const Home = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [network, setnetwork] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendSign = await fetch(`http://localhost:3000/register`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phonenumber, network }),
      });
      const response = await sendSign.json();

      if (sendSign.ok) {
        alert("Request sent  successfully");
        console.log(response);
      } else {
        alert("Request failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className={home.home}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <label>Mail Id</label>
        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="text"
          name="email"
          id=""
          placeholder=""
          onChange={(e) => setphonenumber(e.target.value)}
        />
        <label htmlFor="">Select Network Type</label>
        <select
          name="select network"
          id="network"
          onChange={(e) => setnetwork(e.target.value)}
        >
          <option value="VI">VI</option>
          <option value="Jio">Jio</option>
          <option value="Airtel">Airtel</option>
          <option value="BSNL">BSNL</option>
        </select>
        <button onClick={onSubmit} type="submit">
          Request
        </button>
      </div>
    </div>
  );
};

export default Home;
