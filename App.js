import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import MapaEmergenciaTela from "./screens/MapaEmergenciaTela";
import EmergenciaVisualTela from "./screens/EmergenciaVisualTela";
import ConfiguracoesTela from "./screens/ConfiguracoesTela";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mapa">
        <Stack.Screen
          name="Mapa"
          component={MapaEmergenciaTela}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmergenciaVisual"
          component={EmergenciaVisualTela}
          options={{ title: "Emergência" }}
        />
        <Stack.Screen
          name="Configuracoes"
          component={ConfiguracoesTela}
          options={{ title: "Configurações" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
