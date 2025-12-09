import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: '#0E502B',
  },
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6c757d',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#6c757d',
    backgroundColor: '#fff',
  },
});

export const Button = ({
  children,
  variant,
  style,
  ...props
}) => {
  const variantStyle = variant === 'outline' ? styles.outline : variant === 'secondary' ? styles.secondary : styles.primary;
  return (
    <Pressable style={[styles.base, variantStyle, style]} {...props}>
      {children}
    </Pressable>
  );
};

