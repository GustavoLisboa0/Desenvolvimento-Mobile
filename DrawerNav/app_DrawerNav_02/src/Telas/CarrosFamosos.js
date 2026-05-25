import React, { useState } from "react";
import {
  View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity,
} from "react-native";

const carros = [
  {
    id: 1,
    nome: "Ferrari F40",
    ano: "1987",
    pais: "🇮🇹",
    potencia: "478 cv",
    velocidade: "324 km/h",
    descricao: "Último carro aprovado pessoalmente por Enzo Ferrari. Símbolo máximo dos supercarros dos anos 80.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/1991_Ferrari_F40.jpg/1280px-1991_Ferrari_F40.jpg",
    tags: ["Supercar", "Lendário", "Manual"],
  },
  {
    id: 2,
    nome: "Ford Mustang GT",
    ano: "1969",
    pais: "🇺🇸",
    potencia: "390 cv",
    velocidade: "210 km/h",
    descricao: "Ícone do muscle car americano. Presente em dezenas de filmes e símbolo da contracultura dos anos 60.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/1969_Ford_Mustang_GT.jpg/1280px-1969_Ford_Mustang_GT.jpg",
    tags: ["Muscle Car", "Clássico", "V8"],
  },
  {
    id: 3,
    nome: "Porsche 911",
    ano: "1963",
    pais: "🇩🇪",
    potencia: "130 cv",
    velocidade: "210 km/h",
    descricao: "Um dos carros mais reconhecíveis do mundo. O design traseiro único do 911 perdurou por mais de 60 anos.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Porsche_911_Carrera_4S_%28992%29_IAA_2019.jpg/1280px-Porsche_911_Carrera_4S_%28992%29_IAA_2019.jpg",
    tags: ["Esportivo", "Alemão", "Atemporal"],
  },
  {
    id: 4,
    nome: "McLaren F1",
    ano: "1992",
    pais: "🇬🇧",
    potencia: "627 cv",
    velocidade: "391 km/h",
    descricao: "Por anos foi o carro mais rápido do mundo. Com motor central e 3 lugares, é obra de arte mecânica.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/McLaren_F1_-_Flickr_-_Supermac1961_%284%29.jpg/1280px-McLaren_F1_-_Flickr_-_Supermac1961_%284%29.jpg",
    tags: ["Record", "Hypercar", "3 lugares"],
  },
  {
    id: 5,
    nome: "Toyota Supra MK4",
    ano: "1993",
    pais: "🇯🇵",
    potencia: "280 cv",
    velocidade: "250 km/h",
    descricao: "Lendário no mundo do tuning e dos jogos de corrida. Motor 2JZ capaz de suportar mais de 1000 cv com modificações.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/1997_Toyota_Supra_RZ.jpg/1280px-1997_Toyota_Supra_RZ.jpg",
    tags: ["JDM", "Tuning", "2JZ"],
  },
  {
    id: 6,
    nome: "Lamborghini Miura",
    ano: "1966",
    pais: "🇮🇹",
    potencia: "350 cv",
    velocidade: "280 km/h",
    descricao: "Considerado o primeiro supercarro moderno. Seu design revolucionou a indústria automotiva nos anos 60.",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lamborghini_Miura_%281%29.jpg/1280px-Lamborghini_Miura_%281%29.jpg",
    tags: ["Pioneiro", "Design", "Clássico"],
  },
];

