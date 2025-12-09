import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import Dashboard from '../screens/Dashboard';
import DocumentReviewScreen from '../screens/DocumentReviewScreen';
import DocumentUpload from '../screens/DocumentUpload';
import SupportRequestScreen from '../screens/SupportRequestScreen';
import TaxWizard from '../screens/TaxWizard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="TaxWizard" component={TaxWizard} />
        <Stack.Screen name="DocumentReview" component={DocumentReviewScreen} />
        <Stack.Screen name="DocumentUpload" component={DocumentUpload} />
        <Stack.Screen name="SupportRequest" component={SupportRequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

