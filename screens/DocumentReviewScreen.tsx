import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const documentStages = [
  { title: 'Upload', detail: 'Step 1: Browse or drag documents into the secure upload modal.' },
  { title: 'Review', detail: 'Step 2: Reviewers inspect documents, highlight missing details, and tag them.' },
  { title: 'Approval', detail: 'Step 3: Documents are marked as approved once they meet compliance checks.' },
];

export default function DocumentReviewScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Document Review</Text>
      <Text style={styles.subtitle}>Static walkthrough of document verification.</Text>

      <View style={styles.timeline}>
        {documentStages.map(stage => (
          <View key={stage.title} style={styles.card}>
            <Text style={styles.cardTitle}>{stage.title}</Text>
            <Text style={styles.cardCopy}>{stage.detail}</Text>
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
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 20,
  },
  timeline: {
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

