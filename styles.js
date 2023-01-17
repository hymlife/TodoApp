import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15, //right and left
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 15,
    color: "#666",
  },
  input: {
    paddingHorizontal: 13,
    paddingVertical: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 15,
  },
  buttonContainer: {
    backgroundColor: "#666",
    marginTop: 15,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 125,
    alignSelf: "flex-end",
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  littleTitleContainer: { marginTop: 25 },
  littleTitleText: { fontSize: 15, color: "gray" },
  divider: {
    height: 2,
    marginVertical: 15,
    backgroundColor: "#ddd",
  },
  taskContainer: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 12,
  },
  taskText: { fontSize: 18 },
  deleteTaskContainer: {
    backgroundColor: "red",
    width: 32,
    height: 32,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteTaskText: { fontSize: 18, color: "white" },
});

export default styles;
