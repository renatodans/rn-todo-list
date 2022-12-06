import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: "#262626",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    flex: 1,
    fontSize: 14,
    color: "#F2F2F2",
    marginLeft: 14,
    fontFamily: "Inter_400Regular",    
  },
  descriptionDecorationNone: {
    textDecorationLine: "none"
  },
  descriptionDecorationLine: {
    textDecorationLine: "line-through"
  },  
  statusImage: {
    width: 24,
    height: 24,
  },
  trashImage: {
    width: 32,
    height: 32,
  },
  button: {
    width: 32,
    height: 32,
    marginRight: 50
  },
});
