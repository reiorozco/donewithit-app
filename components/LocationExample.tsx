import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import useUserLocation from "@/hooks/useUserLocation";

export default function LocationExample() {
  const { errorMsg, loading, location } = useUserLocation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User ubication:</Text>

      {loading && <ActivityIndicator color="#007AFF" size="large" />}

      {!loading && errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}

      {!loading && location && (
        <View style={styles.locationBox}>
          <Text style={styles.label}>Latitude:</Text>
          <Text style={styles.value}>{location.coords.latitude}</Text>

          <Text style={styles.label}>Longitude:</Text>
          <Text style={styles.value}>{location.coords.longitude}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  errorText: {
    color: "#D32F2F",
    fontSize: 16,
    textAlign: "center",
  },
  label: {
    color: "#555",
    fontWeight: "bold",
    marginTop: 8,
  },
  locationBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    elevation: 2,
    maxWidth: 320,
    padding: 16,
    width: "100%",
  },
  title: {
    color: "#333",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  value: {
    color: "#222",
    fontSize: 16,
  },
});
