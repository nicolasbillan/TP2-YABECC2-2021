/**
 * Dado un string s que contiene solo los caracteres
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 *
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * TIP: Utilizando pilas y colas de arrays
 * TIP: Utilizar cadenas y replace
 */

/**
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  let last = s;
  let current = replacePairs(last);

  while (last !== current && current.length !== 0) {
    last = current;
    current = replacePairs(last);
  }

  return current.length === 0;
};

function replacePairs(s) {
  return s.replace(/{}/g, "").replace(/\[\]/g, "").replace(/\(\)/g, "");
}

// TESTS
console.log(isValid("()") === true);
console.log(isValid("([{}])") === true);
console.log(isValid("()[]{}") === true);
console.log(isValid("(}") === false);
console.log(isValid("([)]") === false);
console.log(isValid("{}{}(){[()]}") === true);
