import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";
import { Link } from "expo-router";
import { Container } from "../components/Container";
import { Fundo } from "../components/Fundo"

export default function Profissional() {

  return (
    <Fundo>
      <Container>

        <Text style={styles.title}>Experiência acadêmica</Text>

        <ScrollView>
            <Text style={styles.subtitulo}>Formação</Text>
            <Text style={styles.descricao}>Bacharelado em <Text style={styles.bold}>Ciência da Computação</Text> pela
            <Text style={styles.bold}> Universidade Católica de Pernambuco</Text> (UNICAP) - 5º período </Text>
            
            <Text style={styles.subtitulo}>Workshop Avanade</Text>
            <Image source={require("../assets/images/workshop1.jpg")} style={styles.imagem}/>
            <Image source={require("../assets/images/workshop2.jpg")} style={styles.imagem}/>
            
            
            
            
            <Text style={styles.subtitulo}>Manguemetria</Text>
            <Text style={styles.descricao}>Jogo de quebra de código onde um jogador tenta adivinhar um número secreto. {"\n"}
            Jogue aqui!</Text>
            
            



        </ScrollView>
        


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
  imagem: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3d2a1c",
    marginBottom: 15,
    textAlign: "center"
  },
  subtitulo: {
    fontSize: 18,
    color: "#3d2a1c",
    marginBottom: 8,
    marginTop: 10,
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  descricao: {
    fontSize: 14,
    color: "#3d2a1c",
    alignSelf: "flex-start",
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
