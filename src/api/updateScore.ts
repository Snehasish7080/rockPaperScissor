import { ScoreI } from "../interface/Score";
import client from "./Client";

const endPoint = "/auth/score";
const updateSore = ({ userName, score }: ScoreI) =>
  client.post(endPoint, {
    userName: userName,
    score: score,
  });

export { updateSore };
