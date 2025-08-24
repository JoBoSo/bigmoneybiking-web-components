from PIL import Image
import os

# --- CONFIG ---
ROOT_DIR = "./images/north-cascades/webp"  # Top-level folder containing subfolders with images
QUALITY = 60         # Compression level (0–100, lower = smaller file)

# --- Convert image to .webp and overwrite ---
def convert_to_webp(file_path):
    # file_size_bytes = os.path.getsize(file_path)
    # file_size_kb = file_size_bytes / 1024

    ext = os.path.splitext(file_path)[1].lower()
    if ext not in [".jpg", ".jpeg", ".png"]:
        return

    try:
        with Image.open(file_path) as img:
            img = img.convert("RGB")  # Ensures compatibility
            try:
                # need to remove first if want to update case
                os.remove(os.path.splitext(file_path)[0] + ".webp") 
            except:
                pass
            new_path = (os.path.splitext(file_path)[0] + ".webp").lower()
            # if file_size_kb > 1999:
            #     img.save(new_path, "webp", quality=30)
            # elif file_size_kb > 1499:
            #     img.save(new_path, "webp", quality=40)
            # elif file_size_kb > 999:
            #     img.save(new_path, "webp", quality=50)
            # else:
            #     img.save(new_path, "webp", quality=60)
            img.save(new_path, "webp", quality=QUALITY)
        os.remove(file_path)
        print(f"✔ Converted: {file_path} → {new_path}")
    except Exception as e:
        print(f"❌ Failed: {file_path} ({e})")

# --- Walk through all subfolders ---
for root, _, files in os.walk(ROOT_DIR):
    for filename in files:
        file_path = os.path.join(root, filename)
        convert_to_webp(file_path)

# for img in [
#     './images/body-bg-blur.jpg'
# ]:
#     convert_to_webp(img)