export default function CarrosFamosos() {
  const [busca, setBusca] = useState("");
  const [selecionado, setSelecionado] = useState(null);

  const filtrados = carros.filter((c) =>
    c.nome.toLowerCase().includes(busca.toLowerCase()) ||
    c.tags.some((t) => t.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>🚗  Carros Famosos</Text>
      <Text style={styles.subtitulo}>Os ícones da história automotiva</Text>

      {/* Busca */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputIcone}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder="Buscar por nome ou categoria..."
          placeholderTextColor="#4a6080"
          value={busca}
          onChangeText={setBusca}
        />
        {busca.length > 0 && (
          <TouchableOpacity onPress={() => setBusca("")}>
            <Text style={styles.limpar}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Resultado da busca */}
      <Text style={styles.resultado}>
        {filtrados.length} carro{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
      </Text>

      {/* Lista */}
      {filtrados.map((carro) => (
        <TouchableOpacity
          key={carro.id}
          style={[styles.card, selecionado === carro.id && styles.cardAtivo]}
          onPress={() => setSelecionado(selecionado === carro.id ? null : carro.id)}
          activeOpacity={0.85}
        >
          {/* Imagem */}
          <Image
            source={{ uri: carro.imagem }}
            style={styles.imagem}
            resizeMode="cover"
          />

          {/* Info básica */}
          <View style={styles.cardInfo}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardNome}>{carro.pais} {carro.nome}</Text>
              <Text style={styles.cardAno}>{carro.ano}</Text>
            </View>

            <View style={styles.tagRow}>
              {carro.tags.map((t) => (
                <View key={t} style={styles.tag}>
                  <Text style={styles.tagText}>{t}</Text>
                </View>
              ))}
            </View>

            {/* Expandido */}
            {selecionado === carro.id && (
              <View style={styles.expandido}>
                <View style={styles.especRow}>
                  <View style={styles.especItem}>
                    <Text style={styles.especLabel}>Potência</Text>
                    <Text style={styles.especValor}>{carro.potencia}</Text>
                  </View>
                  <View style={styles.especItem}>
                    <Text style={styles.especLabel}>Vel. Máx.</Text>
                    <Text style={styles.especValor}>{carro.velocidade}</Text>
                  </View>
                </View>
                <Text style={styles.descricao}>{carro.descricao}</Text>
              </View>
            )}

            <Text style={styles.toque}>
              {selecionado === carro.id ? "▲ Fechar detalhes" : "▼ Ver detalhes"}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {filtrados.length === 0 && (
        <View style={styles.vazio}>
          <Text style={styles.vazioEmoji}>🔎</Text>
          <Text style={styles.vazioTexto}>Nenhum carro encontrado para "{busca}"</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0a0f1e" },
  content: { padding: 20, paddingBottom: 40 },

  titulo: {
    fontSize: 22, fontWeight: "900", color: "#e8f4fd",
    letterSpacing: 1, marginBottom: 4,
  },
  subtitulo: { fontSize: 13, color: "#8aaccc", marginBottom: 16 },

  inputContainer: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#111827", borderRadius: 12,
    borderWidth: 1, borderColor: "#1a2a45",
    paddingHorizontal: 14, marginBottom: 10, height: 48,
  },
  inputIcone: { fontSize: 16, marginRight: 8 },
  input: { flex: 1, color: "#e8f4fd", fontSize: 14 },
  limpar: { fontSize: 16, color: "#8aaccc", paddingLeft: 8 },

  resultado: { fontSize: 12, color: "#4a6080", marginBottom: 14 },

  card: {
    backgroundColor: "#111827", borderRadius: 14,
    marginBottom: 16, overflow: "hidden",
    borderWidth: 1, borderColor: "#1a2a45",
  },
  cardAtivo: { borderColor: "#1a6fc4" },

  imagem: { width: "100%", height: 180 },

  cardInfo: { padding: 14 },
  cardHeader: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", marginBottom: 8,
  },
  cardNome: { fontSize: 16, fontWeight: "800", color: "#e8f4fd", flex: 1 },
  cardAno: {
    fontSize: 13, color: "#4da6ff", fontWeight: "700",
    backgroundColor: "#0d1f36", paddingHorizontal: 8,
    paddingVertical: 3, borderRadius: 6,
  },

  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginBottom: 6 },
  tag: {
    backgroundColor: "#1a2a45", borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 3,
  },
  tagText: { fontSize: 11, color: "#8aaccc" },

  expandido: { marginTop: 10 },
  especRow: { flexDirection: "row", gap: 12, marginBottom: 10 },
  especItem: {
    flex: 1, backgroundColor: "#0d1f36", borderRadius: 10,
    padding: 12, alignItems: "center",
    borderWidth: 1, borderColor: "#1a6fc4",
  },
  especLabel: { fontSize: 11, color: "#8aaccc", marginBottom: 4 },
  especValor: { fontSize: 18, fontWeight: "900", color: "#4da6ff" },
  descricao: { fontSize: 13, color: "#c5dff5", lineHeight: 20 },

  toque: { fontSize: 12, color: "#4a6080", marginTop: 8, textAlign: "center" },

  vazio: { alignItems: "center", paddingVertical: 40 },
  vazioEmoji: { fontSize: 40, marginBottom: 10 },
  vazioTexto: { fontSize: 14, color: "#4a6080", textAlign: "center" },
});