import style from "./Technologies.module.scss";
import { technologies } from "./constants";
import Item from "./TechnologiesItem";
import React from "react";

export default function Stacks() {
  return (
    <div className={style.technologiesBody}>
      <div className="circle">
        {technologies.map((test, i) => {
          return (
            <div
              style={{
                animation: `animate ${i + 10}s linear infinite`,
              }}
              className={`dots`}
              key={test.id}
            >
              <div
                style={{
                  animation: `animateReverse ${i + 10}s linear infinite`,
                }}
              >
                <Item svg={technologies[i].icon} value={test.value} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
