const isStringMaxLenght = (string, maxLength) => string.lenght <= maxLength;

isStringMaxLenght ('проверяемая строка', 20);

const isPalindrome = (text) => {
  const rawStr = text
    .replaceAll(' ', '')
    .toLowerCase();

  return rawStr === text.split(' ').reverse().join('');
};

isPalindrome('Клоп Лёва вёл полк');

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого
// положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN
const returnNumber = (text) => {
  const pureStr = text;
  if (pureStr === 'number') {
    text = pureStr;
  }

  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (!Number.isNaN(parseInt(text.at(i), 10))) {
      result += text.at(i);
    }
  }
  return parseInt(result, 10);
};

returnNumber('2023 год');

const myPadStart = (text, minLength, pad) => {
  const actualPad = minLength - text.length;
  if (actualPad <= 0) {
    return text;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + text;
};

myPadStart ('1', 2, '0');
