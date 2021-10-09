import { Typography, Box } from "@mui/material";
import { ApiResponse } from "apisauce";
import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
// import { user } from "../../api/getUser";
import Layout from "../../atoms/Layout/Layout";
import { themeLight } from "../../lib/theme";
import Title from "../../organisms/Title/Title";
import { GameState } from "../../shared/Redux/RootReducer";
import { SignUpStateI } from "../../shared/Redux/signUp/reducer";
import GameBox from "./GameBox";
import { homePageStyles } from "./HomePageStyles";
import TopUserBox from "./TopUserBox";

function HomePage() {
  const styles = homePageStyles(themeLight);

  const signUpState = useSelector<GameState, SignUpStateI>(
    (state) => state.signUp
  );

  return (
    <Layout sx={styles.mainContainer}>
      <Box sx={styles.userHeader}>
        <Typography gutterBottom align="right" sx={styles.userNameText}>
          {signUpState.user?.userName}
        </Typography>
      </Box>
      <Box sx={styles.detailContainer}>
        <Box sx={styles.gameContainer}>
          <Title
            sx={{
              width: "70%",
            }}
          />
          <GameBox />
        </Box>
        <TopUserBox />
      </Box>
    </Layout>
  );
}

export default HomePage;
