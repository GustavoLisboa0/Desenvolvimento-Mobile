import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Observacao() {
  const [ceuLimpo, setCeuLimpo] = useState(true);
  const [poucaLuz, setPoucaLuz] = useState(false);
  const [binoculo, setBinoculo] = useState(false);

  const itensProntos = [ceuLimpo, poucaLuz, binoculo].filter(Boolean).length;

  return (
    <SafeAreaView style={estilos.fundo} edges={["left", "right", "bottom"]}>
      <View style={estilos.cabecalho}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900"
          }}
        />
        <Text style={estilos.titulo}>Observação do Céu</Text>
        <Text style={estilos.subtitulo}>Checklist com Switch</Text>
      </View>

      <ScrollView style={estilos.corpo} contentContainerStyle={estilos.conteudo}>
        <View style={estilos.resumo}>
          <Text style={estilos.resumoTexto}>Itens preparados: {itensProntos}/3</Text>
        </View>

        <View style={estilos.linha}>
          <View style={estilos.caixaTexto}>
            <Text style={estilos.itemTitulo}>Céu limpo</Text>
            <Text style={estilos.itemTexto}>Poucas nuvens facilitam a observação.</Text>
          </View>
          <Switch value={ceuLimpo} onValueChange={setCeuLimpo} />
        </View>

        <View style={estilos.linha}>
          <View style={estilos.caixaTexto}>
            <Text style={estilos.itemTitulo}>Pouca luz artificial</Text>
            <Text style={estilos.itemTexto}>Locais escuros mostram mais estrelas.</Text>
          </View>
          <Switch value={poucaLuz} onValueChange={setPoucaLuz} />
        </View>

        <View style={estilos.linha}>
          <View style={estilos.caixaTexto}>
            <Text style={estilos.itemTitulo}>Binóculo ou telescópio</Text>
            <Text style={estilos.itemTexto}>Instrumentos ajudam a ver detalhes da Lua e planetas.</Text>
          </View>
          <Switch value={binoculo} onValueChange={setBinoculo} />
        </View>

        <Text style={estilos.topico}>Dica</Text>
        <Text style={estilos.paragrafo}>
          Comece observando a Lua, constelações fáceis de identificar e planetas
          brilhantes. Um aplicativo de mapa celeste também ajuda a localizar objetos
          no céu em tempo real.
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
    backgroundColor: "#4a3769",
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
    color: "#4a3769"
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
  resumo: {
    backgroundColor: "#efe9f9",
    borderRadius: 8,
    padding: 14,
    alignItems: "center"
  },
  resumoTexto: {
    color: "#4a3769",
    fontSize: 18,
    fontWeight: "bold"
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e2d9ef",
    borderRadius: 8,
    padding: 14,
    gap: 14
  },
  caixaTexto: {
    flex: 1
  },
  itemTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#202020"
  },
  itemTexto: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
    marginTop: 3
  },
  topico: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4a3769",
    marginTop: 6
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 23,
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
