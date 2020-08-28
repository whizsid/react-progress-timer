export default (time: number, percentage: number, format: string): string => {
  let modTime = Math.ceil(time / 1000);
  let unit = "second(s)";

  if (modTime > 12 * 30 * 24 * 60 * 60) {
    modTime = Math.ceil((modTime / 12) * 30 * 24 * 60 * 60);
    unit = "year(s)";
  } else if (modTime > 30 * 24 * 60 * 60) {
    modTime = Math.ceil((modTime / 30) * 24 * 60 * 60);
    unit = "month(s)";
  } else if (modTime > 24 * 60 * 60) {
    modTime = Math.ceil((modTime / 24) * 60 * 60);
    unit = "day(s)";
  } else if (modTime > 60 * 60) {
    modTime = Math.ceil((modTime / 60) * 60);
    unit = "hour(s)";
  } else if (modTime > 60) {
    modTime = Math.ceil(modTime / 60);
    unit = "minute(s)";
  }

  return format.replace("{value}", modTime.toString())
      .replace("{unit}", unit)
      .replace("{percentage}", Math.round(percentage).toString())
};
