export function internazilation(_date: string, locale = "pt-BR"): string {
  const date: Date = new Date(_date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: 'UTC',
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
}
