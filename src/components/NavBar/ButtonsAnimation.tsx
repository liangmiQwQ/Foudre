import { Button, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useRef, useState } from "react";

export default function ButtonsAnimation() {
  const [leftButtonExpand, setLeftButtonExpand] = useState(true);
  const [rightButtonExpand, setRightButtonExpand] = useState(true);
  const [divWidth, setDivWidth] = useState<[number, number]>([0, 0]);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log([
      leftButtonRef.current?.offsetWidth || 0,
      rightButtonRef.current?.offsetWidth || 0,
    ]);
    setDivWidth([
      leftButtonRef.current?.offsetWidth || 0,
      rightButtonRef.current?.offsetWidth || 0,
    ]);
    setLeftButtonExpand(false);
    setRightButtonExpand(false);
  }, []);

  return (
    <div className="items-center flex">
      <div style={{ width: `${divWidth[0] + 10}px` }} className="flex  items-center justify-end">
        {!leftButtonExpand && (
          <IconButton onMouseEnter={() => setLeftButtonExpand(true)}>
            <DownloadIcon className="text-[--AppBar-color]"></DownloadIcon>
          </IconButton>
        )}
        {leftButtonExpand && (
          <Button
            className="shadow-none rounded-full px-[10px]"
            variant="contained"
            onMouseLeave={() => setLeftButtonExpand(false)}
            ref={leftButtonRef}
          >
            <DownloadIcon className="text-[--AppBar-color]"></DownloadIcon>
            <span className="text-white">下载</span>
          </Button>
        )}
      </div>

      <div style={{ width: `${divWidth[1] + 10}px` }} className="flex items-center">
        {!rightButtonExpand && (
          <IconButton onMouseEnter={() => setRightButtonExpand(true)}>
            <SettingsIcon className="text-[--AppBar-color]"></SettingsIcon>
          </IconButton>
        )}
        {rightButtonExpand && (
          <Button
            className="shadow-none rounded-full px-[10px]"
            variant="contained"
            onMouseLeave={() => setRightButtonExpand(false)}
            ref={rightButtonRef}
          >
            <span className="text-white">设置</span>
            <SettingsIcon className="text-[--AppBar-color]"></SettingsIcon>
          </Button>
        )}
      </div>
    </div>
  );
}
