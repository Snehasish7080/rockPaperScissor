import { Box, Typography } from "@mui/material";
import { ApiResponse } from "apisauce";
import React from "react";
import { useQuery } from "react-query";
import { getTopUser } from "../../api/TopUsers";
import { UserI } from "../../interface/User";
import { themeLight } from "../../lib/theme";
import { homePageStyles } from "./HomePageStyles";
const topUser = [
  {
    userName: "test123",
    score: 12,
  },
  {
    userName: "test1235",
    score: 10,
  },
  {
    userName: "test13",
    score: 11,
  },
  {
    userName: "test23",
    score: 9,
  },
];
function TopUserBox() {
  const styles = homePageStyles(themeLight);

  const getTopUsers = async () => {
    const response: ApiResponse<any, any> = await getTopUser();
    return response.data.data;
  };
  const { data: topUsers } = useQuery<UserI[]>("topUsers", getTopUsers, {
    cacheTime: 0,
  });

  return (
    <Box sx={styles.topUserContainer}>
      <Box sx={styles.topUserHeader}>
        <Typography sx={styles.topUserText} gutterBottom>
          Top User
        </Typography>
      </Box>
      <Box sx={styles.topUserNameContainer}>
        {(topUsers || []).map((item, index) => (
          <Box
            sx={styles.topUserNameContainerRow}
            key={item + index.toString()}
          >
            <Typography sx={styles.topUserText} gutterBottom>
              {item.userName}
            </Typography>
            <Typography sx={styles.topUserText} gutterBottom>
              {item.score}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TopUserBox;
