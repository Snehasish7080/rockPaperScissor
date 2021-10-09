import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { themeLight } from "./lib/theme";
import { CssBaseline } from "@mui/material";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <div className="App">
          <Router>
            <Routes />
          </Router>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
