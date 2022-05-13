import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  searchBox: { position: "relative", width: "80%", alignItems: "center" },
  inputBox: {
    display: "flex",
    borderRadius: "3px",
    height: 40,
    padding: 7,
    marginTop: "10px",
    width: "100%",
  },
  iconSearch: {
    position: "absolute !important",
    left: 0,
    top: 0,
    height: 2,

    borderRadius: "0px !important",
    borderRight: "10px solid red",
  },
}));

export default useStyles;
