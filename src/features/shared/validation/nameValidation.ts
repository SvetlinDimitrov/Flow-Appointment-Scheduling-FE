const nameValidation = {
  required: 'This field is required',
  minLength: {
    value: 3,
    message: 'Must be at least 3 characters long'
  },
  maxLength: {
    value: 255,
    message: 'Must not exceed 255 characters'
  }
};

export default nameValidation;