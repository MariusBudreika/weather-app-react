import React from "react";
import styles from "./WeatherInfo.module.scss";

const WeatherInfo = ({ data: { location, current } }) => {
  return (
    <div className={styles.box}>
      <div className={styles.topContainer}>
        <div className={styles.topContainerLocation}>
          {location.country} , {location.name}
        </div>
        <div className={styles.topContainerDate}>2022-05-06</div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomContainerTemperature}>
          {current.temp_c}°c
        </div>
        <div className={styles.bottomContainerWeather}>
          {current.condition.text}
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
