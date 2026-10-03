import os
import glob
from PIL import Image

image_dir = r"d:\Dairy-Queen\public\Images"
max_width = 600

count = 0
for filepath in glob.glob(os.path.join(image_dir, "*.webp")):
    with Image.open(filepath) as img:
        width, height = img.size
        
        # Only resize if larger than 600px
        if width > max_width:
            new_height = int(max_width * height / width)
            resized_img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save it back as webp, overriding the original
            resized_img.save(filepath, "webp", quality=82)
            count += 1
            print(f"Resized {os.path.basename(filepath)} from {width}x{height} to {max_width}x{new_height}")

print(f"\nDone. Resized {count} images.")
