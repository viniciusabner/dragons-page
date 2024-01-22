export const zeroPad = (value: number | string, places: number) =>
  String(value).padStart(places, '0')

// date formatting similar to "2023-11-26T10:00:00"
export const formatDateBr = (date: string) => {
  const splittedDate = date?.replace('T', '-').split('-')
  
  const [year, month, day] = splittedDate

  return `${zeroPad(day, 2)}/${zeroPad(month, 2)}/${year}`
}
