export const AgeCount = (birthDay: string) => {
  const datPart = birthDay.split("-");
  const year = datPart[0];
  const month = datPart[1];
  const day = datPart[2];
  const nowDay = new Date();
  let age = nowDay.getFullYear() - parseInt(year);
  console.log(nowDay.getMonth());
  if (
    parseInt(month) < nowDay.getMonth() ||
    (parseInt(month) === nowDay.getMonth() + 1 &&
      parseInt(day) < nowDay.getDate())
  ) {
    age--;
  }
  if (age < 0) {
    return 0;
  }
  return age;
};
