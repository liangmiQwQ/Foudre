import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./NavBar/";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <NavBar></NavBar>
    </StyledEngineProvider>
  );
}

export default App;
