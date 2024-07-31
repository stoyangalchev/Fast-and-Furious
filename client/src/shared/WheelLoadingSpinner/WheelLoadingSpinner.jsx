import styles from "./../WheelLoadingSpinner/WheelLoadingSpinner.module.css";

export const WheelLoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className={styles["wheel"]}>
        <img
          src="/img/car-wheel-11530932245yuklftkqsu.png"
          alt=""
          border="0"
          width="150"
          height="150"
         
        />
      </div>
      <h1>Fast & Furious </h1>
    </div>
  );
};
