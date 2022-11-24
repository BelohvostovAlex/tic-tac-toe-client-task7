export const makeStyles = () => ({
  joinWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  formTextField: {
    marginBottom: "20px",
    "&:hover": {},
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FF6A3D !important",
    },
    "& .Mui-focused ": {
      color: "#FF6A3D !important",
    },
  },
  btnExtraStyles: { position: "absolute", top: "2vh", right: "2vh" },
});
