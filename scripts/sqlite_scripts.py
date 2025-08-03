import sqlite3

con = sqlite3.connect("database.sqlite3")
cur = con.cursor()

# res = cur.execute("""
#   create table timeline_photos2 as
#   select p.id as photo_id, d.id as timeline_day_id, d.trip_name as trip_id, d.day as day, p.image as image, p.caption as caption
#   from timeline_photos as p
#   left join (
#     select id, trip_name, day
#     from timeline_days
#   ) as d on p.trip_day_id = d.id
# """)

# res = cur.execute("""
#   ALTER TABLE maps RENAME TO map
# """)

# res = cur.execute("""
# CREATE TABLE timeline_photo (
#   photo_id integer,
#   timeline_day_id integer,
#   trip_id text,
#   day integer,
#   image text,
#   caption text,
#   primary key (photo_id),
#   FOREIGN KEY (timeline_day_id) REFERENCES timeline_days(id)
# )
# """)

# cur.execute("drop table timeline_photos_og")

# cur.execute("ALTER TABLE timeline_photo ADD COLUMN image_order INTEGER")

# cur.execute("""
# UPDATE timeline_photo
# SET image_order = (
#     SELECT RANK() OVER (PARTITION BY timeline_day_id ORDER BY photo_id asc)
#     FROM timeline_photo as t2
#     where t2.photo_id = timeline_photo.photo_id
# );
# """)

# res = cur.execute("""
# -- Step 2: Update the timeline_photo table
# UPDATE timeline_photo
# SET image_order = (
#   SELECT image_order
#   FROM temp_image_order
#   WHERE temp_image_order.photo_id = timeline_photo.photo_id
# );
# """)



# cur.execute("""
# INSERT INTO timeline_photo
# SELECT *
# FROM timeline_photos2
# """)

res = cur.execute("""
select image from trips
""")

recs = res.fetchall()
for row in recs:
  print("'./images/" + row[0] +"'")

con.commit()