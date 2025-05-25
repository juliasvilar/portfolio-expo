import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Link } from "expo-router";
import { Fundo } from "../components/Fundo"
import { Container } from "../components/Container";

export default function Sobre() {
  
  const ferramentas = [
    { key: "→ React Native" },
    { key: "→ Expo" },
    { key: "→ Expo Router" },
    { key: "→ TypeScript" },
    { key: "→ JavaScript" }
  ];

  return (
    <Fundo>
      <Container>

        <Text style={styles.title}>Sobre o App</Text>

        <Text style={styles.descricao}>Aplicativo desenvolvido para a disciplina de Programação Web e Mobile. {"\n"}
        Meu portfólio em formato Mobile! :3</Text>

        <Text style={styles.subtitulo}>Ferramentas de desenvolvimento</Text>

          <FlatList
            data={ferramentas}
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

      </Container>
    </Fundo>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3d2a1c",
    marginBottom: 15
  },
  subtitulo: {
    fontSize: 16,
    color: "#3d2a1c",
    marginBottom: 16,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
    descricao: {
    fontSize: 14,
    color: "#3d2a1c",
    textAlign: "center",
    marginBottom: 17,
  },
  bold: {
    fontWeight: "bold",
  },
  item: {
    padding: 5,
    fontSize: 15,
    color: "#3d2a1c",
    borderRadius: 10,
    textAlign: "left",
    marginBottom: 3,
    width: "100%",
    marginLeft: 5
  },
  lista: {
    width: "100%",
    marginBottom: 16,
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
