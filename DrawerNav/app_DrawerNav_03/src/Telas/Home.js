import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const linguagens = [
  { sigla: "C",   cor: "#5dde76", desc: "A base de tudo. Linguagem de baixo nível com controle total sobre o hardware." },
  { sigla: "Py",  cor: "#a8ff78", desc: "Simples e poderosa. A favorita de quem começa e de quem vai longe." },
  { sigla: "J",   cor: "#39d353", desc: "Escreva uma vez, rode em qualquer lugar. Robusta e amplamente usada." },
];

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroIcone}>{"</>"}</Text>
        <Text style={styles.heroTitulo}>CodeGuide</Text>
        <Text style={styles.heroSub}>
          Seu guia compacto sobre as linguagens que moldaram a computação moderna
        </Text>
      </View>

      <View style={styles.divider} />

      {/* Cards das 3 linguagens */}
      <Text style={styles.secaoTitulo}>📚  O que você vai encontrar</Text>

      {linguagens.map((l) => (
        <View key={l.sigla} style={styles.card}>
          <View style={[styles.badge, { borderColor: l.cor }]}>
            <Text style={[styles.badgeTexto, { color: l.cor }]}>{l.sigla}</Text>
          </View>
          <Text style={styles.cardDesc}>{l.desc}</Text>
        </View>
      ))}

      <View style={styles.divider} />

      {/* Como navegar */}
      <Text style={styles.secaoTitulo}>🧭  Como navegar</Text>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoIcone}>☰</Text>
          <View style={styles.infoTextos}>
            <Text style={styles.infoLabel}>Menu Lateral (Drawer)</Text>
            <Text style={styles.infoDesc}>
              Deslize da esquerda ou toque no ícone do cabeçalho para abrir o menu e navegar entre Home e Linguagens.
            </Text>
          </View>
        </View>

        <View style={styles.separador} />

        <View style={styles.infoRow}>
          <Text style={styles.infoIcone}>⬛</Text>
          <View style={styles.infoTextos}>
            <Text style={styles.infoLabel}>Abas Inferiores (Tabs)</Text>
            <Text style={styles.infoDesc}>
              Dentro de "Linguagens", use as abas na parte inferior para alternar entre C, Python e Java.
            </Text>
          </View>
        </View>
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Linguagens")}
        activeOpacity={0.8}
      >
        <Text style={styles.botaoTexto}>Explorar Linguagens  →</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <Text style={styles.rodape}>
        Navegação: Drawer + Tab  •  React Native
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#071009" },
  content: { padding: 22, paddingBottom: 40 },

  hero: { alignItems: "center", paddingVertical: 30 },
  heroIcone: {
    fontSize: 44, fontWeight: "900", color: "#5dde76",
    letterSpacing: -2, marginBottom: 10,
  },
  heroTitulo: {
    fontSize: 36, fontWeight: "900", color: "#d4f5dc",
    letterSpacing: 3, marginBottom: 10,
  },
  heroSub: {
    fontSize: 14, color: "#5a8a62", textAlign: "center",
    lineHeight: 21, paddingHorizontal: 16,
  },

  divider: { height: 1, backgroundColor: "#0f2a14", marginVertical: 20 },

  secaoTitulo: {
    fontSize: 14, fontWeight: "700", color: "#5dde76",
    letterSpacing: 0.6, marginBottom: 14,
  },

  card: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#0d1f10", borderRadius: 12,
    padding: 14, marginBottom: 10,
    borderWidth: 1, borderColor: "#0f2a14",
    gap: 14,
  },
  badge: {
    width: 46, height: 46, borderRadius: 23,
    borderWidth: 2, justifyContent: "center", alignItems: "center",
  },
  badgeTexto: { fontSize: 13, fontWeight: "900" },
  cardDesc: { flex: 1, fontSize: 13, color: "#8ab893", lineHeight: 19 },

  infoCard: {
    backgroundColor: "#0d1f10", borderRadius: 12,
    padding: 16, marginBottom: 20,
    borderWidth: 1, borderColor: "#0f2a14",
  },
  infoRow: { flexDirection: "row", gap: 14, paddingVertical: 4 },
  infoIcone: { fontSize: 22, width: 30, textAlign: "center" },
  infoTextos: { flex: 1 },
  infoLabel: { fontSize: 14, fontWeight: "700", color: "#d4f5dc", marginBottom: 4 },
  infoDesc: { fontSize: 13, color: "#5a8a62", lineHeight: 19 },
  separador: { height: 1, backgroundColor: "#0f2a14", marginVertical: 12 },

  botao: {
    backgroundColor: "#1a4d22", borderRadius: 12,
    paddingVertical: 16, alignItems: "center",
    marginBottom: 24, borderWidth: 1, borderColor: "#2a6e32",
  },
  botaoTexto: { color: "#5dde76", fontSize: 15, fontWeight: "800", letterSpacing: 0.5 },

  rodape: { fontSize: 11, color: "#2a4a2e", textAlign: "center" },
});