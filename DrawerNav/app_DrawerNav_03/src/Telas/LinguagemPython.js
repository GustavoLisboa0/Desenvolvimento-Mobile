import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const topicos = [
  {
    titulo: "O que é?",
    icone: "📌",
    conteudo:
      "Python é uma linguagem de alto nível criada por Guido van Rossum, lançada em 1991. Seu design prioriza legibilidade do código, seguindo a filosofia de que código deve ser fácil de ler e escrever.",
  },
  {
    titulo: "Por que aprender Python?",
    icone: "🎯",
    conteudo:
      "Python é a linguagem mais popular do mundo para iniciantes e especialistas. É usada em Inteligência Artificial, automação, web, ciência de dados e muito mais — com uma sintaxe simples e expressiva.",
  },
  {
    titulo: "Onde é usada?",
    icone: "🌍",
    conteudo:
      "Machine Learning (TensorFlow, PyTorch), desenvolvimento web (Django, Flask), automação de tarefas, análise de dados (Pandas, NumPy), segurança (hacking ético) e scripts gerais.",
  },
  {
    titulo: "Características",
    icone: "⚙️",
    conteudo: null,
    lista: [
      "Sintaxe limpa e legível (sem chaves)",
      "Interpretada e de tipagem dinâmica",
      "Gerenciamento automático de memória",
      "Enorme ecossistema de bibliotecas (PyPI)",
      "Multiplataforma: Windows, Linux, Mac",
      "Suporta OO, funcional e procedural",
    ],
  },
  {
    titulo: "Exemplo de código",
    icone: "💻",
    conteudo: null,
    codigo:
`# Olá, Mundo!
print("Olá, Mundo!")

# Soma de 1 a 10
soma = sum(range(1, 11))
print(f"Soma de 1 a 10: {soma}")

# Lista e loop
linguagens = ["C", "Python", "Java"]
for lang in linguagens:
    print(f"Eu aprendo {lang}")`,
  },
  {
    titulo: "A Filosofia Python (Zen)",
    icone: "🧘",
    conteudo: null,
    lista: [
      "Bonito é melhor que feio",
      "Explícito é melhor que implícito",
      "Simples é melhor que complexo",
      "Legibilidade conta",
      "Se a implementação é difícil de explicar, é má ideia",
    ],
  },
];

export default function LinguagemPython() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.letraBadge}>
          <Text style={styles.letra}>Py</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerNome}>Python</Text>
          <Text style={styles.headerAno}>Guido van Rossum  •  1991</Text>
        </View>
      </View>

      <View style={styles.tagRow}>
        {["Alto Nível", "Interpretada", "Multi-paradigma", "IA & Data"].map((t) => (
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
    borderColor: "#a8ff78", justifyContent: "center", alignItems: "center",
  },
  letra: { fontSize: 24, fontWeight: "900", color: "#a8ff78" },
  headerInfo: { flex: 1 },
  headerNome: { fontSize: 22, fontWeight: "900", color: "#d4f5dc", letterSpacing: 1 },
  headerAno: { fontSize: 12, color: "#4a7a52", marginTop: 4 },

  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  tag: {
    backgroundColor: "#0f2a14", borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 5,
    borderWidth: 1, borderColor: "#1a3d20",
  },
  tagTexto: { fontSize: 11, color: "#a8ff78", fontWeight: "600" },

  card: {
    backgroundColor: "#0d1f10", borderRadius: 14,
    padding: 16, marginBottom: 12,
    borderWidth: 1, borderColor: "#0f2a14",
  },
  cardTitulo: {
    fontSize: 14, fontWeight: "800", color: "#a8ff78",
    marginBottom: 10, letterSpacing: 0.4,
  },
  cardTexto: { fontSize: 14, color: "#8ab893", lineHeight: 22 },

  listaRow: { flexDirection: "row", gap: 8, marginBottom: 6, alignItems: "flex-start" },
  listaBullet: { color: "#a8ff78", fontSize: 12, marginTop: 3 },
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