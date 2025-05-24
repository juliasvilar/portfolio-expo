import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Profissional() {

  return (
    <View style={styles.container}>
      <View style={styles.infos}>

        <Text style={styles.title}>Experiência profissional</Text>
        <Text style={styles.descricao}>Ops :c Infelizmente ainda não tenho nenhuma experiência profissional!</Text>


        <Link href="/" asChild>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Início</Text>
            </TouchableOpacity>
        </Link>

      </View>
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
  infos: {
    backgroundColor: "#a88e74",
    borderRadius: 24,
    padding: 24,
    width: "100%",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3d2a1c",
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 16,
    color: "#3d2a1c",
    marginBottom: 16,
    textAlign: "left",
    fontWeight: "bold",
  },
  descricao: {
    fontSize: 14,
    color: "#3d2a1c",
    textAlign: "center",
    marginBottom: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  botao: {
    width: "100%",
    backgroundColor: "#d2bfa3",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  textoBotao: {
    fontSize: 12,
    color: "#3d2a1c",
    fontWeight: "bold",
  },
});
