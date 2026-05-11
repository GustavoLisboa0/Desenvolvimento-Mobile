import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const missoes = [
  {
    id: "1",
    nome: "Sputnik 1",
    ano: "1957",
    detalhe: "Primeiro satélite artificial colocado em órbita da Terra."
  },
  {
    id: "2",
    nome: "Apollo 11",
    ano: "1969",
    detalhe: "Missão que levou os primeiros astronautas à superfície da Lua."
  },
  {
    id: "3",
    nome: "Voyager 1",
    ano: "1977",
    detalhe: "Sonda lançada para estudar planetas externos e o espaço interestelar."
  },
  {
    id: "4",
    nome: "Perseverance",
    ano: "2020",
    detalhe: "Rover enviado a Marte para estudar rochas e procurar sinais de vida antiga."
  }
];

export default function Missoes() {
  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=900"
          }}
        />
        <Text style={estilos.titulo}>Missões Espaciais</Text>
        <Text style={estilos.subtitulo}>Lista com FlatList</Text>
      </View>

      <FlatList
        style={estilos.corpo}
        contentContainerStyle={estilos.conteudo}
        data={missoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.item}>
            <Text style={estilos.ano}>{item.ano}</Text>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.detalhe}>{item.detalhe}</Text>
          </View>
        )}
      />

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
    backgroundColor: "#8a4f00",
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
    fontSize: 27,
    fontWeight: "bold",
    color: "#8a4f00"
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
    padding: 16,
    gap: 12
  },
  item: {
    backgroundColor: "#fff7ec",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f2d6ad",
    padding: 15
  },
  ano: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#8a4f00"
  },
  nome: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#202020",
    marginTop: 3
  },
  detalhe: {
    fontSize: 15,
    color: "#444",
    lineHeight: 21,
    marginTop: 5
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
