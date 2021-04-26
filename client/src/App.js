import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from "./components/pages/Home";
import Feed from "./components/pages/Feed";
import AuthPage from "./components/pages/AuthPage";

function App() {
  const theme = createMuiTheme({
    spacing: 8,
    palette: {
      primary: {
        main: "#f58f7c",
      },
      secondary: {
        main: "#fff",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 2,
        },
        containedSizeLarge: {
          padding: "3%",
          paddingRight: "5%",
          paddingLeft: "5%",
        },
        startIcon: {},
      },
    },
    typography: {
      fontFamily: `"Lora", sans-serif`,
    },
  });
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/feed" exact>
              <Feed />
            </Route>

            <Route path="/authpage" exact>
              <AuthPage />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
