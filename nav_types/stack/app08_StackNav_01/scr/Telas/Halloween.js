import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Halloween() {
  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=900"
          }}
        />
        <Text style={estilos.titulo}>Tela Halloween</Text>
        <Text style={estilos.subtitulo}>Stack Navigation</Text>
        <Text style={estilos.texto}>Dsv Mobile</Text>
      </View>

      <ScrollView style={estilos.corpo} contentContainerStyle={estilos.conteudo}>
        <Text style={estilos.topico}>Origem</Text>
        <Text style={estilos.paragrafo}>
          O Halloween tem raízes em antigas celebrações celtas ligadas ao fim da
          colheita e à chegada do inverno. Com o tempo, a data passou a ser marcada
          por fantasias, doces, lanternas e histórias de suspense.
        </Text>

        <Text style={estilos.topico}>Tradições</Text>
        <Text style={estilos.paragrafo}>
          A prática de pedir doces, decorar abóboras e usar fantasias se popularizou
          principalmente nos Estados Unidos, mas hoje aparece em muitos países por
          influência cultural, filmes, séries e festas temáticas.
        </Text>

        <Text style={estilos.topico}>Curiosidades</Text>
        <Text style={estilos.paragrafo}>
          A abóbora iluminada é chamada de jack-o-lantern. Ela se tornou um dos
          símbolos mais reconhecidos da data e costuma aparecer em portas, janelas
          e decorações de festas.
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
    backgroundColor: "#2b1238",
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
    color: "#4b145f"
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
    color: "#4b145f",
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
