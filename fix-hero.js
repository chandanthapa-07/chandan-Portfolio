const fs = require('fs');
let content = fs.readFileSync('src/components/hero.tsx', 'utf8');

// Remove backslashes before closing quotes
content = content.replace(/className=\"([^\"]+)\\\\\\\"/g, 'className=\"$1\"');
content = content.replace(/text-center\\\\\\\\\">/g, 'text-center\">');

fs.writeFileSync('src/components/hero.tsx', content);
console.log('File fixed');
