import React from "react";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";

const Loading = ({ full = true }) => {
  return (
    <div className={classNames({ "vh-100": full })}>
      <CircularProgress size="64px" color="error" className="d-block mx-auto" />
    </div>
  );
};

export default Loading;
