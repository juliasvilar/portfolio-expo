import { View, StyleSheet } from "react-native"

export function Fundo({ children }) {
  return (
    <View style={styles.fundo}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#e9e1d8",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
