import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function MapaEmergenciaTela() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/mapa_simulado.png")}
        style={styles.mapImage}
        resizeMode="cover"
      />

      {/* Botão de emergência flutuante */}
      <TouchableOpacity style={styles.emergencyButton}>
        <Image
          source={require("../assets/sirene.png")}
          style={{ width: 30, height: 30, tintColor: "white" }}
        />
      </TouchableOpacity>

      {/* Rodapé com informações e ícones */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconLeft}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>

        <View style={styles.footerInfo}>
          <Text style={styles.locationName}>Centro Universitário IESB</Text>
          <Text style={styles.locationDetails}>27 min • 2,5 km</Text>
        </View>

        <TouchableOpacity style={styles.iconRight}>
          <MaterialIcons name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapImage: {
    width: "100%",
    height: height * 0.85,
  },
  emergencyButton: {
    position: "absolute",
    bottom: 150,
    right: 20,
    backgroundColor: "red",
    borderRadius: 40,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  footerInfo: {
    flex: 1,
    alignItems: "center",
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationDetails: {
    fontSize: 14,
    color: "#666",
  },
  iconLeft: {
    paddingRight: 16,
  },
  iconRight: {
    paddingLeft: 16,
  },
});
