import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import style from "./Hero.module.scss";
import Link from "next/link"
import Image from "next/image";
import ft from "../../../assets/new/home6.jpg"
import ft2 from "../../../assets/new/home2.jpg"
import truck1 from "../../../assets/new/home1.jpg"
import axios from "axios";

const Hero = ({ ref }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("")
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    getText()
  }, [])
  async function getText() {
    try {
      let res = await axios.get("https://kanatik6.pythonanywhere.com/message/home_page/")
      setText(res.data[0])
    } catch (e) {
      console.log(e)
    }
  }
  return (

    <div className={style.hh}>
      <div className={style.toto}>
        <h1>{text?.title}</h1>
        <p>{text?.descriptions}</p>

      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className={style.slider}>
        <Carousel.Item className={style.lol}>
          <Image src={truck1} className={style.img} />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={ft} className={style.img} />
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={ft2} className={style.img} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
