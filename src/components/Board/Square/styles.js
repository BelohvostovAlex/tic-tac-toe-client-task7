export const makeStyles = () => ({
  squareWrapper: {
    flex: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    border: "1px solid black",
    fontSize: "30px",
    color: "black",
    cursor: "pointer",
    boxSizing: "border-box",
    "&:active": {
      backgroundColor: "lightgray",
    },
  },
  icon1: {
    color: "#FF6A3D",
    fontSize: "62px",
  },
  icon2: {
    color: "#1a2238",
    fontSize: "62px",
  },
});
