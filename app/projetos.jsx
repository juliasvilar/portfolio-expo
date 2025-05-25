import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from "react-native";
import { Link } from "expo-router";
import { Container } from "../components/Container";
import { Fundo } from "../components/Fundo"

export default function Projetos() {

  return (
    <Fundo>
      <Container>

        <Text style={styles.title}>Projetos</Text>

        <ScrollView>
            <Text style={styles.subtitulo}>Jogo Bulls & Cows</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2025</Text>
            <Text style={styles.descricao}>Jogo de quebra de código onde um jogador tenta adivinhar um número secreto.</Text>
            <Link href="/bullsandcows" asChild>
                <TouchableOpacity style={styles.descricao}>
                    <Text style={styles.textoBotao}>Jogue aqui!</Text>
                </TouchableOpacity>
            </Link>


            <Text style={styles.subtitulo}>Apoio Local</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2024</Text>
            <Text style={styles.descricao}>Desenvolvimento da ideia e protótipo de um aplicativo que visa disponibilizar a
            localização de pontos na cidade com distribuição e/ou venda mais barata de alimentos próximos ao vencimento.</Text>
            <View style={styles.imagens}>
                <Image source={require("../assets/images/tela1.jpeg")} style={styles.imagemApoio}></Image>
                <Image source={require("../assets/images/tela2.jpeg")} style={styles.imagemApoio}></Image>
                <Image source={require("../assets/images/tela3.jpeg")} style={styles.imagemApoio}></Image>
            </View>


            <Text style={styles.subtitulo}>Hortinha inclusiva</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2024</Text>
            <Text style={styles.descricao}>Criação de um sistema que automatiza o monitoramento do nível de umidade do solo usando Arduino,
            fornecendo informações em tempo real que auxiliam os usuários na tomada de decisões sobre a irrigação manual.
            Projetada para facilitar o cultivo de plantas por pessoas idosas ou com Transtorno de Déficit de Atenção e Hiperatividade (TDAH).</Text>
            <Image source={require("../assets/images/hortinha.jpeg")} style={styles.imagem}></Image>


            <Text style={styles.subtitulo}>WebDriver</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2024</Text>
            <Text style={styles.descricao}>Desenvolvimento de um sistema de armazenamento e compartilhamento de arquivos.</Text>
        

            <Text style={styles.subtitulo}>Árvore Red-Black e Árvore B</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2024</Text>
            <Text style={styles.descricao}>Implementação de árvores Red-Black e B em Java.</Text>


            <Text style={styles.subtitulo}>Miniprojeto I.A.</Text>
            <Text style={styles.descricaoProjeto}>Universidade Católica de Pernambuco (UNICAP){"\n"}
            Recife - 2025</Text>
            <Text style={styles.descricao}>Manipulação de um conjunto de dados realista para detecção de ataques em ambientes de IoT baseados em inteligência artificial..</Text>
            <Image source={require("../assets/images/miniprojeto.jpeg")} style={styles.imagem}></Image>
        
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
  imagemApoio: {
    width: 85,
    height: 185,
    borderRadius: 10,
    marginBottom: 20
  },
  imagem: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginBottom: 20
  },
  imagens: {
    flexDirection: 'row',
    justifyContent: "space-between"
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
