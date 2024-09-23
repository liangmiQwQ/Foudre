import { IconButton, Typography } from "@mui/material";
import FloatProvider from "./FloatProvider";
import ButtonsAnimation from "./ButtonsAnimation";

export default function NavBar() {
  const Provider = FloatProvider;
  return (
    <Provider>
      {/* Control Buttons */}
      <div className="h-10"></div>
      {/* Mid Title */}
      <Typography variant="h5" className="font-mono">
        Foudre
      </Typography>
      {/* Nav Buttons */}
      <ButtonsAnimation></ButtonsAnimation>
    </Provider>
  );
}
