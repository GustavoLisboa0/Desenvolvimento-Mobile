import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Principal() {
  const nav = useNavigation();

  function acessaTela(tela) {
    if (tela === "C") {
      nav.navigate("Carnaval");
    }

    if (tela === "J") {
      nav.navigate("FestaJunina");
    }

    if (tela === "H") {
      nav.navigate("Halloween");
    }
  }

  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900"
          }}
        />
        <Text style={estilos.titulo}>Tela Principal</Text>
        <Text style={estilos.subtitulo}>Stack Navigation</Text>
        <Text style={estilos.texto}>Dsv Mobile</Text>
      </View>

      <View style={estilos.corpo}>
        <TouchableOpacity style={estilos.botaoCarnaval} onPress={() => acessaTela("C")}>
          <Text style={estilos.textoBotao}>Carnaval</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoJunina} onPress={() => acessaTela("J")}>
          <Text style={estilos.textoBotao}>Festa Junina</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botaoHalloween} onPress={() => acessaTela("H")}>
          <Text style={estilos.textoBotao}>Halloween</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: "#d9d9d9",
    padding: 12
  },
  cabecalho: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 14
  },
  imagem: {
    width: "92%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#202020"
  },
  subtitulo: {
    fontSize: 20,
    color: "#444",
    marginTop: 4
  },
  texto: {
    fontSize: 18,
    color: "#666",
    marginTop: 4
  },
  corpo: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 28,
    gap: 14
  },
  botaoCarnaval: {
    backgroundColor: "darkred",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center"
  },
  botaoJunina: {
    backgroundColor: "#b85c00",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center"
  },
  botaoHalloween: {
    backgroundColor: "#4b145f",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center"
  },
  textoBotao: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  rodape: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
