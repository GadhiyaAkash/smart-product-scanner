import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card, Icon, useTheme } from '@rneui/themed';

const features = [
  { id: 1, title: 'Product Scanner', subtitle: 'Scan any product image', icon: 'qr-code-outline' },
  { id: 2, title: 'Personal Options', subtitle: 'Customize your preferences', icon: 'person-outline' },
  { id: 3, title: 'Ingredients', subtitle: 'Detailed ingredient analysis', icon: 'flask-outline' },
  { id: 4, title: 'Health Score', subtitle: 'Product health rating', icon: 'shield-checkmark-outline' },
  { id: 5, title: 'Pros & Cons', subtitle: 'Quick product evaluation', icon: 'scale-outline' },
  { id: 6, title: 'Scan History', subtitle: 'View past scans', icon: 'time-outline' }
];

const comingSoonFeatures = [
  { id: 7, title: 'Compare Items', subtitle: 'Side by side comparison', icon: 'grid-outline' },
  { id: 8, title: 'Best Prices', subtitle: 'Find best deals', icon: 'pricetag-outline' }
];

const DashboardScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      {/* Current Features */}
      <ScrollView>
        <View style={styles.featuresContainer}>
          <Text h4 style={styles.subHeader}>Current Features</Text>
          <View style={styles.cardContainer}>
            {
              features.map((item, i) => (
                <View key={i} style={{ width: '50%' }}>
                  <Card containerStyle={styles.featureCard}>
                    <View style={{ flex: 1, justifyContent: 'space-around' }}>
                      <Icon name={item.icon} type="ionicon" size={30} color={theme.colors.primary} />
                      <Text style={styles.featureTitle}>{item.title}</Text>
                      <Text style={styles.featureSubtitle}>{item.subtitle}</Text>
                    </View>
                  </Card>
                </View>
              ))
            }
          </View>
        </View>
        <View style={styles.featuresContainer}>
          <Text h4 style={styles.subHeader}>Future Possibilities</Text>
          <View style={styles.cardContainer}>
            {
              comingSoonFeatures.map((item, i) => (
                <View key={item.id} style={{ width: '50%' }}>
                  <Card containerStyle={styles.comingSoonCard}>
                    <View style={{ flex: 1, justifyContent: 'space-around' }}>
                      <Icon name={item.icon} type="ionicon" size={30} color="#A0A0A0" />
                      <Text style={styles.comingSoonTitle}>{item.title}</Text>
                      <Text style={styles.comingSoonSubtitle}>{item.subtitle}</Text>
                    </View>
                  </Card>
                </View>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribute cards evenly
  },
  featuresContainer: {
    marginBottom: 20
  },
  subHeader: {
    marginBottom: 10
  },
  featureCard: {
    flex: 1,
    borderRadius: 10,
    margin: 5
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center'
  },
  featureSubtitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center'
  },
  comingSoonCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    position: 'relative'
  },
  comingSoonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#A0A0A0',
    textAlign: 'center'
  },
  comingSoonSubtitle: {
    fontSize: 12,
    color: '#A0A0A0',
    textAlign: 'center'
  }
});

export default DashboardScreen;
