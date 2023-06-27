def openFileForReading(filename):
    with open(filename, "r") as file:
        todos = file.readlines()
    return todos

def openFileForWriting(filename, todos):
    with open(filename, "w") as file:
        file.writelines(todos)

FILENAME = "files/todos.txt"
todos = openFileForReading(FILENAME)

user_prompt = "Type 'add','show', 'edit', 'complete' or 'exit': "

while True:
    user_action = (input(user_prompt)).strip().lower()

    if 'add' in user_action:
        todo = user_action[4:] + "\n"
        todos.append(todo)

        openFileForWriting(FILENAME, todos)
    elif 'show' in user_action:
        for index, item in enumerate(todos):
            item = item.strip('\n').title()
            print(f"{index + 1}-{item}")
    elif 'edit'in user_action:
        number = int(user_action[5:])
        new_todos = input("Enter a new todo: ") + "\n"
        todos[number-1] = new_todos

        openFileForWriting(FILENAME, todos)
    elif 'complete' in user_action:
        number = int(user_action[9:])
        todos.pop(number-1)
        openFileForWriting(FILENAME, todos)
    elif 'exit' in user_action:
        break
    else:
        print("Unknown command. Please try again.")
print("Goodbye!")



