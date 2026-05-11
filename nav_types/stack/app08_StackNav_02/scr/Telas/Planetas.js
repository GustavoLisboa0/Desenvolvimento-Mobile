import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

const planetas = {
  mercurio: {
    nome: "Mercúrio",
    diametro: "4.879 km",
    caracteristica: "É o menor planeta do Sistema Solar e o mais próximo do Sol.",
    curiosidade: "Sua superfície tem muitas crateras, parecida com a Lua."
  },
  venus: {
    nome: "Vênus",
    diametro: "12.104 km",
    caracteristica: "Possui atmosfera muito densa e temperaturas extremamente altas.",
    curiosidade: "Gira em sentido contrário ao da maioria dos planetas."
  },
  terra: {
    nome: "Terra",
    diametro: "12.742 km",
    caracteristica: "É o planeta onde vivemos e tem grande quantidade de água líquida.",
    curiosidade: "Até hoje, é o único planeta conhecido com vida confirmada."
  },
  marte: {
    nome: "Marte",
    diametro: "6.779 km",
    caracteristica: "É conhecido como planeta vermelho por causa do óxido de ferro no solo.",
    curiosidade: "Abriga o Monte Olimpo, um dos maiores vulcões do Sistema Solar."
  }
};

export default function Planetas() {
  const [planetaSelecionado, setPlanetaSelecionado] = useState("terra");
  const planeta = planetas[planetaSelecionado];

  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=900"
          }}
        />
        <Text style={estilos.titulo}>Planetas</Text>
        <Text style={estilos.subtitulo}>Escolha um planeta no Picker</Text>
      </View>

      <ScrollView style={estilos.corpo} contentContainerStyle={estilos.conteudo}>
        <View style={estilos.caixaPicker}>
          <Picker selectedValue={planetaSelecionado} onValueChange={setPlanetaSelecionado}>
            <Picker.Item label="Mercúrio" value="mercurio" />
            <Picker.Item label="Vênus" value="venus" />
            <Picker.Item label="Terra" value="terra" />
            <Picker.Item label="Marte" value="marte" />
          </Picker>
        </View>

        <Text style={estilos.nome}>{planeta.nome}</Text>
        <Text style={estilos.topico}>Diâmetro</Text>
        <Text style={estilos.paragrafo}>{planeta.diametro}</Text>
        <Text style={estilos.topico}>Característica</Text>
        <Text style={estilos.paragrafo}>{planeta.caracteristica}</Text>
        <Text style={estilos.topico}>Curiosidade</Text>
        <Text style={estilos.paragrafo}>{planeta.curiosidade}</Text>
      </ScrollView>

      <View style={estilos.rodape}>
        <Text style={estilos.textoRodape}>Autor: Bruno Carraro e Gustavo Lisboa</Text>
        <Text style={estilos.textoRodape}>2026</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#006d77",
    padding: 12
  },
  cabecalho: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  imagem: {
    width: "92%",
    height: 140,
    borderRadius: 8,
    marginBottom: 10
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#006d77"
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
    marginTop: 4
  },
  corpo: {
    flex: 1,
    backgroundColor: "white"
  },
  conteudo: {
    padding: 18,
    paddingBottom: 24
  },
  caixaPicker: {
    borderWidth: 1,
    borderColor: "#d7e3e5",
    borderRadius: 8,
    marginBottom: 18,
    overflow: "hidden"
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#132238",
    marginBottom: 8
  },
  topico: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#006d77",
    marginTop: 12,
    marginBottom: 4
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 23,
    color: "#333"
  },
  rodape: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  textoRodape: {
    fontSize: 14,
    color: "#555"
  }
});
