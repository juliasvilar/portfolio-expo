import { View, StyleSheet } from "react-native"

export function Container({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    backgroundColor: "#a88e74",
    borderRadius: 24,
    padding: 24,
    width: "100%",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
