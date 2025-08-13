export function getCopyrightYear(year: number) {
  return new Date().getFullYear() === year ? year : `${year} - ${new Date().getFullYear()}`;
}
