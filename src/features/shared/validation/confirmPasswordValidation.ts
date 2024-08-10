const confirmPasswordValidation = (password: string) => ({
  required: 'Confirm Password is required',
  validate: (value: string) => value === password || 'Passwords do not match'
});

export default confirmPasswordValidation;