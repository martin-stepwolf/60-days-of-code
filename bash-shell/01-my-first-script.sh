# !/bin/bash
# shebang

DATE=2/11/2021
NAME=Martín

echo "File name: $0"
echo "My first programm in bash shell by $NAME at $DATE $0"
echo "There are $# arguments"

echo "Arguments:" 
for arg in $@
do 
echo "- $arg" 
done 

export NAME

sh 02-my-second-script.sh