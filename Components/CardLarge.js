import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text, Title, Subheading  } from "react-native-paper";
import { BlurView } from "@react-native-community/blur";

const CardLarge = () => {
    return (
        <View style={styles.container}>
          <BlurView
            style={styles.blurContainer}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          />
          <Card style={styles.card}>
            <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Content>
              <Text style={styles.title}>Card title</Text>
              <Text style={styles.content}>Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cover} />
            <Card.Actions>
              <Button style={styles.button}>Cancel</Button>
              <Button style={styles.button}>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    blurContainer: {
        ...StyleSheet.absoluteFill,
    },
    card: {
        margin: 10,
        borderRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
        marginBottom: 10,
    },
    cover: {
        height: 200,
    },
    button: {
        marginRight: 10,
    },
});

export default CardLarge;
