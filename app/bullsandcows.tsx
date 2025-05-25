import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";
import { Link } from "expo-router";
import { Container } from "../components/Container";
import { Fundo } from "../components/Fundo"

export default function BullsAndCows() {

  return (
    <Fundo>
      <Container>

        <Text style={styles.title}>Bulls & Cows</Text>

            <Text style={styles.descricao}>Tente adivinhar a senha secreta!
            Regras: senha de no máximo quatro dígitos, número de "bulls" sendo os dígitos na posição correta e "cows" os números corretos, mas na posição errada.
            Boa sorte!</Text>

        

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
    marginBottom: 15,
    textAlign: "center"
  },
  descricao: {
    fontSize: 14,
    color: "#3d2a1c",
    textAlign: "justify",
    marginBottom: 17,
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
