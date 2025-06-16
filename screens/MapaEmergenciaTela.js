import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("window");

export default function MapaEmergenciaTela() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,   
          longitude: -46.633308,  
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
          title="Centro Universitário IESB"
          description="Localização do IESB"
        />
      </MapView>

      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={() => navigation.navigate("EmergenciaVisual")}
      >
        <Ionicons name="alert-circle" size={30} color="white" />
      </TouchableOpacity>

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
  container: { flex: 1, backgroundColor: "#fff" },
  map: { width: "100%", height: height * 0.85 },
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
  footerInfo: { flex: 1, alignItems: "center" },
  locationName: { fontSize: 16, fontWeight: "bold" },
  locationDetails: { fontSize: 14, color: "#666" },
  iconLeft: { paddingRight: 16 },
  iconRight: { paddingLeft: 16 },
});
