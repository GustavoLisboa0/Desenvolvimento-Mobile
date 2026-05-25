import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const motores = {
  v8: {
    tipo: "Motor V8",
    cilindros: 8,
    configuracao: "V (90°)",
    cilindrada: "4.0 a 8.4 L",
    potenciaMedia: "300 – 800+ cv",
    torque: "400 – 900 Nm",
    uso: "Muscle Cars, Pickups, Supercarros",
    caracteristicas: [
      "Sonoridade grave e inconfundível",
      "Alta potência e torque",
      "Consumo mais elevado",
      "Presença forte no mercado americano",
    ],
    exemplos: ["Ford Mustang GT500", "Chevrolet Corvette Z06", "Dodge Viper"],
    emoji: "🔥",
  },
  v12: {
    tipo: "Motor V12",
    cilindros: 12,
    configuracao: "V (60°)",
    cilindrada: "5.0 a 8.3 L",
    potenciaMedia: "500 – 1000+ cv",
    torque: "600 – 1200 Nm",
    uso: "Supercarros, Gran Turismos, Hipercars",
    caracteristicas: [
      "Funcionamento extremamente suave",
      "Potência máxima disponível",
      "Som refinado e musical",
      "Motor preferido de Ferrari e Lamborghini",
    ],
    exemplos: ["Ferrari 812 Superfast", "Lamborghini Aventador", "Aston Martin DB11"],
    emoji: "⚡",
  },
  boxer4: {
    tipo: "Motor Boxer 4 (Flat-4)",
    cilindros: 4,
    configuracao: "Horizontal oposto",
    cilindrada: "1.6 a 2.5 L",
    potenciaMedia: "100 – 300 cv",
    torque: "150 – 400 Nm",
    uso: "Carros compactos, Esportivos acessíveis",
    caracteristicas: [
      "Centro de gravidade muito baixo",
      "Excelente equilíbrio do veículo",
      "Associado a Subaru e Porsche",
      "Boa eficiência energética",
    ],
    exemplos: ["Subaru WRX STI", "Porsche Boxster", "Toyota GR86"],
    emoji: "🎯",
  },
  inline6: {
    tipo: "Motor Inline-6 (I6)",
    cilindros: 6,
    configuracao: "Em linha",
    cilindrada: "2.5 a 4.4 L",
    potenciaMedia: "200 – 600 cv",
    torque: "300 – 700 Nm",
    uso: "Sedãs premium, Esportivos, SUVs",
    caracteristicas: [
      "Considerado o motor mais equilibrado",
      "Funcionamento silencioso e suave",
      "Clássico da BMW e Mercedes",
      "Excelente para turbocompressores",
    ],
    exemplos: ["BMW M3 (S58)", "Toyota Supra 2JZ", "Mercedes C43 AMG"],
    emoji: "🏆",
  },
  electrico: {
    tipo: "Motor Elétrico",
    cilindros: 0,
    configuracao: "Indução / Permanente",
    cilindrada: "N/A",
    potenciaMedia: "200 – 1100+ cv",
    torque: "400 – 1800 Nm",
    uso: "EVs, Híbridos, Hipercars modernos",
    caracteristicas: [
      "Torque máximo desde 0 rpm",
      "Zero emissões diretas",
      "Manutenção muito reduzida",
      "Aceleração brutal e instantânea",
    ],
    exemplos: ["Tesla Model S Plaid", "Rimac Nevera", "Porsche Taycan Turbo S"],
    emoji: "🌱",
  },
};

