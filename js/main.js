function getRandomNumber(min, max) {
  if ((min > max) || (min < 0)) {
    const text = 'Некорректный диапазон';
    // eslint-disable-next-line no-console
    console.warn(text);
    return -1;
  }
  if (min === max) {
    return min;
  }

  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomNumber(2, 5);

function checkStringLength(str, limit) {
  if (!str || typeof(str) !== 'string' || str.length === undefined) {
    // eslint-disable-next-line no-console
    console.warn('Некорректная строка');
    return false;
  }
  if (isNaN(limit) || limit < 0) {
    // eslint-disable-next-line no-console
    console.warn('Некорректное максимальное значение');
    return false;
  }
  return str.length <= limit;
}

checkStringLength('test', 2123);
