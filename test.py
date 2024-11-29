file_path = "content/index.md"

with open(file_path, "r") as file:
    content = file.read()

new_content = content.replace("%%replace%%", "THIS IS TEST!")

with open(file_path, "w") as file:
    file.write(new_content)
