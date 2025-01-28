import { Header, Icon, useTheme } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

function HeaderTitle({navigation}) {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();
    return (
        <Header
        containerStyle={styles.container}
            leftComponent={() => {
                return (
                    <View style={{ width: (width - 100)}}>
                        <Text style={styles.headerTitle}>AI Product Scanner</Text>
                    </View>
                )
            }}
            rightComponent={() => {
                return (
                    <Icon name="setting" type="antdesign" onPress={() => navigation.navigate("Settings")} color={theme.colors.primary} size={24} />
                )
            }}
            backgroundColor={"#fff"}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    headerTitle: {
        fontSize: 20
    }
})
export default HeaderTitle;