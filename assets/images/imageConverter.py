from PIL import Image
import os

# Allow processing of large images
Image.MAX_IMAGE_PIXELS = None

# Folder containing images
folder = "./assets/images/"
for filename in os.listdir(folder):
    if filename.endswith(".jpeg") or filename.endswith(".jpg"):
        img = Image.open(os.path.join(folder, filename))
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        img.save(os.path.join(folder, webp_filename), "webp")
        print(f"Converted {filename} to {webp_filename}")