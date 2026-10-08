export const getCurrentYear = async (): Promise<number> => {
  const currentYear = new Date().getFullYear();
  return currentYear;
}