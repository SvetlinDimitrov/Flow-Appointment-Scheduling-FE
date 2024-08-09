const passwordValidation = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters long'
  },
  maxLength: {
    value: 30,
    message: 'Password must be at most 30 characters long'
  },
  validate: {
    hasUpperCase: (value: string) => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
    hasLowerCase: (value: string) => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
    hasDigit: (value: string) => /\d/.test(value) || 'Password must contain at least one digit',
    hasSpecialChar: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'Password must contain at least one special character',
    noWhitespace: (value: string) => /^\S*$/.test(value) || 'Password must not contain whitespace'
  }
};

export default passwordValidation;