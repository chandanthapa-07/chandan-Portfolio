// Remove all backslashes at the end of lines in the hero.tsx file
const fs = require('fs');

let content = fs.readFileSync('src/components/hero.tsx', 'utf8');

// Replace all instances of backslash-quote followed by end of line
content = content.replace(/\\\\\\"/g, '\"');

// Write back
fs.writeFileSync('src/components/hero.tsx', content);

console.log('Removed all trailing backslashes from hero.tsx');
