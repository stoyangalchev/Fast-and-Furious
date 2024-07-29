import styles from "./../WheelLoadingSpinner/WheelLoadingSpinner.module.css";

export const WheelLoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className={styles["wheel"]}>
        <img
          src="https://i.ibb.co/1Zgw6P9/car-wheel-13.png"
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
