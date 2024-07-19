import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as carsService from "../../../services/carsService";
import * as commentsService from "../../../services/commentsService";
import { DeletionMessage } from "../modals/DeletionMessage";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import styles from "./CarDetails.module.css";
import { scrollToTop } from "../../globalComponents/ScrollArrow";

export const CarDetails = () => {
  const { userId } = useContext(AuthContext);
  const { carId } = useParams();
  const [car, setcar] = useState({});
  const redirect = useNavigate();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    scrollToTop();
    carsService
      .getcarDetails(carId)
      .then((result) => {
        setcar(result);
      })
      .catch((err) => {
        return redirect("*");
      });
  }, [carId, redirect]);

  const isOwner = userId === car.owner;
  let hasLiked = car.likedBy?.includes(userId) ? true : false;

  useEffect(() => {
    commentsService.getComments().then((result) => {
      const data = result.filter((y) => y.carId === carId);
      return setComments(data);
    });
  }, [carId]);

  const oncarDelete = (e) => {
    e.preventDefault();
    carsService
      .deletecar(carId)
      .then(() => {
        redirect("/cars");
      })
      .catch((err) => {
        throw err;
      });
  };

  const oncarLike = () => {
    const data = {
      userId: userId,
      likes: car.likes + 1,
      likedBy: userId,
    };
    carsService.likecar(car._id, data);
    setcar({ ...car, likes: data.likes, likedBy: data.likedBy });
    hasLiked = true;
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentBox}>
          <h1 className={styles.carTitle}>
            <span className={styles.highlight}>{car.name}</span>
          </h1>
          <img className={styles.img} src={car.imageUrl} alt="carImage" />
          <section className="car-info">
            <h3 className={styles.highlight}>Category</h3>
            <p className={styles.paragraph}>{car.category}</p>
            <h3 className={styles.highlight}>Mode</h3>
            <p className={styles.paragraph}>{car.mode}</p>
            <h3 className={styles.highlight}>Description</h3>
            <p className={styles.paragraph}>{car.description}</p>
            <h3 className={styles.highlight}>Release Date</h3>
            <p className={styles.paragraph}>
              <i className={`far fa-calendar-alt ${styles.highlight}`}></i>{" "}
              {car.date}
            </p>
            <h3 className={styles.highlight}>Liked by</h3>
            <p className={styles.paragraph}>{car.likes} users</p>
          </section>
          <h3 className={styles.highlight}>Comments</h3>
          {comments.map((x) => (
            <div className="car-info" key={x._id}>
              <p
                className={styles.paragraph}
                style={{ border: "1px solid #008cff" }}
              >
                {x.author}: {x.comment}
              </p>
            </div>
          ))}
          {comments.length === 0 && (
            <p className={styles.paragraph}>No comments yet.</p>
          )}
          <div className={styles.btnContainer}>
            {!isOwner && !hasLiked && (
              <button className={styles.btn} onClick={oncarLike}>
                <i className={`far fa-heart ${styles.highlight}`}></i> Like car{" "}
              </button>
            )}
            <Link className={styles.btn} to={`/comments/${carId}`}>
              <i className={`far fa-comments ${styles.highlight}`}></i> Comment{" "}
            </Link>
            {isOwner && (
              <>
                <Link className={styles.btn} to={`/cars/${carId}/edit`}>
                  <i className={`far fa-edit ${styles.highlight}`}></i> Edit{" "}
                </Link>
                <button
                  className={styles.btn}
                  onClick={() => setShowDeleteMessage(true)}
                >
                  <i className={`far fa-trash-alt ${styles.highlight}`}></i>{" "}
                  Delete{" "}
                </button>
              </>
            )}
          </div>
          <DeletionMessage
            show={showDeleteMessage}
            onClose={() => setShowDeleteMessage(false)}
            onConfirm={oncarDelete}
          />
        </div>
      </div>
    </div>
  );
};
