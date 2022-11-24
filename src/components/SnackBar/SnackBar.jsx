import React from "react";

import { Alert, Snackbar } from "@mui/material";

export const SnackBar = ({ text, severity = "success", open, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};
