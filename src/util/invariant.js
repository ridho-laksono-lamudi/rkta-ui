export default (condition, message) => {
  // eslint-disable-next-line no-console
  if (!condition) console.warn(message);
};
