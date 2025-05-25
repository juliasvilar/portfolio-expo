import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView, Keyboard, TouchableWithoutFeedback} from "react-native";
import { Link } from "expo-router";
import { Container } from "../components/Container";
import { Fundo } from "../components/Fundo"
import React, { useState } from 'react';

const gerarNumeroSecreto = () => {
  let numeros = [];
  while (numeros.length < 4) {
    const n = Math.floor(Math.random() * 10).toString();
    if (!numeros.includes(n)) numeros.push(n);
  }
  return numeros.join('');
};

export default function BullsAndCows(){

  
  const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto());
  const [palpite, setPalpite] = useState('');
  const [tentativas, setTentativas] = useState([]);
  
  console.log(numeroSecreto)

  const verificarPalpite = () => {
    if (palpite.length !== 4 || new Set(palpite).size !== 4 || !/^\d+$/.test(palpite)) {
      Alert.alert('Palpite inválido', 'Digite 4 dígitos diferentes!');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === numeroSecreto[i]) bulls++;
      else if (numeroSecreto.includes(palpite[i])) cows++;
    }

    const novaTentativa = { palpite, resultado: `${bulls} Bulls e ${cows} Cows` };
    setTentativas([...tentativas, novaTentativa]);

    if (bulls === 4) {
      Alert.alert('Parabéns!', `Você acertou! O número era ${numeroSecreto}`, [
        { text: 'Jogar novamente', onPress: () => reiniciarJogo() }
      ]);
    }

    setPalpite('');
  };

  const reiniciarJogo = () => {
    setNumeroSecreto(gerarNumeroSecreto());
    setTentativas([]);
    setPalpite('');
  };

  function mostrarSenha() {
    Alert.alert("Senha", numeroSecreto);
  }

  return (
    <Fundo>
      <Container>
        <Text style={styles.title}>Bulls & Cows</Text>
        <Text style={styles.descricao}>Tente adivinhar a senha secreta! {"\n"}
        Regras: senha de no máximo quatro dígitos, número de "bulls" sendo os dígitos na posição correta e "cows" os números corretos, mas na posição errada. {"\n"}
        Boa sorte!</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite um número de 4 dígitos"
          value={palpite}
          onChangeText={setPalpite}
          keyboardType="numeric"
          maxLength={4}
        />

        <TouchableOpacity style={styles.botao} onPress={verificarPalpite}>
          <Text style={styles.textoBotao}>Tentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={Keyboard.dismiss}>
          <Text style={styles.textoBotao}>Fechar teclado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => mostrarSenha(numeroSecreto)}>
          <Text style={styles.textoBotao}>Mostrar senha</Text>
        </TouchableOpacity>


        <Text style={styles.subtitulo}>Tentativas:</Text>
        <ScrollView>
          {tentativas.slice().reverse().map((tentativa, index) => (
            <Text key={index} style={styles.attempt}>
              {tentativa.palpite} → {tentativa.resultado}
            </Text>
          ))}
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3d2a1c",
    marginBottom: 15,
    textAlign: "center"
  },
  subtitulo: {
    fontSize: 16,
    color: "#3d2a1c",
    marginBottom: 14,
    marginTop: 16,
    fontWeight: "bold",
    alignSelf: "center"
  },
  descricao: {
    fontSize: 14,
    color: "#3d2a1c",
    textAlign: "justify",
    marginBottom: 17,
  },
  input: {
    width: "100%",
    backgroundColor: "#efe0c9",
    height: 30,
    borderRadius: 20,
    paddingLeft: 10,
  },
  botao: {
    width: "100%",
    backgroundColor: "#d2bfa3",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  textoBotao: {
    fontSize: 12,
    color: "#3d2a1c",
    fontWeight: "bold",
  },
});
