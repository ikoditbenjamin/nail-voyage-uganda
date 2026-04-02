"use client";

import React, { memo, useMemo } from "react";
import AppIcon from "./appIcon";
import Image from "next/image";

interface AppLogoProps {
  src?: string;
  iconName?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({
  src = "/Logo.png",
  iconName = "SparklesIcon",
  size = 64,
  className = "",
  onClick,
}: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ["flex items-center"];
    if (onClick)
      classes.push("cursor-pointer hover:opacity-80 transition-opacity");
    if (className) classes.push(className);
    return classes.join(" ");
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick}>
      {src ? (
        <Image
          src={src}
          alt="Nail Voyage Uganda Logo"
          width={size}
          height={size}
          className="flex-shrink-0"
          priority={true}
          unoptimized={src.endsWith(".svg")}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;
