import React from 'react';
import { View } from 'react-native';
import { Card, Icon, Text } from '@rneui/themed';

const FeatureCard = ({ item, theme, containerStyle, titleStyle, subtitleStyle, iconColor }) => (
  <View style={{ width: '50%' }}>
    <Card containerStyle={containerStyle}>
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <Icon name={item.icon} type="font-awesome" size={30} color={iconColor || theme.colors.primary} />
        <Text style={titleStyle}>{item.title}</Text>
        <Text style={subtitleStyle}>{item.subtitle}</Text>
      </View>
    </Card>
  </View>
);

export default FeatureCard;