import { z } from 'zod';
import {UserRole} from "../models/user.types.ts";

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

export const staffDetailsCreateUpdateValidation = z.object({
  userRole: z.nativeEnum(UserRole),
  salary: z.coerce.number().min(0, "Salary must be a positive number"),
  beginWorkingHour: z.string().min(1, "Begin Working Hour is required"),
  endWorkingHour: z.string().min(1, "End Working Hour is required"),
  isAvailable: z.boolean(),
}).refine(data => {
  const [beginHour, beginMinute] = data.beginWorkingHour.split(':').map(Number);
  const [endHour, endMinute] = data.endWorkingHour.split(':').map(Number);

  const beginTime = new Date();
  beginTime.setHours(beginHour, beginMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  return beginTime < endTime;
}, {
  message: "Begin Working Hour must be before End Working Hour",
  path: ["endWorkingHour"],
})

