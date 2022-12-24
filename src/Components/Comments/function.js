export function commentsDate(date) {
  const result = date.split("T");
  const time = result[1].split(".");
  const dateObj = {
    date: result[0],
    time: time[0],
  };
  return dateObj;
}
