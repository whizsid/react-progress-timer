export default (
  milliseconds: number,
  percentage: number,
  format: string
): string => {
  const seconds = Math.ceil(milliseconds / 1000);
  let unit = "second(s)";
  let timeValue = seconds;

  if (seconds > 12 * 30 * 24 * 60 * 60) {
    timeValue = timeValue / (12 * 30 * 24 * 60 * 60);
    unit = "year(s)";
  } else if (seconds > 30 * 24 * 60 * 60) {
    timeValue = timeValue / (30 * 24 * 60 * 60);
    unit = "month(s)";
  } else if (seconds > 24 * 60 * 60) {
    timeValue = timeValue / (24 * 60 * 60);
    unit = "day(s)";
  } else if (seconds > 60 * 60) {
    timeValue = timeValue / (60 * 60);
    unit = "hour(s)";
  } else if (seconds > 60) {
    timeValue = timeValue / 60;
    unit = "minute(s)";
  }

  return format
    .replace("{value}", Math.ceil(timeValue).toString())
    .replace("{unit}", unit)
    .replace("{percentage}", Math.round(percentage).toString());
};
