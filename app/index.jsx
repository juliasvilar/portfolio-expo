import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Linking } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "react-native";
import { Fundo } from "../components/Fundo"
import { Container } from "../components/Container";

export default function Index() {

  <SafeAreaView style={styles.safeArea}>
    <StatusBar backgroundColor="#e9e1d8" barStyle="dark-content"></StatusBar>
  </SafeAreaView>

  return (
    <Fundo>
      <Container>
        <Image
          source={require("../assets/images/julia.jpg")}
          style={styles.imagem}
        />

        <Text style={styles.title}>Quem sou eu?</Text>
        <Text style={styles.subtitulo}>Muito prazer!</Text>

        <Text style={styles.descricao}>
          Me chamo <Text style={styles.bold}>Júlia Saldanha</Text>, tenho 20 anos e sou uma{" "}
          <Text style={styles.bold}>cientista da computação</Text> em desenvolvimento pela UNICAP!
        </Text>

        <Text style={styles.descricao}>
          Apaixonada por conhecimento, tenho um grande interesse em{" "}
          <Text style={styles.bold}>desenvolvimento de jogos e software e front-end</Text>.
        </Text>

        <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollBotoes}>

          <Link href="/sobre" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Sobre o app</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/habilidades" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Habilidades</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/academica" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Experiência acadêmica</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/profissional" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Experiência profissional</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/projetos" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Projetos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/bullsandcows" asChild>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Jogo Bulls & Cows</Text>
            </TouchableOpacity>
          </Link>
        </ScrollView>

        <Text style={styles.subtitulo}>Encontre-me!</Text>

        <View style={styles.imagens}>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/juliasvilar")}>
            <Image source={require("../assets/images/github-mark.png")} style={styles.png}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.linkedin.com/in/juliasvilar/")}>
            <Image source={require("../assets/images/linkedin.png")} style={styles.png}></Image>
          </TouchableOpacity>

        </View>


      </Container>
    </Fundo>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e9e1d8",
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 65,
    marginBottom: 20,
  },
  imagens: {
    flexDirection: 'row',
  },
  png: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3d2a1c",
    marginBottom: 2
  },
  subtitulo: {
    fontSize: 16,
    color: "#3d2a1c",
    marginBottom: 16,
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
  scrollArea: {
    maxHeight: 200,
    width: "100%",
    marginTop: 12,
    marginBottom: 15
  },
  scrollBotoes: {
    paddingBottom: 10,
  },
  botao: {
    width: "100%",
    backgroundColor: "#d2bfa3",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    fontSize: 12,
    color: "#3d2a1c",
    fontWeight: "bold",
  },
});