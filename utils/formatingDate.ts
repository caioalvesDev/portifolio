export function internazilation(_date: string, locale = "default"): string {
  const date: Date = new Date(_date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
}
