import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar data-tauri-drag-region className="!h-[3.25rem] min-h-12 flex justify-between">
        {/* Control Buttons */}
        <div className="h-10"></div>
        {/* Mid Title */}
        <Typography variant="h5" className="font-mono">
          Foudre
        </Typography>
        {/* Nav Buttons */}
        <div className="items-center flex"></div>
      </Toolbar>
    </AppBar>
  );
}
