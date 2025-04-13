import React from "react";
import styles from "./MovieCard.module.css";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
function MovieCard({ details }) {
  return (
    <div
      className={styles.cardWrapper}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.2) 100%), url(${details.bg_image})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition:"center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.cardContainer}>
        <div className={styles.top}>
          <div className={styles.mainContext}>
            <div className={styles.poster}>
              <img src={details.poster} alt="poster" />
            </div>
            <div className={styles.movieDetails}>
              <p>{details.name}</p>
              <p>{details.release_year}, {details.director}</p>
              <p>
                <span>{details.duration_minutes} min</span>
                <span>{details.genre.join(", ")}</span>
              </p>
            </div>
          </div>
          <div className={styles.description}>{details.description}</div>
        </div>
        <div className={styles.iconsContainer}>
          <IoShareSocialSharp />
          <FaHeart />
          <FaCommentAlt />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
