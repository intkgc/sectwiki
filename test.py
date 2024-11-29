import os

file_path = "content/index.md"

print("Work dir: ", os.getcwd())
print("file exist: ", os.path.exists(file_path))

with open(file_path, "r") as file:
    content = file.read()

new_content = content.replace("%%replace%%", "THIS IS TEST!")

print(new_content)

with open(file_path, "w") as file:
    file.write(new_content)
