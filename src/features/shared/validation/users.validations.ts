import { z } from 'zod';

export const passwordValidation = z.string()
  .min(8, 'Password must be at least 8 characters long')
  .max(30, 'Password must be at most 30 characters long')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/\d/, 'Password must contain at least one digit')
  .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
  .refine(value => /^\S*$/.test(value), 'Password must not contain whitespace');

export const nameValidation = z.string()
  .min(3, 'Must be at least 3 characters long')
  .max(255, 'Must not exceed 255 characters');

export const emailValidation = z.string()
  .email('Invalid email address');

