import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const topicos = [
  {
    titulo: "O que é?",
    icone: "📌",
    conteudo:
      "Java é uma linguagem orientada a objetos criada pela Sun Microsystems (hoje Oracle), lançada em 1995. Seu lema é \"Write Once, Run Anywhere\" — o código compilado roda em qualquer dispositivo com a JVM instalada.",
  },
  {
    titulo: "Por que aprender Java?",
    icone: "🎯",
    conteudo:
      "Java é a base de milhões de aplicações corporativas, Android apps e sistemas de grande escala. Aprender Java significa ter acesso a um dos mercados de trabalho mais vastos da tecnologia.",
  },
  {
    titulo: "Onde é usada?",
    icone: "🏢",
    conteudo:
      "Aplicações Android (Android Studio), sistemas bancários e corporativos, back-end com Spring Boot, big data (Hadoop, Kafka), jogos (Minecraft foi escrito em Java) e APIs REST.",
  },
  {
    titulo: "Características",
    icone: "⚙️",
    conteudo: null,
    lista: [
      "100% Orientada a Objetos",
      "Compilada para bytecode (roda na JVM)",
      "Tipagem estática e forte",
      "Gerenciamento de memória via Garbage Collector",
      "Amplamente usada em Android",
      "Ecossistema enorme: Maven, Spring, Hibernate",
    ],
  },
  {
    titulo: "Os 4 Pilares da OO em Java",
    icone: "🏛️",
    conteudo: null,
    lista: [
      "Encapsulamento: proteger os dados internos da classe",
      "Herança: reutilizar e estender comportamentos",
      "Polimorfismo: mesmo método, comportamentos diferentes",
      "Abstração: esconder complexidade, expor o essencial",
    ],
  },
  {
    titulo: "Exemplo de código",
    icone: "💻",
    conteudo: null,
    codigo:
`public class Main {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");

        int soma = 0;
        for (int i = 1; i <= 10; i++) {
            soma += i;
        }

        System.out.println("Soma: " + soma);
    }
}`,
  },
];

export default function LinguagemJava() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.letraBadge}>
          <Text style={styles.letra}>J</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.headerNome}>Java</Text>
          <Text style={styles.headerAno}>Sun Microsystems  •  1995</Text>
        </View>
      </View>

      <View style={styles.tagRow}>
        {["Orientada a Objetos", "JVM", "Android", "Corporativo"].map((t) => (
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
    borderColor: "#39d353", justifyContent: "center", alignItems: "center",
  },
  letra: { fontSize: 32, fontWeight: "900", color: "#39d353" },
  headerInfo: { flex: 1 },
  headerNome: { fontSize: 22, fontWeight: "900", color: "#d4f5dc", letterSpacing: 1 },
  headerAno: { fontSize: 12, color: "#4a7a52", marginTop: 4 },

  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  tag: {
    backgroundColor: "#0f2a14", borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 5,
    borderWidth: 1, borderColor: "#1a3d20",
  },
  tagTexto: { fontSize: 11, color: "#39d353", fontWeight: "600" },

  card: {
    backgroundColor: "#0d1f10", borderRadius: 14,
    padding: 16, marginBottom: 12,
    borderWidth: 1, borderColor: "#0f2a14",
  },
  cardTitulo: {
    fontSize: 14, fontWeight: "800", color: "#39d353",
    marginBottom: 10, letterSpacing: 0.4,
  },
  cardTexto: { fontSize: 14, color: "#8ab893", lineHeight: 22 },

  listaRow: { flexDirection: "row", gap: 8, marginBottom: 6, alignItems: "flex-start" },
  listaBullet: { color: "#39d353", fontSize: 12, marginTop: 3 },
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