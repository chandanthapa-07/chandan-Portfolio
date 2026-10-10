#!/usr/bin/env python3

# Read the current file
with open('src/components/hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the specific problematic lines by simple string replacement
# Line 58: className="object-cover\"
content = content.replace('className="object-cover\\\\\\\\\\\\\\"', 'className="object-cover"');

# Line 61: className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\"
content = content.replace('className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\\\\\\\\\\\\\\"', 'className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"');

# Write back
with open('src/components/hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed specific lines');
