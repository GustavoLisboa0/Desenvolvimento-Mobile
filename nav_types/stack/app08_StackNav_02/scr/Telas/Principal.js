import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const menu = [
  {
    id: "1",
    titulo: "Planetas",
    descricao: "Compare planetas do Sistema Solar usando Picker.",
    rota: "Planetas",
    cor: "#006d77"
  },
  {
    id: "2",
    titulo: "Missões",
    descricao: "Veja uma lista de missões espaciais importantes.",
    rota: "Missoes",
    cor: "#8a4f00"
  },
  {
    id: "3",
    titulo: "Observação",
    descricao: "Monte uma pequena checklist para observar o céu.",
    rota: "Observacao",
    cor: "#4a3769"
  }
];

export default function Principal() {
  const nav = useNavigation();
  const [modoNoite, setModoNoite] = useState(false);

  const cores = modoNoite ? estilosEscuros : estilosClaros;

  return (
    <SafeAreaView style={[estilos.fundo, cores.fundo]} edges={["left", "right", "bottom"]}>
      <View style={[estilos.cabecalho, cores.painel]}>
        <Image
          style={estilos.imagem}
          source={{
            uri: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900"
          }}
        />
        <Text style={[estilos.titulo, cores.titulo]}>Astronomia</Text>
        <Text style={[estilos.subtitulo, cores.texto]}>Stack Navigation</Text>
        <Text style={[estilos.texto, cores.texto]}>Dsv Mobile</Text>
      </View>

      <View style={[estilos.controle, cores.painel]}>
        <Text style={[estilos.label, cores.titulo]}>Modo noite</Text>
        <Switch
          value={modoNoite}
          onValueChange={setModoNoite}
          trackColor={{ false: "#b8c1cc", true: "#7187ff" }}
          thumbColor={modoNoite ? "#ffffff" : "#f4f4f4"}
        />
      </View>

      <FlatList
        style={[estilos.lista, cores.painel]}
        contentContainerStyle={estilos.listaConteudo}
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[estilos.card, { borderLeftColor: item.cor }]}
            onPress={() => nav.navigate(item.rota)}
          >
            <Text style={estilos.cardTitulo}>{item.titulo}</Text>
            <Text style={estilos.cardTexto}>{item.descricao}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={[estilos.rodape, cores.painel]}>
        <Text style={[estilos.textoRodape, cores.texto]}>Autor: Bruno Carraro e Gustavo Lisboa</Text>
        <Text style={[estilos.textoRodape, cores.texto]}>2026</Text>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    padding: 12
  },
  cabecalho: {
    alignItems: "center",
    padding: 14,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  imagem: {
    width: "92%",
    height: 145,
    borderRadius: 8,
    marginBottom: 10
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold"
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 4
  },
  texto: {
    fontSize: 16,
    marginTop: 3
  },
  controle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5"
  },
  label: {
    fontSize: 17,
    fontWeight: "bold"
  },
  lista: {
    flex: 1
  },
  listaConteudo: {
    padding: 16,
    gap: 12
  },
  card: {
    backgroundColor: "#f7f8fa",
    borderRadius: 8,
    borderLeftWidth: 7,
    padding: 16
  },
  cardTitulo: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#202020",
    marginBottom: 4
  },
  cardTexto: {
    fontSize: 15,
    color: "#4d4d4d",
    lineHeight: 21
  },
  rodape: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  textoRodape: {
    fontSize: 14
  }
});

const estilosClaros = StyleSheet.create({
  fundo: {
    backgroundColor: "#cfd7df"
  },
  painel: {
    backgroundColor: "white"
  },
  titulo: {
    color: "#132238"
  },
  texto: {
    color: "#555"
  }
});

const estilosEscuros = StyleSheet.create({
  fundo: {
    backgroundColor: "#0d1321"
  },
  painel: {
    backgroundColor: "#1b263b"
  },
  titulo: {
    color: "white"
  },
  texto: {
    color: "#d9e2ec"
  }
});
