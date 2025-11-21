import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra fast flagship trading platform with streaming market data,advanced charts,aan elegant UI,and more.Enjoy the Kite expirience seamlessly on your Android and iOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
       imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account.Gain insights into your trades and investments with in depth reports and visualizations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commision-free, delivered directly to your Demat account. Enjoy the investment expirience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
      imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and expiriences with our super simple HTTP,JSON API's,if you are a startup,build your investments app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to  graps,collection of stocks market lessons with in depth,coverage and illustrations.Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
    <p className="text-center mb-5 mt-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
     
    </>
  );
}

export default ProductPage;
