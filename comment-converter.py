import os

name = input('Enter commenter name: ')
content = input('Enter comment content: ')
date = input('Enter comment date: ')
directory = input('Enter comment directory: ')

directory = os.path.join('_data/comments', directory)

if not os.path.exists(directory):
	os.mkdir(directory)

file_counter = 1;

while True:
	filename = str(file_counter) + ".yml"
	filepath = os.path.join(directory, filename)
	if not os.path.exists(filepath):
		break
	else:
		file_counter += 1

# Reformat date for Jekyll
date_list = date.split(', ')
day = date_list[0]
time = date_list[1]

day_list = day.split('/')
day = day_list[2] + '/' + day_list[0] + '/' + day_list[1]
date = day + ', ' + time

f = open(filepath, "w")
f.write("name: " + name + "\nmessage: " + content + "\ndate: " + date)
f.close()