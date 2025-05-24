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
    flex: 1,
    backgroundColor: "#e9e1d8",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
