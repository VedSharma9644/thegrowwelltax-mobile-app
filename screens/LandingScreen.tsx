import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';

type LandingScreenProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

const featureHighlights = [
  { title: 'Intuitive dashboard', copy: 'Quick glance balances, refund progress, and alerts.' },
  { title: 'Step-by-step tax wizard', copy: 'Mock forms walk users through each deduction category.' },
  { title: 'Document snapshots', copy: 'Summaries of uploaded files, approvals, and reminders.' },
];

export default function LandingScreen({ navigation }: LandingScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>The GrowWell Tax Experience</Text>
      <Text style={styles.subtitle}>
        A polished UI walkthrough that highlights the screens we plan to ship—no back-end logic required.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Choose your tour</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonText}>View Dashboard</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('TaxWizard')}>
          <Text style={styles.buttonText}>See Tax Wizard</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Support')}>
          <Text style={styles.buttonText}>Support Center</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Demo highlights</Text>
        {featureHighlights.map((feature) => (
          <View key={feature.title} style={styles.detailRow}>
            <Text style={styles.detailTitle}>{feature.title}</Text>
            <Text style={styles.detailCopy}>{feature.copy}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>This preview ships with static data to keep the focus on visual polish.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 64,
    backgroundColor: '#f6f8fb',
    minHeight: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#101828',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#0f172a',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    paddingVertical: 14,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  detailRow: {
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },
  detailCopy: {
    fontSize: 13,
    color: '#475467',
  },
  footer: {
    paddingTop: 16,
  },
  footerText: {
    color: '#94a3b8',
    fontSize: 13,
  },
});

