import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { signUp } from "../../../api/SignUp";
import { updateSore } from "../../../api/updateScore";
import { ScoreI } from "../../../interface/Score";
import { UserI } from "../../../interface/User";
import { setUserScore } from "../state/actions";

export const setNewScore =
  ({ userName, score }: ScoreI) =>
  (dispatch: any) => {
    updateSore({
      userName: userName,
      score: score,
    })
      .then((response: any) => {
        if (!response.data.success) {
          console.log("score", response.data.message);
        }
      })
      .catch((error: any) => {
        console.log("score", error.response.data.message);
      });
  };
