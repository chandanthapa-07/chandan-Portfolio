#!/usr/bin/env python3

# Read the current file
with open('src/components/hero.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Fix the specific problematic lines
# Line 58: className="object-cover\"
lines[57] = lines[57].replace(/\\\\\\\\\\\\\\\"$/, '\"');

# Line 61: className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10\"
lines[60] = lines[60].replace(/\\\\\\\\\\\\\\\"$/, '\"');

# Line 62: </div>
lines[61] = '          </div>\n';

# Line 63: </motion.div>
lines[62] = '        </motion.div>\n';

# Write back
with open('src/components/hero.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Fixed specific lines');
