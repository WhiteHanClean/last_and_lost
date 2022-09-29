import React from "react";
import Image from "next/image";
import style from "./Technologies.module.scss";

const Item = ({ svg, value }) => {
  return (
    <div className={style.stackWrapper}>
      <Image width={36} height={36} src={svg} />
      <p>{value}</p>
    </div>
  );
};

export default Item;
