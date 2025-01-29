import React from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, Icon, Chip } from '@rneui/themed';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const ProductInfo = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F8F9FB', padding: 16 }}>
            {/* Product Image */}
            {/* <Card containerStyle={{ borderRadius: 10, padding: 0, overflow: 'hidden' }}>
                <Image
                    source={{ uri: user.image || 'https://via.placeholder.com/400' }} // Replace with actual image
                    style={{ width: '100%', height: 180 }}
                />
            </Card> */}

            <Card containerStyle={{
                borderRadius: 10,
                padding: 0,
                overflow: 'hidden',
            }}>
                <Image
                    source={{ uri: user.image || 'https://via.placeholder.com/400' }} // Replace with actual image
                    style={{
                        width: width - 32, // Adjust width to be responsive
                        height: (width - 32) * 1, // Maintain aspect ratio
                    }}
                />
            </Card>

            {/* Product Info */}
            <View>
                <Text h4 style={{ textAlign: 'center', marginTop: 10 }}>Natural Moisturizing Cream</Text>
                <Text style={{ textAlign: 'center', color: '#6B7280' }}>Pure Essentials</Text>
                <View style={{ alignItems: 'center', marginVertical: 6 }}>
                    <Chip title="Skincare" type="outline" />
                </View>
            </View>

            {/* Health Score */}
            <Card containerStyle={{ backgroundColor: '#E8F8EC', borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 60, height: 60, backgroundColor: 'white', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text h3 style={{ color: '#28A745' }}>92</Text>
                    </View>
                    <View style={{ marginLeft: 15, flex: 1, flexDirection: 'column' }}>
                        <Text h4 style={{ color: '#28A745' }}>Excellent</Text>
                        <Text style={{ color: '#6B7280' }}>This product meets high health and safety standards</Text>
                    </View>
                </View>
            </Card>

            {/* Product Contents */}
            <Card containerStyle={{ borderRadius: 10 }}>
                <Text h4>Product Contents</Text>
                {[
                    { name: 'Whole Grain Oats', type: 'check-circle', color: 'green' },
                    { name: 'Cane Sugar', type: 'warning', color: '#FFA500' },
                    { name: 'Natural Flavors', type: 'warning', color: '#FFA500' },
                    { name: 'Salt', type: 'check-circle', color: 'green' },
                    { name: 'Vitamin E', type: 'check-circle', color: 'green' },
                ].map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <Icon name={item.type} type="material" color={item.color} />
                        <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                    </View>
                ))}
            </Card>

            {/* Pros & Cons */}
            <Card containerStyle={{ backgroundColor: '#E8F8EC', borderRadius: 10 }}>
                <Text h4>Pros</Text>
                {['All natural ingredients', 'No artificial fragrances', 'Dermatologically tested'].map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                        <Icon name="check-circle" type="material" color="green" />
                        <Text style={{ marginLeft: 8 }}>{item}</Text>
                    </View>
                ))}
            </Card>

            <Card containerStyle={{ backgroundColor: '#FDECEC', borderRadius: 10 }}>
                <Text h4>Cons</Text>
                {['Contains palm oil', 'Contains palm oil', 'Contains palm oil'].map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
                        <Icon name="cancel" type="material" color="red" />
                        <Text style={{ marginLeft: 8 }}>{item}</Text>
                    </View>
                ))}
            </Card>

            {/* Recent Scans */}
            <Card containerStyle={{ borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text h4>Recent Scans</Text>
                    <Text style={{ color: '#007AFF' }}>View All</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {[
                        { name: 'Almond Milk', score: 95 },
                        { name: 'Granola', score: 82 },
                        { name: 'Yogurt', score: 88 },
                        { name: 'Energy Bar', score: 78 },
                    ].map((item, index) => (
                        <View key={index} style={{ width: '48%', backgroundColor: '#F0F2F5', padding: 10, borderRadius: 10, marginTop: 10 }}>
                            <Image source={{ uri: user.image || 'https://via.placeholder.com/100' }} style={{ width: '100%', height: 80, borderRadius: 10 }} />
                            <Text style={{ marginTop: 5 }}>{item.name}</Text>
                            <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 5, alignSelf: 'flex-start' }}>
                                <Text style={{ color: '#28A745' }}>{item.score}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </Card>
        </ScrollView>
    );
}

export default ProductInfo;