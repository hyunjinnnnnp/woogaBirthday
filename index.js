const TITLE = document.querySelector(".title"),
  BIRTHDAY = document.querySelector(".birthday");

function init() {
  const day = new Date();
  const woogibirth = new Date(1990, 4, 23);

  const day2 = day.getTime();
  const woogibirth2 = woogibirth.getTime();

  count = day2 - woogibirth2;
  count = Math.floor(count / (24 * 3600 * 1000));

  BIRTHDAY.innerHTML = `우가부가 태어난지 ${count}일 입니다`;
}
init();
