import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const uploadSteps = [
  { title: 'Step 1', detail: 'Select files from the device or connect your cloud storage.' },
  { title: 'Step 2', detail: 'Preview documents, tag categories, and confirm metadata.' },
  { title: 'Step 3', detail: 'Watch the live upload progress and get a completion summary.' },
];

export default function DocumentUpload() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Document Upload</Text>
      <Text style={styles.subtitle}>Showcase the upload experience without backend hooks.</Text>

      <View style={styles.steps}>
        {uploadSteps.map(step => (
          <View key={step.title} style={styles.card}>
            <Text style={styles.cardTitle}>{step.title}</Text>
            <Text style={styles.cardCopy}>{step.detail}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 20,
  },
  steps: {
    flexDirection: 'column',
    gap: 12,
  },
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
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

