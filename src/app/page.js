"use client";
import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import HeadeSection from "../../components/headerSection/headerSection";
import ParallexSection from "../../components/parallaxSection/parallaxSection";
import PackageComponent from "../../components/pricingCard/pricingcard";
import ContactSection from "../../components/contactSection/contact";
import Footer from "../../components/footer/footer";
import Socials from "../../components/solcialsSection/socials";
import styles from "./page.module.scss";
import "./globals.scss";
import ImageSlider from "../../components/sliderImage/sliderImage";
import Counter from "../../components/numberCounter/numberCounter";

const images = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
  "/img-6.jpg",
];

export default function Home() {
  // useEffect( () => {
  //   (
  //     async () => {
  //         const LocomotiveScroll = (await import('locomotive-scroll')).default
  //         const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <Counter />
      ) : (
        <>
          <Header />
          <HeadeSection />
          <ParallexSection />
          {/* <SliderImage images={images} /> */}
          <ImageSlider images={images} />
          <PackageComponent />
          <ContactSection />
          <Footer />
          <Socials />
        </>
      )}
    </main>
  );
}
