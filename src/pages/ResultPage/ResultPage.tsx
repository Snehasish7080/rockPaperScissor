import React from "react";
import Layout from "../../atoms/Layout/Layout";
import { themeLight } from "../../lib/theme";
import Title from "../../organisms/Title/Title";
import { resultPageStyles } from "./ResultPageStyles";
import ResultBox from "./ResultBox";

function ResultPage() {
  const styles = resultPageStyles(themeLight);

  return (
    <Layout sx={styles.mainContainer}>
      <Title />
      <ResultBox />
    </Layout>
  );
}

export default ResultPage;
