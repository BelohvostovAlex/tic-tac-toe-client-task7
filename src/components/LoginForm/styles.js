export const makeStyles = () => ({
  formTextField: {
    "& .MuiInput-root:after": {
      borderBottom: "2px solid #FF6A3D",
    },
    marginBottom: "20px",
    "&:hover": {},
    "& .Mui-focused": {
      color: "#FF6A3D !important",
    },
    "& .MuiInput-root:before": {
      color: "#FF6A3D",
    },
    "&:hover .MuiInput-root:before": {
      borderBottom: "1px solid black !important",
    },
  },
});
