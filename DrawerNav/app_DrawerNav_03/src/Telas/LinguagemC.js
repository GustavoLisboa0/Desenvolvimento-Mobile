import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const topicos = [
  {
    titulo: "O que é?",
    icone: "📌",
    conteudo:
      "C é uma linguagem de programação de propósito geral, criada por Dennis Ritchie entre 1969 e 1973 nos Bell Labs. É considerada a \"mãe\" de diversas linguagens modernas como C++, Java e Python.",
  },
  {
    titulo: "Por que aprender C?",
    icone: "🎯",
    conteudo:
      "C ensina como o computador realmente funciona: gerenciamento de memória, ponteiros, bits e bytes. Quem domina C entende o que acontece por baixo dos panos de qualquer sistema.",
  },
  {
    titulo: "Onde é usada?",
    icone: "🔧",
    conteudo:
      "Sistemas operacionais (Linux, Windows, macOS), drivers de hardware, sistemas embarcados, microcontroladores (Arduino), bancos de dados (SQLite) e compiladores.",
  },
  {
    titulo: "Características",
    icone: "⚙️",
    conteudo: null,
    lista: [
      "Linguagem compilada de alto desempenho",
      "Controle direto sobre memória (malloc/free)",
      "Tipagem estática e forte",
      "Sintaxe influenciou C++, Java, PHP e mais",
      "Portável entre diferentes sistemas",
    ],
  },
  {
    titulo: "Exemplo de código",
    icone: "💻",
    conteudo: null,
    codigo:
`#include <stdio.h>

int main() {
    printf("Olá, Mundo!\\n");

    int soma = 0;
    for (int i = 1; i <= 10; i++) {
        soma += i;
    }

    printf("Soma de 1 a 10: %d\\n", soma);
    return 0;
}`,
  },
];

export default function LinguagemC() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Header da linguagem */}
      <View style={styles.header}>
        <View style={styles.letraBadge}>
          <Text style={styles.letra}>C</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerNome}>Linguagem C</Text>
          <Text style={styles.headerAno}>Dennis Ritchie  •  1972</Text>
        </View>
      </View>

      <View style={styles.tagRow}>
        {["Baixo Nível", "Compilada", "Procedural", "Alta Performance"].map((t) => (
          <View key={t} style={styles.tag}>
            <Text style={styles.tagTexto}>{t}</Text>
          </View>
        ))}
      </View>

      {/* Tópicos */}
      {topicos.map((t) => (
        <View key={t.titulo} style={styles.card}>
          <Text style={styles.cardTitulo}>{t.icone}  {t.titulo}</Text>

          {t.conteudo && (
            <Text style={styles.cardTexto}>{t.conteudo}</Text>
          )}

          {t.lista && t.lista.map((item, i) => (
            <View key={i} style={styles.listaRow}>
              <Text style={styles.listaBullet}>▸</Text>
              <Text style={styles.listaTexto}>{item}</Text>
            </View>
          ))}

          {t.codigo && (
            <View style={styles.codeBox}>
              <Text style={styles.codeTexto}>{t.codigo}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#071009" },
  content: { padding: 20, paddingBottom: 40 },

  header: {
    flexDirection: "row", alignItems: "center",
    gap: 16, marginBottom: 14,
  },
  letraBadge: {
    width: 64, height: 64, borderRadius: 16,
    backgroundColor: "#0f2a14", borderWidth: 2,
    borderColor: "#5dde76", justifyContent: "center", alignItems: "center",
  },
  letra: { fontSize: 32, fontWeight: "900", color: "#5dde76" },
  headerInfo: { flex: 1 },
  headerNome: { fontSize: 22, fontWeight: "900", color: "#d4f5dc", letterSpacing: 1 },
  headerAno: { fontSize: 12, color: "#4a7a52", marginTop: 4 },

  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  tag: {
    backgroundColor: "#0f2a14", borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 5,
    borderWidth: 1, borderColor: "#1a3d20",
  },
  tagTexto: { fontSize: 11, color: "#5dde76", fontWeight: "600" },

  card: {
    backgroundColor: "#0d1f10", borderRadius: 14,
    padding: 16, marginBottom: 12,
    borderWidth: 1, borderColor: "#0f2a14",
  },
  cardTitulo: {
    fontSize: 14, fontWeight: "800", color: "#5dde76",
    marginBottom: 10, letterSpacing: 0.4,
  },
  cardTexto: { fontSize: 14, color: "#8ab893", lineHeight: 22 },

  listaRow: { flexDirection: "row", gap: 8, marginBottom: 6, alignItems: "flex-start" },
  listaBullet: { color: "#5dde76", fontSize: 12, marginTop: 3 },
  listaTexto: { flex: 1, fontSize: 14, color: "#8ab893", lineHeight: 20 },

  codeBox: {
    backgroundColor: "#040d06", borderRadius: 10,
    padding: 14, borderWidth: 1, borderColor: "#0f2a14",
    marginTop: 4,
  },
  codeTexto: {
    fontFamily: "monospace", fontSize: 13,
    color: "#a8ff78", lineHeight: 22,
  },
});