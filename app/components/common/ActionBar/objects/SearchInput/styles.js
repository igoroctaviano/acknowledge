// Dependencies
import { StyleSheet, StatusBar, Platform } from "react-native";

// Color Palette
import Palette from "../../../../../config/palette";

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 16,
    padding: 4,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: Palette.secondary,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: "#ccd6dd"
  },
  textInput: {
    color: "#9ca4aa"
  }
});

export default styles;
