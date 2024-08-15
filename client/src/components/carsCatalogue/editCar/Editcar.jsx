import React, { useEffect, useState } from "react";
import * as carsService from "../../../services/carsService";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { FormValidatorContext } from "../../../contexts/FormValidatorContext";
import { scrollToTop } from "../../globalComponents/ScrollArrow";
import styles from "./../newCar/AddNewCar.module.css";

export const EditCar = () => {
  const { carValidator, errors } = useContext(FormValidatorContext);
  const [serverError, setServerError] = useState(null);
  const redirect = useNavigate();
  const { carId } = useParams();
  const [state, setState] = useState({
    name: "",
    category: "",
    date: "",
    imageUrl: "",
    mode: "",
    description: "",
  });

  useEffect(() => {
    scrollToTop();
    carsService
      .getcarDetails(carId)
      .then((data) => {
        setState(data);
      })
      .catch((err) => {
        throw err;
      });
  }, [carId]);

  const onChangeHandler = (e) => {
    const input = e.target.value;
    setState({
      ...state,
      [e.target.name]: input,
    });
  };

  const oncarsubmit = (e) => {
    e.preventDefault();
    carsService
      .editcar(state)
      .then(() => {
        redirect(`/cars/${carId}`);
      })
      .catch((err) => {
        setServerError(err.message);
      });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    redirect(`/cars/${state._id}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.col1}>
          <h1 className={styles.heading}>
            Edit <span className={styles.highlight}>your car</span> and make it
            better
          </h1>
        
        </div>
        <div className={styles.col2}>
          <div className={styles.col2Wrapper}>
            <form onSubmit={oncarsubmit}>
              <div className={styles.form}>
                <div className={styles.itemWrapper}>
                  <label className={styles.newcarLbl} htmlFor="name">
                    car Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={styles.input}
                    value={state.name}
                    onBlur={carValidator}
                    onChange={onChangeHandler}
                  />
                  <p className={styles.errors}>{errors?.name}</p>
                </div>
                <div className={styles.itemWrapper}>
                  <label className={styles.newcarLbl} htmlFor="category">
                    car Category
                  </label>
                  <select
                    name="category"
                    className={`${styles.select} ${styles.input}`}
                    value={state.category}
                    onBlur={carValidator}
                    onChange={onChangeHandler}
                  >
                    <option value="">--Please choose category--</option>
                    <option value="Coupes">Coupes</option>
                    <option value="Convertibles">Convertibles</option>
                    <option value="Electric car">Electric car</option>
                    <option value="Compact car">Compact car</option>
                    <option value="Hybrid car">Hybrid car</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Luxury car">Luxury car</option>
                    <option value="Micro car">Micro car</option>
                    <option value="Muscle car">Muscle car</option>
                    <option value="Off-road vehicle">Off-road vehicle</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Sport car">Sport car</option>
                    <option value="Truck">Truck</option>
                    <option value="Vans">Vans</option>
                    <option value="Vintage car">Vintage car</option>
                  </select>
                  <p className={styles.errors}>{errors?.category}</p>
                </div>
                <div className={styles.itemWrapper}>
                  <label className={styles.newcarLbl} htmlFor="date">
                    Release Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    className={styles.input}
                    value={state.date}
                    onBlur={carValidator}
                    onChange={onChangeHandler}
                  />
                  <p className={styles.errors}>{errors?.date}</p>
                </div>
                <div className={styles.itemWrapper}>
                  <label className={styles.newcarLbl} htmlFor="imageUrl">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    className={styles.input}
                    value={state.imageUrl}
                    onBlur={carValidator}
                    onChange={onChangeHandler}
                  />
                  <p className={styles.errors}>{errors?.imageUrl}</p>
                </div>

                <div className={styles.itemWrapper}>
                  <label className={styles.newcarLbl} htmlFor="mode">
                    Select Mode
                  </label>
                  <select
                    name="mode"
                    className={`${styles.select} ${styles.input}`}
                    style={{ height: 55 }}
                    value={state.mode}
                    onBlur={carValidator}
                    onChange={onChangeHandler}
                  >
                    <option value="">--Please choose mode--</option>
                    <option value="No Tuning">No Tuning</option>
                    <option value="Stage 1">Stage 1</option>
                    <option value="Stage 2">Stage 2</option>
                    <option value="Stage 3">Stage 3</option>
                  </select>
                  <p className={styles.errors}>{errors?.mode}</p>
                </div>
                <div className={styles.maxWidthWrapper}>
                  <label className={styles.newcarLbl} htmlFor="description">
                    car Description
                  </label>
                  <textarea
                    name="description"
                    className={styles.input}
                    rows="5"
                    value={state.description}
                    onBlur={carValidator}
                    onChange={onChangeHandler}
                  ></textarea>
                  <p className={styles.errors}>{errors?.description}</p>
                </div>
                <div className={styles.maxWidthWrapper}>
                  <p className={styles.errors}>{serverError}</p>
                  <button className={styles.btn} type="submit">
                    Submit
                  </button>
                  <p></p>
                  <button
                    className={styles.btn}
                    type="button"
                    onClick={cancelHandler}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
