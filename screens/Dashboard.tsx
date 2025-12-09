import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const summaryTiles = [
  { label: 'Expected Refund', value: '$3,540' },
  { label: 'Documents Uploaded', value: '12 files' },
  { label: 'Reviews Complete', value: '2 outstanding' },
];

const timelineItems = [
  { title: 'Completion Snapshot', description: 'Refund snapshot, alerts, and next steps appear here.' },
  { title: 'Document Progress', description: 'Shows uploaded PDFs, reviewer notes, and approvals.' },
  { title: 'Call-to-Actions', description: 'Buttons to upload new files, contact support, or download receipts.' },
];

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Static preview of the hero experience.</Text>

      <View style={styles.summaryRow}>
        {summaryTiles.map(tile => (
          <View key={tile.label} style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>{tile.label}</Text>
            <Text style={styles.summaryValue}>{tile.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.timeline}>
        {timelineItems.map(item => (
          <View key={item.title} style={styles.timelineCard}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardCopy}>{item.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafb',
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
    color: '#6b7280',
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 4,
    color: '#0f172a',
  },
  timeline: {
    flexDirection: 'column',
    rowGap: 12,
  },
  timelineCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#0f172a',
  },
  cardCopy: {
    fontSize: 14,
    color: '#4b5563',
  },
});

