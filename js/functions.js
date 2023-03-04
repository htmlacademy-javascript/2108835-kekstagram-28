const isMaxLenght = (string, maxLength) => string.lenght <= maxLength;

isMaxLenght('проверяемая строка', 20);

const isPalindrome = (string) => {
  string = string
    .replaceAll(' ', '')
    .toLowerCase();

  return string === string.split(' ').reverse().join('');
};
isPalindrome('Клоп Лёва вёл полк');


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого
// положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
const returnNumber = (string) => {
  if (typeof string === 'number') {
    string = String(string);
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

returnNumber('2023 год');

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};

myPadStart ('1', 2, '0');
