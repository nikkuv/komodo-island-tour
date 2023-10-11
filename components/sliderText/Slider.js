'use client'
import React from 'react';
import Image from 'next/image'
import styles from './slider.module.scss';
import { useRef, useEffect } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Slider() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger : {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end : window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px"
    })

    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }

    if(xPercent > 0){
      xPercent = -100;
    }

    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  }

  return (
    <main className={styles.main}>
      <Image 
        src="/img.jpg"
        fill={true}
        alt="background"
      />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </main>
  )
}