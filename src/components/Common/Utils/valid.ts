export const validUrl = (url: string) => {
  const regex = /https:\/\/github\.com\/(\w+)\/(\w+)/;
  return regex.test(url);
};
