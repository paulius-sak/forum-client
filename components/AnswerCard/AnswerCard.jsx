import React, { useState, useEffect } from "react";
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
  const [likes, setLikes] = useState(gained_likes.length);
  const [dislikes, setDislikes] = useState(gained_dislikes.length);
  const [userHasLiked, setUserHasLiked] = useState(false);
  const [userHasDisliked, setUserHasDisliked] = useState(false);

  const answerUser = users.find((user) => user.id === user_id);
  const isCreator = user && user.id === user_id;

  useEffect(() => {
    const currentUserID = user?.id;
    if (currentUserID) {
      setUserHasLiked(gained_likes.includes(currentUserID));
      setUserHasDisliked(gained_dislikes.includes(currentUserID));
    }
  }, [gained_likes, gained_dislikes, user]);

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
      if (userHasLiked) {
        setLikes(likes - 1);
        setUserHasLiked(false);
      } else {
        setLikes(likes + 1);
        setUserHasLiked(true);

        if (userHasDisliked) {
          setDislikes(dislikes - 1);
          setUserHasDisliked(false);
        }
      }
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
      if (userHasDisliked) {
        setDislikes(dislikes - 1);
        setUserHasDisliked(false);
      } else {
        setDislikes(dislikes + 1);
        setUserHasDisliked(true);

        if (userHasLiked) {
          setLikes(likes - 1);
          setUserHasLiked(false);
        }
      }
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
          <h5>Liked: {likes}</h5>
          <h5>Disliked: {dislikes}</h5>
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
