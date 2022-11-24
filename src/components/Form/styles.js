export const makeStyles = (props) => ({
  formWrapper: {
    backgroundColor: " #fff",
    height: "40vh",
    width: "40vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "10px",
  },
  formTitle: {
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "32px",
  },
  ...props,
});
