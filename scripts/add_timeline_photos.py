import os
import sqlite3

def get_all_file_paths(directory):
    """
    Recursively gets a list of all file paths within a given directory
    and its subdirectories.

    Args:
        directory (str): The path to the directory to search.

    Returns:
        list: A list containing the absolute paths of all files found.
    """
    file_paths = []
    for root, _, files in os.walk(directory):
        for file in files:
            path = os.path.join(root, file).replace("\\", "/")
            subpath = path.split('/', 1)[1]
            file_paths.append(subpath)
    return file_paths

folder_path = 'images/north-cascades/webp/day_8'
all_files = get_all_file_paths(folder_path)
con = sqlite3.connect("database.sqlite3")
cur = con.cursor()
image_ord = 1
for path in all_files:
    timeline_day_id = 110
    trip_id = 'north-cascades'
    day = 8
    image = path
    # print(path)
    image_order = image_ord
    image_ord += 1
    print(f"""
                insert into timeline_photo (timeline_day_id, trip_id, day, image, image_order) 
                values ({timeline_day_id}, '{trip_id}', {day}, '{image}', {image_order})
                """)
    cur.execute(f"""
                insert into timeline_photo (timeline_day_id, trip_id, day, image, caption, image_order) 
                values ({timeline_day_id}, '{trip_id}', {day}, '{image}', '', {image_order})
                """)
    con.commit()