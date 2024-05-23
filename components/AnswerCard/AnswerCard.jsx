import React, { useState } from "react";
import styles from "./AnswerCard.module.css";
import cookies from "js-cookie";
import axios from "axios";

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
  const answerUser = users.find((user) => user.id === user_id);

  console.log(answerUser);
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
    <div className={styles.wrapper}>
      <p>{answer_text}</p>
      <h5>liked: {gained_likes.length}</h5>
      <h5>disliked: {gained_dislikes.length}</h5>
      <h6>created: {date.split("T")[0]}</h6>
      {isCreator && <button onClick={DeleteAnswer}>delete</button>}
      <div>
        <button onClick={handleLike}>like</button>
        <button onClick={handleDislike}>dislike</button>
      </div>
      <div>
        <h5>user:{answerUser?.name}</h5>
        <img className={styles.avatar} src={answerUser?.avatarUrl} alt="" />
      </div>
    </div>
  );
};

export default AnswerCard;
