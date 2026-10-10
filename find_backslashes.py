#!/usr/bin/env python3

# Read the current file
with open('src/components/hero.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Simple search for backslash-quote combinations
if '\\\\\\\\\\\\\\"' in content:
    print('Found backslash-quote combinations in the file')
    # Show lines containing the pattern
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if '\\\\\\\\\\\\\\"' in line:
            print(f'Line {i + 1}: {line.strip()}')
else:
    print('No backslash-quote combinations found')
