import { IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import FloatProvider from "./FloatProvider";

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
      <div className="items-center flex">
        <IconButton>
          <SettingsIcon></SettingsIcon>
        </IconButton>
      </div>
    </Provider>
  );
}
