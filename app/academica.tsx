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
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP) e Avanade{"\n"}
            Recife - 2023</Text>
            <Text style={styles.descricao}>Apresentação para alunas de Ciência da Computação sobre a experiência com o projeto de mentoria
            para mulheres com a  empresa Avanade.</Text>
            <Image source={require("../assets/images/workshop1.jpg")} style={styles.imagem}/>
            <Image source={require("../assets/images/workshop2.jpg")} style={styles.imagem}/>
            
            
            <Text style={styles.subtitulo}>Manguemetria</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP) e Biblioteca Comunitária Caranguejo Tabaiares {"\n"}
            Recife - 2023</Text>
            <Text style={styles.descricao}>Implementação de um leitor biométrico para otimizar os registros das crianças, antes manual, que frequentam a ONG.</Text>
            <Image source={require("../assets/images/manguemetria.jpeg")} style={styles.imagem}></Image>
            <Image source={require("../assets/images/manguemetria2.jpeg")} style={styles.imagem}></Image>


            <Text style={styles.subtitulo}>Seminário I.A.</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP) {"\n"}
            Recife - 2025</Text>
            <Text style={styles.descricao}>Seminário realizado de acordo com uma pesquisa sobre Inteligência de Enxames para a 
            disciplina de Inteligência Artificial.</Text>
            <Image source={require("../assets/images/seminario.jpeg")} style={styles.imagem}></Image>



            <Text style={styles.subtitulo}>Projeto Padawan</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2025
            </Text>
            <Text style={styles.descricao}>Iniciativa de extensão voltada ao acolhimento de calouros do curso de Ciência da Computação.
            O objetivo é facilitar a adaptação desses estudantes ao ambiente universitário por meio do apadrinhamento realizado por alunos veteranos.</Text>
            <Image source={require("../assets/images/padawan.jpeg")} style={styles.imagem}></Image>


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
    marginBottom: 25,
    textAlign: "center"
  },
  subtitulo: {
    fontSize: 18,
    color: "#3d2a1c",
    marginBottom: 8,
    marginTop: 2,
    fontWeight: "bold",
    alignSelf: "flex-start"
  },
  descricao: {
    fontSize: 14,
    color: "#3d2a1c",
    textAlign: "justify",
    marginBottom: 17,
  },
  descricaoProjeto: {
    fontSize: 14,
    color: "#3d2a1c",
    alignSelf: "flex-start",
    marginBottom: 5,
    fontStyle: "italic"
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
