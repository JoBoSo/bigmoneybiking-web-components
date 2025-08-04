import sqlite3

# --- CONFIG ---
DB_PATH = "database.sqlite3"
TABLE_NAME = "timeline_photo"
COLUMN_NAME = "image"

# --- Connect to the DB ---
conn = sqlite3.connect(DB_PATH)
cur = conn.cursor()

# --- Update .jpg, .jpeg, and .png extensions to .webp ---
cur.execute(f"""
    UPDATE {TABLE_NAME}
    SET {COLUMN_NAME} = 
        REPLACE(
            REPLACE(
                REPLACE(LOWER({COLUMN_NAME}), '.jpeg', '.webp'),
                '.jpg', '.webp'
            ),
            '.png', '.webp'
        )
    WHERE (LOWER({COLUMN_NAME}) LIKE '%.jpg'
       OR LOWER({COLUMN_NAME}) LIKE '%.jpeg'
       OR LOWER({COLUMN_NAME}) LIKE '%.png')
       and trip_id = 'san-juan-circle'
""")

# --- Commit and close ---
conn.commit()
conn.close()

print("✅ All .jpg/.jpeg/.png paths updated to .webp")
