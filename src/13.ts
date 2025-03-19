// Generate a random timestamp between two dates
function getRandomTimestamp(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  return new Date(start + Math.random() * (end - start)).toISOString().substr(11, 8);
}
