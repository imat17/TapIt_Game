export const validateContent = (text) => {
    if (!text) {
      return "Can't be blank";
    }
  };
  
  export const validateLength = (text) => {
    if (text && text.length < 4) {
      return 'Must be 6 characters or more.';
    }
  };