import os
import re
#Temporary - replace with argument calls
file1 = os.path.join('C:\Users\User\Desktop','input1.txt')
file2 = os.path.join('C:\Users\User\Desktop','input2.txt')

output_data = []

with open(file1) as f:
    for line in f:
        name_dict = {}
        split_line = line.split(" ")
        name_dict['name'] = split_line[0]
        name_dict['id'] = re.match(r'.*',split_line[1]).group()
        output_data.append(name_dict)


with open(file2) as f:
    for line in f:
        split_line = line.split(" ")
        name_dict['surname'] 
