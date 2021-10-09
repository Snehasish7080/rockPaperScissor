import { Container, ContainerProps } from "@mui/material";
import React, { ReactNode } from "react";
import { themeLight } from "../../lib/theme";
import { useStyles } from "./LayoutStyles";

type LayoutProps = {
  children: ReactNode;
} & ContainerProps;
function Layout({ children, ...props }: LayoutProps) {
  const styles = useStyles(themeLight);
  return (
    <Container {...props} maxWidth="xl" sx={{ ...styles.root, ...props.sx }}>
      {children}
    </Container>
  );
}

export default Layout;
