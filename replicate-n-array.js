const replicate = (times, number) => {
  if (times <= 0) return [];
  if (times === 1) return [number];
  return [number, ...replicate(times - 1, number)];
};

console.log(replicate(3, 5));
