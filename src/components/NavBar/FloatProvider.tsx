import { AppBar, Toolbar } from "@mui/material";
import { ReactNode } from "react";

export default function FloatProvider({ children }: { children: ReactNode }) {
  return (
    <AppBar position="static">
      <Toolbar data-tauri-drag-region className="!h-[3.25rem] min-h-12 flex justify-between">
        {children}
      </Toolbar>
    </AppBar>
  );
}
