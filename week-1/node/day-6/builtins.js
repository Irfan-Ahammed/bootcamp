// 1️⃣ FILE SYSTEM (fs) MODULE
const fs = require('fs');

// Write to a file (creates if not exists)
fs.writeFileSync('message.txt', 'Hello Irfan! Node.js is awesome.');
// ✅ Why? Used to save data like logs, user info, configs, etc.


// Read the file we just wrote
const content = fs.readFileSync('message.txt', 'utf-8');
console.log('📂 File Content:', content);
// ✅ Why? Useful for reading config files, data files, etc.


// 2️⃣ PATH MODULE
const path = require('path');

// Join paths safely for all operating systems
const fullPath = path.join(__dirname, 'message.txt');
console.log('📁 Full Path:', fullPath);
// ✅ Why? Handles directory paths correctly on all OS (Windows, Linux, etc.)


// Get file extension
const ext = path.extname(fullPath);
console.log('📌 File Extension:', ext); // .txt
// ✅ Why? Helpful to check file types, e.g., .js, .png, .json


// 3️⃣ OS MODULE
const os = require('os');

console.log('💻 Hostname:', os.hostname());
console.log('🧠 Free Memory:', os.freemem());
console.log('🧱 Total Memory:', os.totalmem());
console.log('🧩 Platform:', os.platform());
console.log('🧬 CPU Info:', os.cpus()[0]);
// ✅ Why? Useful for monitoring system status or customizing app behavior for a specific OS


// 4️⃣ EVENTS MODULE
const EventEmitter = require('events');

// Create a new custom event emitter
const emitter = new EventEmitter();

// Define a custom event called 'greet'
emitter.on('greet', (name) => {
    console.log(`👋 Hello, ${name}! Welcome to the event world.`);
});

// Emit the 'greet' event
emitter.emit('greet', 'Irfan');
// ✅ Why? Powerful for building real-time systems (chat, notifications, etc.)

