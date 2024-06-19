import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { Image, StyleSheet, Platform, ScrollView, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="on-drag"
      contentContainerStyle={styles.container}>
        {items.map((item, index) => (
          <ThemedView key={index} style={styles.item}>
            <ThemedText style={styles.text}>{item}</ThemedText>
          </ThemedView>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  item: {
    backgroundColor: '#fed099',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});
