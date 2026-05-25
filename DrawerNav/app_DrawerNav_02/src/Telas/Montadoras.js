import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const montadoras = {
  toyota: {
    nome: "Toyota",
    pais: "🇯🇵 Japão",
    fundacao: "1937",
    sede: "Toyota City, Japão",
    modelos: ["Corolla", "Camry", "Hilux", "Yaris", "RAV4", "Land Cruiser"],
    descricao:
      "A Toyota é a maior montadora do mundo em volume de vendas. Pioneira na tecnologia híbrida com o Prius, é reconhecida pela confiabilidade e inovação contínua.",
    curiosidade: "O Corolla é o carro mais vendido da história, com mais de 50 milhões de unidades.",
  },
  ford: {
    nome: "Ford",
    pais: "🇺🇸 Estados Unidos",
    fundacao: "1903",
    sede: "Dearborn, Michigan, EUA",
    modelos: ["Mustang", "F-150", "Bronco", "Explorer", "Maverick", "EcoSport"],
    descricao:
      "A Ford foi fundada por Henry Ford, que revolucionou a indústria ao introduzir a linha de montagem em série. É sinônimo de automóveis americanos clássicos.",
    curiosidade: "O Ford F-150 é o veículo mais vendido dos EUA por mais de 40 anos consecutivos.",
  },
  ferrari: {
    nome: "Ferrari",
    pais: "🇮🇹 Itália",
    fundacao: "1939",
    sede: "Maranello, Itália",
    modelos: ["F40", "LaFerrari", "488 GTB", "SF90", "Roma", "Purosangue"],
    descricao:
      "A Ferrari é o símbolo máximo do automobilismo esportivo de alto desempenho. Com forte presença na Fórmula 1, seus carros combinam potência extrema com design escultural.",
    curiosidade: "A lista de espera para um Ferrari pode chegar a 3 anos em alguns modelos.",
  },
  volkswagen: {
    nome: "Volkswagen",
    pais: "🇩🇪 Alemanha",
    fundacao: "1937",
    sede: "Wolfsburg, Alemanha",
    modelos: ["Golf", "Polo", "Passat", "Tiguan", "ID.4", "Amarok"],
    descricao:
      "A Volkswagen, que significa 'carro do povo' em alemão, é uma das maiores montadoras da Europa. Seu Fusca (Beetle) é um dos carros mais icônicos já produzidos.",
    curiosidade: "O Fusca foi fabricado por 65 anos, de 1938 a 2003.",
  },
  bmw: {
    nome: "BMW",
    pais: "🇩🇪 Alemanha",
    fundacao: "1916",
    sede: "Munique, Alemanha",
    modelos: ["Série 3", "Série 5", "X5", "M3", "i4", "M850i"],
    descricao:
      "A BMW (Bayerische Motoren Werke) é sinônimo de prazer ao dirigir. Reconhecida por seus motores potentes e chassis precisos, domina o segmento premium global.",
    curiosidade: "O logotipo da BMW representa uma hélice de avião girando — herança de sua origem na aviação.",
  },
};

export default function Montadoras() {
  const [selecionada, setSelecionada] = useState("toyota");
  const info = montadoras[selecionada];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>🏭  Montadoras do Mundo</Text>
      <Text style={styles.subtitulo}>Selecione uma montadora para ver os detalhes</Text>

      {/* Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selecionada}
          onValueChange={(val) => setSelecionada(val)}
          style={styles.picker}
          dropdownIconColor="#4da6ff"
        >
          <Picker.Item label="🇯🇵  Toyota" value="toyota" color="#111827" />
          <Picker.Item label="🇺🇸  Ford" value="ford" color="#111827" />
          <Picker.Item label="🇮🇹  Ferrari" value="ferrari" color="#111827" />
          <Picker.Item label="🇩🇪  Volkswagen" value="volkswagen" color="#111827" />
          <Picker.Item label="🇩🇪  BMW" value="bmw" color="#111827" />
        </Picker>
      </View>

      {/* Card principal */}
      <View style={styles.cardDestaque}>
        <Text style={styles.nomeMontadora}>{info.nome}</Text>
        <View style={styles.badgeRow}>
          <View style={styles.badge}><Text style={styles.badgeText}>{info.pais}</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>✦ Desde {info.fundacao}</Text></View>
        </View>
        <Text style={styles.sede}>📍 {info.sede}</Text>
      </View>

      {/* Descrição */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Sobre a Montadora</Text>
        <Text style={styles.cardTexto}>{info.descricao}</Text>
      </View>

      {/* Modelos */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Modelos Famosos</Text>
        <View style={styles.modelosGrid}>
          {info.modelos.map((m) => (
            <View key={m} style={styles.modeloTag}>
              <Text style={styles.modeloTexto}>{m}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Curiosidade */}
      <View style={styles.cardCuriosidade}>
        <Text style={styles.cardTitulo}>💡 Você Sabia?</Text>
        <Text style={styles.cardTexto}>{info.curiosidade}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f1e" },
  content: { padding: 20, paddingBottom: 40 },

  titulo: {
    fontSize: 22, fontWeight: "900", color: "#e8f4fd",
    letterSpacing: 1, marginBottom: 6,
  },
  subtitulo: { fontSize: 13, color: "#8aaccc", marginBottom: 16 },

  pickerContainer: {
    backgroundColor: "#111827", borderRadius: 12,
    borderWidth: 1, borderColor: "#1a2a45",
    marginBottom: 16, overflow: "hidden",
  },
  picker: { color: "#e8f4fd", height: 52 },

  cardDestaque: {
    backgroundColor: "#0d1f36", borderRadius: 14,
    padding: 20, marginBottom: 14,
    borderWidth: 1, borderColor: "#1a6fc4",
    alignItems: "center",
  },
  nomeMontadora: {
    fontSize: 28, fontWeight: "900", color: "#4da6ff",
    letterSpacing: 2, marginBottom: 10,
  },
  badgeRow: { flexDirection: "row", gap: 8, marginBottom: 10 },
  badge: {
    backgroundColor: "#1a2a45", borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 4,
    borderWidth: 1, borderColor: "#2a3a55",
  },
  badgeText: { fontSize: 12, color: "#8aaccc" },
  sede: { fontSize: 13, color: "#8aaccc" },

  card: {
    backgroundColor: "#111827", borderRadius: 14,
    padding: 16, marginBottom: 14,
    borderWidth: 1, borderColor: "#1a2a45",
  },
  cardCuriosidade: {
    backgroundColor: "#0d1f36", borderRadius: 14,
    padding: 16, marginBottom: 14,
    borderWidth: 1, borderColor: "#2a4a6e",
  },
  cardTitulo: {
    fontSize: 14, fontWeight: "700", color: "#4da6ff",
    marginBottom: 10, letterSpacing: 0.4,
  },
  cardTexto: { fontSize: 14, color: "#c5dff5", lineHeight: 22 },

  modelosGrid: {
    flexDirection: "row", flexWrap: "wrap", gap: 8,
  },
  modeloTag: {
    backgroundColor: "#1a2a45", borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 6,
    borderWidth: 1, borderColor: "#2a3a55",
  },
  modeloTexto: { fontSize: 13, color: "#e8f4fd", fontWeight: "500" },
});