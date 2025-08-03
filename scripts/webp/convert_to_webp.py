from PIL import Image
import os

# --- CONFIG ---
ROOT_DIR = "./images/body-bg.jpg"  # Top-level folder containing subfolders with images
QUALITY = 60         # Compression level (0–100, lower = smaller file)

# --- Convert image to .webp and overwrite ---
def convert_to_webp(file_path):
    file_size_bytes = os.path.getsize(file_path)
    file_size_kb = file_size_bytes / 1024

    ext = os.path.splitext(file_path)[1].lower()
    if ext not in [".jpg", ".jpeg", ".png"]:
        return

    try:
        with Image.open(file_path) as img:
            img = img.convert("RGB")  # Ensures compatibility
            os.remove(os.path.splitext(file_path)[0] + ".webp") # need to remove first if want to update case
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
        # os.remove(file_path)
        print(f"✔ Converted: {file_path} → {new_path}")
    except Exception as e:
        print(f"❌ Failed: {file_path} ({e})")

# --- Walk through all subfolders ---
# for root, _, files in os.walk(ROOT_DIR):
#     for filename in files:
#         file_path = os.path.join(root, filename)
#         convert_to_webp(file_path)

for img in [
    "./images/body-bg.jpg",
    './images/thompson-nicola/th6b.jpg',
    './images/north-cascades/IMG_5239.JPEG',
    './images/lillooet/IMG_4803.jpeg',
    './images/french-beach/IMG_4473.jpeg',
    './images/gabriola/IMG_3659.jpeg',
    './images/san-juan-circle/IMG_3465.jpeg',
    './images/lomas-lake/IMG_2553.jpeg',
    './images/sunshine-coast/IMG_2129.jpeg',
    './images/olympic/IMG_1675.jpeg',
    './images/pender-mayne-saturna/IMG_1467.jpeg',
    './images/south-vi/IMG_0845.jpeg',
    './images/saltspring/IMG_0626.jpeg',
    './images/galiano/IMG_0180.JPEG',
    './images/quebec/IMG_4209.jpg',
    './images/mtrl-sherbrooke/IMG_2775.jpg',
    './images/ptit-train/IMG_2538.jpg',
    './images/haida-gwaii/IMG_0857.jpg',
    './images/nass-valley/IMG_212.jpg',
    './images/babine-lake/IMG_9538.jpg',
    './images/downie-creek/IMG_8505.jpg',
    './images/begbie-falls/IMG_8374.jpg',
    './images/quadra-cortes/IMG_6877.jpeg',
    './images/comox-lake/IMG_6328.jpg',
    './images/texada/IMG_5873.jpg',
    './images/brewster-lake/IMG_5603.jpg',
    './images/san-josef-bay/IMG_5333.jpg',
    './images/nanaimo-courtenay/IMG_5149.jpg',
    './images/to-mtrl/IMG_4238.jpg',
    './images/sprauge-bay/IMG_6827.JPEG',
    './images/perley-rock/IMG_6632.JPEG',
    './images/jade-lakes/IMG_6258.JPEG',
    './images/miller-lake/IMG_6181.JPEG',
    './images/heather-mountain/IMG_3182.jpeg',
    './images/jocelyn-hill/IMG_2958.jpeg',
    './images/montagne-noire/IMG_2361.jpg',
    './images/mont-nixon/IMG_2325.jpg',
    './images/six-glaciers/IMG_2117.jpg',
    './images/grotto-mtn/IMG_1305.jpg',
    './images/mt-temple/IMG_1215.jpg',
    './images/bourgeau/IMG_1177.jpg',
    './images/cory-pass/IMG_1124.jpg',
    './images/ha-ling/IMG_1071.jpg',
    './images/jasper/IMG_0990.jpg',
    './images/viking-ridge/IMG_0926.jpg',
    './images/seaton-ridge/IMG_0727.jpg',
    './images/maroon-mtn/IMG_0691.jpg',
    './images/silvern-lake/IMG_0542.jpg',
    './images/silver-king/IMG_0470.jpg',
    './images/gunsight/IMG_0370.jpg',
    './images/oliver-creek/IMG_0263.jpg',
    './images/mt-revelstoke/IMG_8845.jpg',
    './images/mccrae-peak/IMG_8307.jpg',
    './images/mt-cartier/IMG_8090.jpg',
    './images/mt-begbie/IMG_7959.jpg',
    './images/tin-hat/IMG_7721.jpg',
    './images/mt-becher/IMG_7569.jpg',
    './images/phillips-ridge/IMG_7102.jpg',
    './images/mt-albert-edward/IMG_6705.jpg',
    './images/algonquin/IMG_4464.jpg'
]:
    convert_to_webp(img)
