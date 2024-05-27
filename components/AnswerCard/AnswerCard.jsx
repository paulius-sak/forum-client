import React, { useState } from "react";
import styles from "./AnswerCard.module.css";
import cookies from "js-cookie";
import axios from "axios";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const AnswerCard = ({
  id,
  date,
  answer_text,
  gained_likes,
  gained_dislikes,
  DeleteAnswer,
  user,
  user_id,
  users,
}) => {
  const [isShowWarning, setShowWarning] = useState(false);
  const answerUser = users.find((user) => user.id === user_id);

  const isCreator = user && user.id === user_id;

  const handleLike = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      await axios.post(
        `${process.env.SERVER_URL}/answers/${id}/like`,
        {},
        { headers }
      );
      window.location.reload();
    } catch (err) {
      if (err.response.status === 401) {
        alert("login to like or dislike answer");
      }
      console.log("err", err);
    }
  };

  const handleDislike = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };
      await axios.post(
        `${process.env.SERVER_URL}/answers/${id}/dislike`,
        {},
        { headers }
      );
      window.location.reload();
    } catch (err) {
      if (err.response.status === 401) {
        alert("login to like or dislike answer");
      }
      console.log("err", err);
    }
  };

  return (
    <main className={styles.wrapper}>
      <section className={styles.userInfoWrapper}>
        <section className={styles.userWrapper}>
          <h5>{answerUser?.name}</h5>
          <img className={styles.avatar} src={answerUser?.avatarUrl} alt="" />
        </section>
        <section className={styles.infoWrapper}>
          <h5>Liked: {gained_likes.length}</h5>
          <h5>Disliked: {gained_dislikes.length}</h5>
          <h6>{date.split("T")[0]}</h6>

          <Button onClick={() => handleLike()} title="Like" />
          <Button onClick={() => handleDislike()} title="Dislike" />

          {isCreator && (
            <Button
              onClick={() => setShowWarning(true)}
              title="Delete"
              className={styles.deleteBtn}
            />
          )}
        </section>
      </section>
      <section className={styles.answerWrapper}>
        <p className={styles.answerText}>{answer_text}</p>
      </section>

      {isShowWarning && (
        <Modal
          message="Do you really want to delete your answer?"
          onConfirm={DeleteAnswer}
          onCancel={() => setShowWarning(false)}
        />
      )}
    </main>
  );
};

export default AnswerCard;
