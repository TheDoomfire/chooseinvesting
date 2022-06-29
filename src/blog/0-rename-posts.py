import os

filetype = ".md"

for posts in os.listdir():
    if posts.endswith(filetype):
        splitme, trash = posts.split(filetype)
        new_name = splitme.strip().replace(" ", "-").lower() + filetype
        new_name = new_name.replace("'", "")
        print(new_name)
        os.rename(posts, new_name)