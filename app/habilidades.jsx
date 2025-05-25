import { View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import { Link } from "expo-router";

export default function Habilidades() {

    const soft = [
        { key: "→ Adaptabilidade" },
        { key: "→ Trabalho em equipe" },
        { key: "→ Proatividade" },
        { key: "→ Liderança" }
    ];

    const hard = [
        { key: "→ HTML, CSS & JavaScript" },
        { key: "→ React, React Native"},
        { key: "→ Python" },
        { key: "→ C" },
        { key: "→ MySQL" },
        { key: "→ Java" },
        { key: "→ Visual Studio Code"},
        { key: "→ MySQL Workbench"},
        { key: "→ Netbeans"},
        { key: "→ Arduino"},
        { key: "→ Inglês"},
    ];

  return (
    <View style={styles.container}>
      <View style={styles.infos}>

        <Text style={styles.title}>Habilidades</Text>
        <Text style={styles.subtitulo}>Soft Skills</Text>

        <FlatList
            data={soft}
            renderItem={({ item }) => (
                <Text style={styles.item}>{item.key}</Text>
            )}
            style={styles.lista}
        />

        <Text style={styles.subtitulo}>Hard Skills</Text>
        
        <FlatList
            data={hard}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
            style={styles.lista}
        />

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
    fontWeight: "bold",
    alignSelf: "flex-start"
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
  item: {
    padding: 5,
    fontSize: 15,
    color: "#3d2a1c",
    borderRadius: 10,
    textAlign: "left",
    marginBottom: 1,
    width: "100%",
    marginLeft: 5
  },
  lista: {
    width: "100%",
    marginBottom: 10,
  },
});
