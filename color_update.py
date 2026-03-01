import os
import re

src_dir = r"C:\Users\mrads\.gemini\antigravity\karmaya-clinic\src"

color_map = {
    'emerald': 'blue',
    'teal': 'cyan',
    'violet': 'blue',
    'purple': 'indigo',
    'amber': 'slate',
    'orange': 'slate',
    'rose': 'slate',
    'pink': 'slate',
    'green': 'blue',
    'fuchsia': 'indigo'
}

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            for old_color, new_color in color_map.items():
                new_content = re.sub(r'\b' + old_color + r'-(\d{2,3})\b', new_color + r'-\1', new_content)

            if new_content != content:
                print(f"Updated {file}")
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
