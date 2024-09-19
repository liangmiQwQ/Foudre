import { AppBar, Toolbar } from "@mui/material";

export default function FillProvider() {
  return (
    <AppBar position="static">
      <Toolbar
        data-tauri-drag-region
        className="!h-[3.25rem] min-h-12 flex justify-between"
      ></Toolbar>
    </AppBar>
  );
}
