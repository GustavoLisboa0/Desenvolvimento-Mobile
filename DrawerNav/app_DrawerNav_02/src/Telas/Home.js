import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  const [turboAtivo, setTurboAtivo] = useState(false);
  const [somMotor, setSomMotor] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroEmoji}>🏎️</Text>
        <Text style={styles.heroTitulo}>AutoGuia</Text>
        <Text style={styles.heroSub}>O seu guia completo sobre o mundo automotivo</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />


      {/* Sobre o app */}
      <View style={styles.card}>
        <Text style={styles.secaoTitulo}>📖  Sobre o AutoGuia</Text>
        <Text style={styles.textoInfo}>
          Explore as principais montadoras do mundo, conheça carros icônicos da história
          e compare especificações de motores. Use o menu lateral para navegar entre as seções.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f1e" },
  content: { padding: 20, paddingBottom: 40 },

  hero: { alignItems: "center", paddingVertical: 28 },
  heroEmoji: { fontSize: 56, marginBottom: 10 },
  heroTitulo: {
    fontSize: 34, fontWeight: "900", color: "#e8f4fd",
    letterSpacing: 2, marginBottom: 6,
  },
  heroSub: {
    fontSize: 14, color: "#8aaccc", textAlign: "center",
    lineHeight: 20, paddingHorizontal: 20,
  },

  divider: {
    height: 1, backgroundColor: "#1a2a45", marginVertical: 16,
  },

  secaoTitulo: {
    fontSize: 16, fontWeight: "700", color: "#4da6ff",
    marginBottom: 12, letterSpacing: 0.5,
  },

  card: {
    backgroundColor: "#111827", borderRadius: 14,
    padding: 16, marginBottom: 16,
    borderWidth: 1, borderColor: "#1a2a45",
  },

  switchRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingVertical: 6,
  },
  switchInfo: { flex: 1, marginRight: 12 },
  switchLabel: { fontSize: 15, fontWeight: "600", color: "#e8f4fd" },
  switchDesc: { fontSize: 12, color: "#8aaccc", marginTop: 2 },
  separador: { height: 1, backgroundColor: "#1a2a45", marginVertical: 8 },

  statusCard: {
    backgroundColor: "#0d1f36", borderRadius: 14,
    padding: 16, marginBottom: 16,
    borderWidth: 1, borderColor: "#1a6fc4",
  },
  statusTitulo: {
    fontSize: 15, fontWeight: "700", color: "#4da6ff",
    marginBottom: 10,
  },
  statusItem: { fontSize: 14, color: "#c5dff5", marginBottom: 6, lineHeight: 20 },

  textoInfo: { fontSize: 14, color: "#8aaccc", lineHeight: 22 },
});