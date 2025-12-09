import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const supportChannels = [
  { title: 'Call', detail: '1-800-555-1234 (Mon-Fri, 8a-8p EST)' },
  { title: 'Email', detail: 'support@growwelltax.com – expect a reply in 1h.' },
  { title: 'Chat', detail: 'In-app chat with your assigned tax advisor.' },
];

export default function SupportRequestScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Support & Requests</Text>
      <Text style={styles.subtitle}>Static summary of every help channel.</Text>

      <View style={styles.list}>
        {supportChannels.map(channel => (
          <View key={channel.title} style={styles.card}>
            <Text style={styles.cardTitle}>{channel.title}</Text>
            <Text style={styles.cardCopy}>{channel.detail}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f3f4f6',
    minHeight: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 20,
  },
  list: {
    flexDirection: 'column',
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 6,
  },
  cardCopy: {
    fontSize: 14,
    color: '#4b5563',
  },
});

