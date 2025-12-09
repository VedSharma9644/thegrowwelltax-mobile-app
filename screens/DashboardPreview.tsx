import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const summaryTiles = [
  { label: 'Refund estimate', value: '$4,520' },
  { label: 'Documents pending', value: '3' },
  { label: 'Wizard progress', value: '62%' },
];

export default function DashboardPreview() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Snapshot</Text>
      <Text style={styles.subtitle}>Every tile uses mock data so you can showcase layout coherence.</Text>

      <View style={styles.grid}>
        {summaryTiles.map((tile) => (
          <View key={tile.label} style={styles.tile}>
            <Text style={styles.tileValue}>{tile.value}</Text>
            <Text style={styles.tileLabel}>{tile.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        <View style={[styles.section, styles.sectionPrimary]}>
          <Text style={styles.sectionLabel}>Quick Actions</Text>
          {['Upload docs', 'Review summary', 'Download report'].map((action) => (
            <Text key={action} style={styles.actionText}>
              {`\u2022 ${action}`}
            </Text>
          ))}
        </View>
        <View style={[styles.section, styles.sectionSecondary]}>
          <Text style={styles.sectionLabel}>Notifications</Text>
          <Text style={styles.notification}>New IRS message placeholder</Text>
          <Text style={styles.notification}>Reminder to verify W-2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f6f8fb',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#101828',
    marginBottom: 4,
  },
  subtitle: {
    color: '#475467',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tile: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  tileValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  tileLabel: {
    color: '#475467',
    marginTop: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  sectionPrimary: {
    marginRight: 12,
  },
  sectionSecondary: {
    marginLeft: 12,
  },
  sectionLabel: {
    fontWeight: '600',
    marginBottom: 10,
    color: '#0f172a',
  },
  actionText: {
    color: '#312e81',
    marginBottom: 6,
  },
  notification: {
    color: '#475467',
    marginBottom: 4,
  },
});

