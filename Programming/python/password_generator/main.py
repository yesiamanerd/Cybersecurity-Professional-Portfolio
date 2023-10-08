#Password Generator Project
import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters= int(input("How many letters would you like in your password?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

#Eazy Level - Order not randomised:
#e.g. 4 letter, 2 symbol, 2 number = JduE&!91


#Hard Level - Order of characters randomised:
#e.g. 4 letter, 2 symbol, 2 number = g^2jk8&P

print(f"{random.randrange(0, len(letters), 1)}")
characterList = []
for n in range(0, nr_symbols):
    # get index
    indx = random.randrange(0, len(symbols), 1)
    characterList.append(symbols[indx])

for n in range(0, nr_numbers):
    # get index
    indx = random.randrange(0, len(numbers), 1)
    characterList.append(numbers[indx])

for n in range(0, nr_letters - (nr_numbers + nr_symbols)):
    # get index
    indx = random.randrange(0, len(letters), 1)
    characterList.append(letters[indx])

final_password = ""
for char in range(1, len(characterList) + 1, 1):
    indx = random.randrange(0, len(characterList), 1)
    final_password += characterList[indx]
    characterList.pop(indx)

print(f"{final_password}")
