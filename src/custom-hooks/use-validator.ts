import { useEffect, useState } from 'react';

const RegxValidator = {
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/,
};

const useLoginFormValidator = (item: any): any[] => {
  console.log({ item });
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({});

  const updateError = (errorDes: any, value?: string) => {
    if (value !== '') {
      setError(errorDes);
    }
  };

  useEffect(() => {
    let isValidState = true;
    const keys = Object.keys(item);

    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i];
      const currentValue = item[keys[i]];

      if (currentKey == 'username') {
        if (!RegxValidator.email.test(currentValue)) {
          isValidState = false;
          updateError({ username: 'invalid email' }, currentValue);
          break;
        } else {
          updateError({ username: null });
        }
      }

      if (currentKey == 'password') {
        if (!RegxValidator.password.test(currentValue)) {
          isValidState = false;
          updateError({ password: 'invalid password' }, currentValue);
          break;
        } else {
          updateError({ password: null });
        }
      }
    }

    if (isValidState) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [item]);

  return [isValid, error];
};

export { useLoginFormValidator };
