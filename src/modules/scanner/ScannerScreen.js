import React, { useEffect, useState } from "react";
import { View, Text, Switch, Image, StyleSheet, Alert } from "react-native";
import { Button, useTheme, Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";

const ScannerScreen = () => {
  const { theme } = useTheme();
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [image, setImage] = useState(null);

  const captureImage = async () => {
    // Request camera permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    // Open camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Title and Subtitle */}
        <Text style={styles.title}>Smart Product Scanner</Text>
        <Text style={styles.subtitle}>Get smarter product analysis powered by AI</Text>

        {/* Scanner Icon */}
        <View style={styles.scannerBox}>
          <Icon name="scan-outline" type="ionicon" size={80} color="#2D7EFF" />
        </View>

        {/* Scan Button */}
        <View style={{ width: "80%", marginTop: 20 }}>
          <Button
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: [theme.colors.primary, theme.colors.secondary],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={styles.scanButton}
            titleStyle={styles.scanButtonText}
            onPress={captureImage}
          >
            Scan Now
          </Button>
        </View>

        {/* Toggle for Personalized AI Analysis */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchTitle}>Include Personalized AI Analysis</Text>
          <Text style={styles.switchSubtitle}>Get customized insights based on your profile</Text>
          <Switch
            value={isPersonalized}
            onValueChange={setIsPersonalized}
            trackColor={{ false: "#ccc", true: "#2D7EFF" }}
            thumbColor={isPersonalized ? "white" : "#f4f3f4"}
          />
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Icon name="information-circle-outline" type="ionicon" size={20} color="#2D7EFF" />
          <Text style={styles.infoText}>
            Take a clear photo of your product label. Make sure the ingredients list is visible
            and well-lit for the best results.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 30,
  },
  scannerBox: {
    backgroundColor: "#EAF2FF",
    padding: 30,
    borderRadius: 100,
    marginBottom: 20,
  },
  scanButton: {
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  scanButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  switchContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  switchTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  switchSubtitle: {
    fontSize: 12,
    color: "#777",
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF2FF",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
  },
  infoText: {
    fontSize: 12,
    color: "#2D7EFF",
    marginLeft: 10,
    flex: 1,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});

export default ScannerScreen;