export const countDown = (countTime) => {
  //   const target = new Date("August 10, 2022 00:00:00");
  const target = new Date(countTime);
  const now = new Date();
  const gap = target.getTime() - now.getTime();

  const countDays = Math.floor(gap / (1000 * 60 * 60 * 24));
  const countHours = Math.floor(
    (gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const countMinutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const countSeconds = Math.floor((gap % (1000 * 60)) / 1000);

  return {
    countDays,
    countHours,
    countMinutes,
    countSeconds,
  };
};
