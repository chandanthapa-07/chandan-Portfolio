#!/usr/bin/env python3

# Read the current file
with open('src/components/hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix all instances of backslash-quote
content = content.replace(/\\\\\\\\\\\\\\\"/g, '\"');
content = content.replace(/\\\\\\\\\\\\\\\\\\\\]/g, ']');

# Write back
with open('src/components/hero.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed backslash issues');
