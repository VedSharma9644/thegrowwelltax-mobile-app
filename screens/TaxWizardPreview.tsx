import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const wizardSteps = [
  'Personal info',
  'Income & deductions',
  'Document upload',
  'Review & submit',
];

export default function TaxWizardPreview() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tax Wizard Flow</Text>
      <Text style={styles.subtitle}>Series of screens planned for guided filing.</Text>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: '64%' }]} />
      </View>

      {wizardSteps.map((step, index) => (
        <View key={step} style={styles.stepRow}>
          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>{index + 1}</Text>
          </View>
          <View style={styles.stepCopy}>
            <Text style={styles.stepTitle}>{step}</Text>
            <Text style={styles.stepSubtitle}>Static preview of inputs + guidance copy.</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eef2ff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#312e81',
    marginBottom: 4,
  },
  subtitle: {
    color: '#4c1d95',
    marginBottom: 20,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#c7d2fe',
    borderRadius: 999,
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#312e81',
    borderRadius: 999,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 2,
  },
  stepNumber: {
    fontWeight: '700',
    color: '#312e81',
  },
  stepCopy: {
    flex: 1,
  },
  stepTitle: {
    fontWeight: '600',
    color: '#312e81',
  },
  stepSubtitle: {
    color: '#4c1d95',
    fontSize: 13,
  },
});

