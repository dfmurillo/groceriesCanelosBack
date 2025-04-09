export const isValidDate = (dateString: unknown): boolean => {
  return !isNaN(Date.parse(dateString as string));
};
