import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, useTheme } from '@rneui/themed';
import FeatureCard from '../../core/components/FeaturesCard';

const features = [
  { id: 1, title: 'Product Scanner', subtitle: 'Scan any product image', icon: 'qrcode' },
  { id: 2, title: 'Personal Options', subtitle: 'Customize your preferences', icon: 'user' },
  { id: 3, title: 'Ingredients', subtitle: 'Detailed ingredient analysis', icon: 'flask' },
  { id: 4, title: 'Health Score', subtitle: 'Product health rating', icon: 'heartbeat' },
  { id: 5, title: 'Pros & Cons', subtitle: 'Quick product evaluation', icon: 'balance-scale' },
  { id: 6, title: 'Scan History', subtitle: 'View past scans', icon: 'history' }
];

const comingSoonFeatures = [
  { id: 7, title: 'Compare Items', subtitle: 'Side by side comparison', icon: 'th' },
  { id: 8, title: 'Best Prices', subtitle: 'Find best deals', icon: 'tags' }
];

const DashboardScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.featuresContainer}>
          <Text h4 style={styles.subHeader}>Current Features</Text>
          <View style={styles.cardContainer}>
            {features.map((item, i) => (
              <FeatureCard
                key={i}
                item={item}
                theme={theme}
                containerStyle={styles.featureCard}
                titleStyle={styles.featureTitle}
                subtitleStyle={styles.featureSubtitle}
              />
            ))}
          </View>
        </View>
        <View style={styles.featuresContainer}>
          <Text h4 style={styles.subHeader}>Future Possibilities</Text>
          <View style={styles.cardContainer}>
            {comingSoonFeatures.map((item, i) => (
              <FeatureCard
                key={item.id}
                item={item}
                theme={theme}
                containerStyle={[styles.featureCard, styles.comingSoonCard]}
                titleStyle={styles.comingSoonTitle}
                subtitleStyle={styles.comingSoonSubtitle}
                iconColor="#A0A0A0"
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featuresContainer: {
    marginBottom: 20,
  },
  subHeader: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  featureCard: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  featureSubtitle: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 5,
  },
  comingSoonCard: {
    borderWidth: 1,
    borderColor: '#A0A0A0',
  },
  comingSoonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
  comingSoonSubtitle: {
    fontSize: 12,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default DashboardScreen;