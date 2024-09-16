import React from "react";
import { useTheme } from "../Utils/ThemeContext";

export const Profile = () => {
  const projectTheme = useTheme();
  return (
    <div
      style={
        projectTheme.theme === "dark"
          ? {
              backgroundColor: "black",
            }
          : {
              backgroundColor: "white",
            }
      }
    >
      <h1
        style={
          projectTheme.theme === "dark"
            ? {
                color: "white",
              }
            : {
                color: "black",
              }
        }
      >
        Profile Page
      </h1>
    </div>
  );
};
