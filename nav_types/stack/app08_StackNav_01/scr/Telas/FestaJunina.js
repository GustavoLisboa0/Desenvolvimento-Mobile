import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FestaJunina() {
  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900"
          }}
        />
        <Text style={estilos.titulo}>Tela Festa Junina</Text>
        <Text style={estilos.subtitulo}>Stack Navigation</Text>
        <Text style={estilos.texto}>Dsv Mobile</Text>
      </View>

      <ScrollView style={estilos.corpo} contentContainerStyle={estilos.conteudo}>
        <Text style={estilos.topico}>Origem</Text>
        <Text style={estilos.paragrafo}>
          A Festa Junina tem origem em celebrações europeias ligadas ao mês de junho
          e foi incorporada ao calendário popular brasileiro. Aqui, a festa ganhou
          comidas típicas, quadrilha, bandeirinhas e músicas próprias.
        </Text>

        <Text style={estilos.topico}>Tradições</Text>
        <Text style={estilos.paragrafo}>
          Entre os elementos mais conhecidos estão a fogueira, a dança de quadrilha,
          as brincadeiras, o correio elegante e pratos como milho, canjica, paçoca,
          pé de moleque e bolo de fubá.
        </Text>

        <Text style={estilos.topico}>Curiosidades</Text>
        <Text style={estilos.paragrafo}>
          No Brasil, as festas juninas são especialmente fortes no Nordeste. Campina
          Grande e Caruaru realizam grandes comemorações, atraindo visitantes de
          várias regiões do país.
        </Text>
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
    backgroundColor: "darkred",
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
    color: "#b85c00"
  },
  subtitulo: {
    fontSize: 18,
    color: "#444",
    marginTop: 4
  },
  texto: {
    fontSize: 16,
    color: "#666",
    marginTop: 3
  },
  corpo: {
    flex: 1,
    backgroundColor: "white"
  },
  conteudo: {
    padding: 18,
    paddingBottom: 24
  },
  topico: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#b85c00",
    marginTop: 10,
    marginBottom: 6
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "justify"
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
