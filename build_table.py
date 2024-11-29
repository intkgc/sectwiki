import os
import yaml

index_path = "content/index.md"
projects_dir = "content/projects"

def parse_frontmatter(dir, file_path):
    with open(os.path.join(dir, file_path), "r", encoding="utf-8") as file:
        lines = file.readlines()

    if lines[0].strip() == "---":
        yaml_content = []
        for line in lines[1:]:
            if line.strip() == "---":
                break
            yaml_content.append(line)

        return yaml.safe_load("".join(yaml_content))
    else:
        print("YAML-заголовок не найден")

projects = [f for f in os.listdir(projects_dir) if os.path.isfile(os.path.join(projects_dir, f)) and f.endswith(".md")]

table = ""

for f in projects:
    frontmatter = parse_frontmatter(projects_dir, f)
    if not frontmatter or not all(key in frontmatter for key in ["description", "devs", "status"]):
        continue

    title = frontmatter.get("title")
    subprojects = frontmatter.get("subprojects")
    description = frontmatter.get("description")
    devs = frontmatter.get("devs")
    status = frontmatter.get("status")

    table_row = f"| [[{f.removesuffix('.md')}{'|' + title if title else ''}]]"
    table_row += f" | {', '.join(subprojects) if subprojects else ''}"
    table_row += f" | {description}"
    table_row += f" | {', '.join(devs)}"
    table_row += f" | {status} |"
    table += table_row + "\n"

with open(index_path, "r", encoding="utf-8") as file:
    content = file.read()

new_content = content.replace("%%table%%", table)

with open(index_path, "w", encoding="utf-8") as file:
    file.write(new_content)
