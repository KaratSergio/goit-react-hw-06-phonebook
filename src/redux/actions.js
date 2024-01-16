export const REGISTER = 'REGISTER';
export const UNREGISTER = 'UNREGISTER';

export const register = (key) => ({
  type: REGISTER,
  key,
});

export const unregister = (key) => ({
  type: UNREGISTER,
  key,
});
