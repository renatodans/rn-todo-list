import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 24,
  },
  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 110.34,
    height: 32,
  },
  clipboardImage: {
    width: 56,
    height: 56,
    marginBottom: 16,
    marginTop: 40,
  },
  containerEmpty: {
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
    marginTop: 30,
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
  },

  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  createdInfo: {
    flexDirection: "row",
  },
  createdText: {
    fontFamily: "Inter_700Bold",
    color: "#4EA8DE",
    fontSize: 14,
  },
  createdCounterText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "#D9D9D9",
    marginLeft: 10,
    backgroundColor: "#333333",
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 9,
  },

  doneInfo: {
    flexDirection: "row",
  },
  doneText: {
    fontFamily: "Inter_700Bold",
    color: "#8284FA",
    fontSize: 14,
  },
  doneCounterText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "#D9D9D9",
    marginLeft: 10,
    backgroundColor: "#333333",
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 9,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },

  plusIcon: {
    width: 16,
    height: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEnable: {
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
});
