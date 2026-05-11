import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Carnaval() {
  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900"
          }}
        />
        <Text style={estilos.titulo}>Tela Carnaval</Text>
        <Text style={estilos.subtitulo}>Stack Navigation</Text>
        <Text style={estilos.texto}>Dsv Mobile</Text>
      </View>

      <ScrollView style={estilos.corpo} contentContainerStyle={estilos.conteudo}>
        <Text style={estilos.topico}>Origem</Text>
        <Text style={estilos.paragrafo}>
          O Carnaval surgiu a partir de festas populares ligadas ao encerramento de
          ciclos e ao período anterior à Quaresma. No Brasil, ganhou características
          próprias com blocos de rua, desfiles, fantasias e forte presença musical.
        </Text>

        <Text style={estilos.topico}>História no Brasil</Text>
        <Text style={estilos.paragrafo}>
          A festa se transformou ao longo dos séculos com influências africanas,
          indígenas e europeias. O samba, os cordões, os ranchos e as escolas de
          samba ajudaram a criar uma identidade marcante para a celebração.
        </Text>

        <Text style={estilos.topico}>Curiosidades</Text>
        <Text style={estilos.paragrafo}>
          Cada região brasileira tem uma forma própria de comemorar. Recife e Olinda
          são conhecidos pelo frevo e pelos bonecos gigantes, Salvador pelos trios
          elétricos e o Rio de Janeiro pelos desfiles na avenida.
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
    color: "darkred"
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
    color: "darkred",
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
