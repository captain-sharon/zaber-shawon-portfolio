from PIL import Image
import os
import sys

def compress_image(image_path, output_path=None, max_width=1080):
    try:
        if not output_path:
            output_path = image_path
            
        img = Image.open(image_path)
        
        # Calculate new size
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
        # Save with optimization
        img.save(output_path, optimize=True, quality=85)
        print(f"Compressed {image_path} successfully.")
        
    except Exception as e:
        print(f"Error compressing {image_path}: {e}")

if __name__ == "__main__":
    target = r"public/images/profile.png"
    if os.path.exists(target):
        compress_image(target)
    else:
        print(f"File not found: {target}")
