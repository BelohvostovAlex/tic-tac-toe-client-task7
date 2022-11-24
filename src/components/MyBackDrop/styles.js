export const makeStyles = (props) => ({
  backDropWrapper: {
    zIndex: props.backDropIndex + 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  backDropInfoWrapper: {
    width: "30vw",
    height: "25vh",
    background: "#fff",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    boxSizing: "border-box",
  },
  backDropTitle: {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "21px",
  },
});
