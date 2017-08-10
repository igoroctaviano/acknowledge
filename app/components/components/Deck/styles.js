// Dependencies
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    flexDirection: "column",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    marginTop: 70,
    marginBottom: 70,
    marginLeft: 25,
    marginRight: 25,

    borderRadius: 5,
    backgroundColor: "white",
    padding: 15
  },
  title: {
    fontSize: 40
  },
  content: {
    textAlignVertical: "center",
    textAlign: "center",

    paddingTop: 10,
    fontSize: 25
  },
  keywords: {
    fontSize: 17,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,

    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    paddingTop: 10,
    height: 100,
    width: 100
  }
});

export default styles;
