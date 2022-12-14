import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;
      setInView(innerHeight >= (pageYOffset || 0));
    });
    return window.removeEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;
      setInView(innerHeight >= pageYOffset);
    });
  }, []);

  return (
    <>
      {/* <Head>
        <title>Document</title>
        <meta name="description" content="Generated by create next app" />
        <meta keyWords="  
Class A Driver,
CDL A License,
Commercial Driving,
Trucking,
Tractor Trailer,
CDL,
Solo Truck Driver,
Over The Road Experience,
Hazmat,
Tanker Truck Driver,
Loading and Unloading,
Hauling,
Freightliner,
Local Truck Driver,
Dry Van,
Flatbed Truck,
Dedicated Truck Driver, Водитель грузовика,
Водитель класса А,
CDL лицензия,
Коммерческое вождение,
Грузоперевозки,
Тракторный прицеп,
CDL,
Индивидуальный водитель грузовика,
По дороге, Опыт,
Хазмат,
Водитель автоцистерны,
Загрузка и разгрузка,
Перетяжка,
Фрайлайнер,
Местный водитель грузовика,
Сухой фургон,
Бортовой грузовик"

          keywords="ta trains inc, TA TRAINS INC, перевозки, truck, transportation, грузовик, freight transportation, грузовые перевозки, Class A Driver,
          CDL A License,
          Commercial Driving,
          Trucking,
          Tractor Trailer,
          CDL,
          Solo Truck Driver,
          Over The Road Experience,
          Hazmat,
          Tanker Truck Driver,
          Loading and Unloading,
          Hauling,
          Freightliner,
          Local Truck Driver,
          Dry Van,
          Flatbed Truck,
          Dedicated Truck Driver, Водитель грузовика,
          Водитель класса А,
          CDL лицензия,
          Коммерческое вождение,
          Грузоперевозки,
          Тракторный прицеп,
          CDL,
          Индивидуальный водитель грузовика,
          По дороге, Опыт,
          Хазмат,
          Водитель автоцистерны,
          Загрузка и разгрузка,
          Перетяжка,  
          Фрайлайнер,
          Местный водитель грузовика,
          Сухой фургон,
          Бортовой грузовик" />
          <meta name="google-site-verification" content="oSCWk-Y-_Xhyw0OYr8eI7pOkPOCGLaicG6xc04XGndc" />
        <link rel="icon" href="/logo.ico" />
      </Head> */}

      <Header inView={inView} />

      <main>{children}</main>

      <Footer />
    </>
  );
}
