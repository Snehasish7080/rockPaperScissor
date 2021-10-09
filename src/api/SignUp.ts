import { SignUpI } from "../interface/SignUp";
import client from "./Client";

const endPoint = "/auth/signup";
const signUp = ({ userName }: SignUpI) =>
  client.post(endPoint, {
    userName: userName,
  });

export { signUp };
