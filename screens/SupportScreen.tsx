import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const topics = ['Live chat placeholder', 'Document help', 'Payment questions'];

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support Center</Text>
      <Text style={styles.subtitle}>Static copy that shows the planned help experience.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Need guidance?</Text>
        {topics.map((topic) => (
          <Text key={topic} style={styles.listItem}>
            {`\u2022 ${topic}`}
          </Text>
        ))}
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.contactLabel}>Office hours:</Text>
        <Text style={styles.contactValue}>Mon - Fri, 8a - 6p ET</Text>
      </View>
      <View style={styles.contactRow}>
        <Text style={styles.contactLabel}>Phone:</Text>
        <Text style={styles.contactValue}>1 (800) DEMO-TAX</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtitle: {
    color: '#475467',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
  },
  cardTitle: {
    fontWeight: '600',
    marginBottom: 8,
    color: '#1d4ed8',
  },
  listItem: {
    color: '#1d4ed8',
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  contactLabel: {
    fontWeight: '600',
    color: '#0f172a',
  },
  contactValue: {
    color: '#334155',
  },
});

