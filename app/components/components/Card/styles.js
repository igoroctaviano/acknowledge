// Dependencies
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#A5D299"
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 15
  },
  title: {
    fontFamily: "nunito-regular",
    fontSize: 40
  },
  content: {
    fontFamily: "nunito-regular",
    textAlignVertical: "center",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 25
  },
  keywords: {
    fontSize: 17,
    fontFamily: "nunito-regular",
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
    zIndex: 200,
    height: 100,
    width: 100
  }
});

export default styles;
