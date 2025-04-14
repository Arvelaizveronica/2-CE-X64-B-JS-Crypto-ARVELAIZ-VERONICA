function isValidLength(str, min = 10, max = 50) {
  return str.length >= min && str.length <= max;
}

function countWords(str) {
  let count = 0;
  let inWord = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch !== ' ' && ch !== '\t' && ch !== '\n') {
      if (!inWord) {
        inWord = true;
        count++;
      }
    } else {
      inWord = false;
    }
  }
  return count;
}

function countWordsBy(str, letter) {
  let count = 0;
  let found = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      found = true;
    }
    if (str[i] === ' ' || i === str.length - 1) {
      if (found) {
        count++;
        found = false;
      }
    }
  }
  if (found) count++; // last word
  return count;
}

function countVowels(str) {
  const vowels = 'aeiouAEIOUY';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

function countConsonants(str) {
  const vowels = 'aeiouAEIOUY';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (/[a-zA-Z]/.test(ch) && vowels.indexOf(ch) === -1) {
      count++;
    }
  }
  return count;
}

function removeChar(str, charToRemove) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== charToRemove) {
      result += str[i];
    }
  }
  return result;
}

function removeMany(str, chars) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let remove = false;
    for (let j = 0; j < chars.length; j++) {
      if (str[i] === chars[j]) {
        remove = true;
        break;
      }
    }
    if (!remove) {
      result += str[i];
    }
  }
  return result;
}

function crypto(str, key) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) + key);
  }
  return result;
}

function decrypt(str, key) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) - key);
  }
  return result;
}

// Bonus : Placeholder pour l'enigma
function enigma(message) {
  console.log("🔐 Enigma reçu :", message);
}
