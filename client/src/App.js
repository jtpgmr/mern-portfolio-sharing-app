import { Container } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


import { NavBar, Home, Auth } from "./components";


const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
          <Route 
            exact 
            path="/"
            element={<Home />}
          />
          <Route 
            exact 
            path="/auth"
            element={<Auth />}
          />
        </Routes>
      </Container>
      </Router>
  );
};

export default App;
