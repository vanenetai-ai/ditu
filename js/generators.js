// Generators for various identity fields

// Luhn algorithm for credit card validation
function luhnCheck(num) {
  const digits = String(num).split('').reverse().map(Number);
  const sum = digits.reduce((acc, d, i) => {
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    return acc + d;
  }, 0);
  return sum % 10 === 0;
}

function generateLuhn(prefix, length) {
  let num = String(prefix);
  while (num.length < length - 1) {
    num += rand(0, 9);
  }
  // Calculate check digit
  let sum = 0;
  const digits = num.split('').reverse().map(Number);
  for (let i = 0; i < digits.length; i++) {
    let d = digits[i];
    if (i % 2 === 0) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  const checkDigit = (10 - (sum % 10)) % 10;
  return num + checkDigit;
}

function generateCreditCard() {
  const types = [
    { type: 'Visa', prefix: '4', length: 16 },
    { type: 'MasterCard', prefix: String(rand(51, 55)), length: 16 },
    { type: 'American Express', prefix: ['34', '37'][rand(0, 1)], length: 15 }
  ];
  const card = types[rand(0, types.length - 1)];
  const number = generateLuhn(card.prefix, card.length);
  const month = String(rand(1, 12)).padStart(2, '0');
  const year = new Date().getFullYear() + rand(1, 7);
  const cvv = card.type === 'American Express' ? String(rand(1000, 9999)) : String(rand(100, 999));
  return {
    type: card.type,
    number: number,
    cvv: cvv,
    expiry: `${month}/${year}`
  };
}

function generateEmail(firstName, lastName) {
  const cleanFirst = String(firstName).toLowerCase().replace(/[^a-z]/g, '') || 'user';
  const cleanLast = String(lastName).toLowerCase().replace(/[^a-z]/g, '') || 'test';
  const domain = pickRandom(EMAIL_DOMAINS);
  const patterns = [
    () => randomString(rand(8, 12)) + '@' + domain,
    () => cleanFirst + '.' + cleanLast + rand(10, 99) + '@' + domain,
    () => cleanFirst + rand(100, 999) + '@' + domain,
    () => randomString(rand(6, 10)) + '@' + domain,
  ];
  return patterns[rand(0, patterns.length - 1)]();
}

function generatePassword() {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  const length = rand(10, 14);
  for (let i = 0; i < length; i++) {
    password += chars[rand(0, chars.length - 1)];
  }
  return password;
}

function generateUsername() {
  const adjectives = ['swift', 'brave', 'cool', 'dark', 'epic', 'fast', 'gold', 'iron', 'keen', 'lean',
    'mighty', 'noble', 'ocean', 'peak', 'quiet', 'rapid', 'sharp', 'stern', 'ultra', 'vivid'];
  const nouns = ['hawk', 'wolf', 'fox', 'bear', 'lion', 'tiger', 'eagle', 'shark', 'storm', 'fire',
    'stone', 'rider', 'maker', 'seeker', 'hunter', 'runner', 'walker', 'shaken', 'comer', 'bound'];
  return adjectives[rand(0, adjectives.length - 1)] + nouns[rand(0, nouns.length - 1)];
}

function randomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[rand(0, chars.length - 1)];
  }
  return result;
}

function generateGUID() {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

function generateHeight() {
  const cm = rand(150, 195);
  const totalInches = Math.round(cm / 2.54);
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return { display: `${feet}' ${inches}" (${cm}cm)`, cm, feet, inches };
}

function generateWeight() {
  const kg = rand(50, 100);
  const lbs = (kg * 2.20462).toFixed(1);
  return { display: `${lbs}lbs (${kg}kg)`, kg, lbs };
}

function generateBirthday() {
  const month = rand(1, 12);
  const day = rand(1, 28);
  const year = rand(1960, 2003);
  return `${month}/${day}/${year}`;
}

function generateWebsite() {
  const ext = ['.com', '.net', '.org', '.io'][rand(0, 3)];
  return randomString(rand(6, 12)) + ext;
}

function generateSecurityAnswer() {
  const words = ['newcomer', 'fetid', 'sunset', 'yellow', 'kitten', 'harbor', 'ancient', 'bridge',
    'silver', 'winter', 'forest', 'castle', 'dragon', 'thunder', 'whisper', 'golden', 'river', 'shadow',
    'crystal', 'falcon', 'garden', 'marble', 'noble', 'ocean', 'phantom'];
  return words[rand(0, words.length - 1)] + words[rand(0, words.length - 1)];
}

function formatSalary(country, amount) {
  const c = COUNTRIES[country];
  const currency = c ? c.currency : '$';
  return `${currency}${amount.toLocaleString()}`;
}
