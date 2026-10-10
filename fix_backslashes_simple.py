#!/usr/bin/env python3

# Read the current file
with open('src/components/hero.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Fix the specific problematic lines
for i, line in enumerate(lines):
    if i == 57:  # Line 58 (0-indexed)
        # Fix: className="object-cover\"
        if 'object-cover\\\\\\\\\\\\\\"' in line:
            lines[i] = line.replace('object-cover\\\\\\\\\\\\\\"', 'object-cover"')
    
    elif i == 60:  # Line 61 (0-indexed)
        # Fix: className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\"
        if 'absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\\\\\\\\\\\\\\"' in line:
            lines[i] = line.replace('absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\\\\\\\\\\\\\\"', 'absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"')

# Write back
with open('src/components/hero.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Fixed specific lines');
