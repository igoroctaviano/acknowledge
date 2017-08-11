// Dependencies
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "flex-start",

    maxHeight: "82%",
    maxWidth: "97%",

    borderRadius: 5,
    backgroundColor: "white",
    padding: 20,

    elevation: 5,
  },
  content: {
    fontFamily: "nunito-regular",
    fontSize: 30
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    margin: 25,
    height: 150,
    width: 150
  },
});

export default styles;
