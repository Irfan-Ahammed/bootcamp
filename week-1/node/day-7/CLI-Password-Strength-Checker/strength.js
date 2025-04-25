#!/usr/bin/env node

const password = process.argv[2];

if (!password) {
  console.log("⚠️  Please provide a password: node strength.js <yourPassword>");
  process.exit(1);
}

console.log(`Checking password: ${password}\n`);

const lengthCheck = password.length >= 8;
const upperCheck = /[A-Z]/.test(password);
const numberCheck = /\d/.test(password);
const symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

console.log(`Length: ${lengthCheck ? "✅ OK" : "❌ Too short (min 8)"}`);
console.log(`Has uppercase: ${upperCheck ? "✅ Yes" : "❌ No"}`);
console.log(`Has number: ${numberCheck ? "✅ Yes" : "❌ No"}`);
console.log(`Has symbol: ${symbolCheck ? "✅ Yes" : "❌ No"}`);
