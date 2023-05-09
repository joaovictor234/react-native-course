export function getFormattedDate(date) {
  return date.toLocaleDateString('en-US')
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}