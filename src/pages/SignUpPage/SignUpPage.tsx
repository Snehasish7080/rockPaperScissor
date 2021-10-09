import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { signUp } from "../../api/SignUp";
import Layout from "../../atoms/Layout/Layout";
import { themeLight } from "../../lib/theme";
import Title from "../../organisms/Title/Title";
import { singUpPageStyles } from "./SignUpPageStyles";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { createNewUser } from "../../shared/Redux/signUp/signupEffect";
import { useDispatch, useSelector } from "react-redux";
import { GameState } from "../../shared/Redux/RootReducer";
import { SignUpStateI } from "../../shared/Redux/signUp/reducer";
import { setError } from "../../shared/Redux/signUp/actions";

type signUpDataResponse = {
  success?: boolean;
  message?: string;
};
function SignUpPage() {
  const styles = singUpPageStyles(themeLight);
  const [userName, setUserName] = useState<string>("");
  const [signUpError, setSignUpError] = useState<string>("");

  const signUpState = useSelector<GameState, SignUpStateI>(
    (state) => state.signUp
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInput = (value: string) => {
    setUserName(value);
    dispatch(setError(""));
  };

  return (
    <Layout sx={styles.mainContainer}>
      <Title />
      <Box sx={styles.inputContainer}>
        <TextField
          id="userName"
          label="userName"
          variant="outlined"
          color="info"
          fullWidth
          focused
          sx={styles.inputField}
          onChange={(e) => handleInput(e.target.value)}
        />
        {signUpState.message && (
          <Typography color="red" gutterBottom>
            {signUpState.message}
          </Typography>
        )}
        <Button
          variant="outlined"
          color="info"
          onClick={() => dispatch(createNewUser(userName, history))}
        >
          Play Game
        </Button>
      </Box>
    </Layout>
  );
}

export default SignUpPage;