export default function Motores() {
  const [motorSel, setMotorSel] = useState("v8");
  const [turbo, setTurbo] = useState(false);
  const [nitro, setNitro] = useState(false);
  const [intercooler, setIntercooler] = useState(false);

  const m = motores[motorSel];

  const calcularBonus = () => {
    let bonus = 0;
    if (turbo) bonus += 30;
    if (nitro) bonus += 50;
    if (intercooler) bonus += 15;
    return bonus;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.titulo}>⚙️  Motores Automotivos</Text>
      <Text style={styles.subtitulo}>Explore os tipos de motores e suas configurações</Text>

      {/* Picker */}
      <Text style={styles.label}>Escolha o tipo de motor:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={motorSel}
          onValueChange={(v) => setMotorSel(v)}
          style={styles.picker}
          dropdownIconColor="#4da6ff"
        >
          <Picker.Item label="🔥  Motor V8" value="v8" color="#111827" />
          <Picker.Item label="⚡  Motor V12" value="v12" color="#111827" />
          <Picker.Item label="🎯  Motor Boxer 4 (Flat-4)" value="boxer4" color="#111827" />
          <Picker.Item label="🏆  Motor Inline-6 (I6)" value="inline6" color="#111827" />
          <Picker.Item label="🌱  Motor Elétrico" value="electrico" color="#111827" />
        </Picker>
      </View>

      {/* Card principal do motor */}
      <View style={styles.cardDestaque}>
        <Text style={styles.motorEmoji}>{m.emoji}</Text>
        <Text style={styles.motorNome}>{m.tipo}</Text>
        <View style={styles.specGrid}>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>Cilindros</Text>
            <Text style={styles.specValor}>{m.cilindros || "–"}</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>Config.</Text>
            <Text style={styles.specValor} numberOfLines={1}>{m.configuracao}</Text>
          </View>
          <View style={styles.specItem}>
            <Text style={styles.specLabel}>Cilindrada</Text>
            <Text style={styles.specValor}>{m.cilindrada}</Text>
          </View>
        </View>
        <View style={styles.specGrid}>
          <View style={[styles.specItem, { flex: 1 }]}>
            <Text style={styles.specLabel}>Potência</Text>
            <Text style={styles.specValor}>{m.potenciaMedia}</Text>
          </View>
          <View style={[styles.specItem, { flex: 1 }]}>
            <Text style={styles.specLabel}>Torque</Text>
            <Text style={styles.specValor}>{m.torque}</Text>
          </View>
        </View>
      </View>

      {/* Configurações / Switches */}
      <Text style={styles.label}>🔧 Modificações (simulação)</Text>
      <View style={styles.card}>
        <View style={styles.switchRow}>
          <View style={styles.switchInfo}>
            <Text style={styles.switchLabel}>Turbocompressor</Text>
            <Text style={styles.switchDesc}>+30% de potência estimada</Text>
          </View>
          <Switch
            value={turbo}
            onValueChange={setTurbo}
            trackColor={{ false: "#2a3a55", true: "#1a6fc4" }}
            thumbColor={turbo ? "#4da6ff" : "#8aaccc"}
          />
        </View>
        <View style={styles.separador} />
        <View style={styles.switchRow}>
          <View style={styles.switchInfo}>
            <Text style={styles.switchLabel}>Sistema de Nitro (NOS)</Text>
            <Text style={styles.switchDesc}>+50% de potência (pico)</Text>
          </View>
          <Switch
            value={nitro}
            onValueChange={setNitro}
            trackColor={{ false: "#2a3a55", true: "#1a6fc4" }}
            thumbColor={nitro ? "#4da6ff" : "#8aaccc"}
          />
        </View>
        <View style={styles.separador} />
        <View style={styles.switchRow}>
          <View style={styles.switchInfo}>
            <Text style={styles.switchLabel}>Intercooler</Text>
            <Text style={styles.switchDesc}>+15% de eficiência do turbo</Text>
          </View>
          <Switch
            value={intercooler}
            onValueChange={setIntercooler}
            trackColor={{ false: "#2a3a55", true: "#1a6fc4" }}
            thumbColor={intercooler ? "#4da6ff" : "#8aaccc"}
          />
        </View>
      </View>

      {/* Bônus de potência */}
      {calcularBonus() > 0 && (
        <View style={styles.cardBonus}>
          <Text style={styles.bonusTitulo}>🚀 Bônus de Potência</Text>
          <Text style={styles.bonusValor}>+{calcularBonus()}% estimado</Text>
          <Text style={styles.bonusDesc}>
            {turbo && "Turbo ativo. "}
            {nitro && "NOS ativo. "}
            {intercooler && "Intercooler ativo."}
          </Text>
        </View>
      )}

      {/* Características */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Características</Text>
        {m.caracteristicas.map((c, i) => (
          <Text key={i} style={styles.itemLista}>• {c}</Text>
        ))}
      </View>

      {/* Uso */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Aplicações</Text>
        <Text style={styles.cardTexto}>{m.uso}</Text>
      </View>

      {/* Exemplos */}
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Carros com este motor</Text>
        {m.exemplos.map((e, i) => (
          <View key={i} style={styles.exemploRow}>
            <Text style={styles.exemploBullet}>▶</Text>
            <Text style={styles.exemploTexto}>{e}</Text>
          </View>
        ))}
      </View>
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
  label: { fontSize: 13, color: "#4da6ff", fontWeight: "600", marginBottom: 8 },

  pickerContainer: {
    backgroundColor: "#111827", borderRadius: 12,
    borderWidth: 1, borderColor: "#1a2a45",
    marginBottom: 16, overflow: "hidden",
  },
  picker: { color: "#e8f4fd", height: 52 },

  cardDestaque: {
    backgroundColor: "#0d1f36", borderRadius: 14,
    padding: 20, marginBottom: 16,
    borderWidth: 1, borderColor: "#1a6fc4",
    alignItems: "center",
  },
  motorEmoji: { fontSize: 48, marginBottom: 8 },
  motorNome: {
    fontSize: 20, fontWeight: "900", color: "#4da6ff",
    letterSpacing: 1, marginBottom: 14, textAlign: "center",
  },
  specGrid: {
    flexDirection: "row", gap: 10, marginBottom: 10, width: "100%",
  },
  specItem: {
    flex: 1, backgroundColor: "#111827", borderRadius: 10,
    padding: 10, alignItems: "center",
    borderWidth: 1, borderColor: "#1a2a45",
  },
  specLabel: { fontSize: 10, color: "#8aaccc", marginBottom: 4, textAlign: "center" },
  specValor: { fontSize: 13, fontWeight: "800", color: "#e8f4fd", textAlign: "center" },

  card: {
    backgroundColor: "#111827", borderRadius: 14,
    padding: 16, marginBottom: 14,
    borderWidth: 1, borderColor: "#1a2a45",
  },
  cardBonus: {
    backgroundColor: "#0d2a1a", borderRadius: 14,
    padding: 16, marginBottom: 14,
    borderWidth: 1, borderColor: "#1a6c3a",
    alignItems: "center",
  },
  bonusTitulo: { fontSize: 14, color: "#4dff9a", fontWeight: "700", marginBottom: 4 },
  bonusValor: { fontSize: 28, fontWeight: "900", color: "#4dff9a", marginBottom: 6 },
  bonusDesc: { fontSize: 12, color: "#8acca8", textAlign: "center" },

  cardTitulo: {
    fontSize: 14, fontWeight: "700", color: "#4da6ff",
    marginBottom: 10, letterSpacing: 0.4,
  },
  cardTexto: { fontSize: 14, color: "#c5dff5", lineHeight: 22 },

  switchRow: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingVertical: 6,
  },
  switchInfo: { flex: 1, marginRight: 12 },
  switchLabel: { fontSize: 15, fontWeight: "600", color: "#e8f4fd" },
  switchDesc: { fontSize: 12, color: "#8aaccc", marginTop: 2 },
  separador: { height: 1, backgroundColor: "#1a2a45", marginVertical: 8 },

  itemLista: { fontSize: 14, color: "#c5dff5", marginBottom: 6, lineHeight: 20 },

  exemploRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  exemploBullet: { color: "#4da6ff", fontSize: 10, marginRight: 8 },
  exemploTexto: { fontSize: 14, color: "#c5dff5" },
});