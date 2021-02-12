## Bash Shell

Kernel -> Shell -> Applications

1. SH: It is also known as Shell Bourne, the first shell created for a Linux OS, actually it could be used but the functionality like history commands and  autocomplete would bre lost.
2. KSH: It was written by David Korn. It try to combine characteristic from CSH, TCSH y SH.
3. CSH: It was designed to write shell scripting programs with a sintaxis similar to C. In many system like Red Hat, CSH is TCSH, a better version of CSH.
4. BASH: It is also known as Shell Bourne-Again, it is a updated version of SH created by Free Software Fundation. It has some advance funcionalities from KSH, CSH, SH y TCSH. One of the best funtionalities is to run many programms in the background at the same time.
5. ZSH: Powerful shell that can function as an interactive shell and as a scripting language interpreter, still being Bash compatible

### Vim configuration
From the home whe create a file with some visual configurations for vim '/home$ vim .vimrc', vim is a text editor for the Command Line Interface, and we paste the next.

'''
set showmode
set autoindent
set tabstop=4
set expandtab
syntax on
'''

Finally we save and escape with :wq.

### Create a script

When we create an script, its name should not be like a normal command, script or file in the system, we could look it with:

- 'type command': show the type and its ubication.
- 'type -a command': show all the found files.
- 'type -t command': show the type file.

### Variables

There are global and local variables.

Global variables are storage in /etc/profile, we could add one with 'sudo vim /etc/profile' and type:

'''

'''
VARIABLE=value name
export VARIABLE

### Run a script

All the scripts must have the execution permission (chmod +x).

To run it, we could use 'bash program.sh', './program.sh' or 'sh program.sh'.

If we run with 'bash -v program.sh' we look the commands and result, with -x it shows inputs(-) and outputs(+), this is useful for debugging.

### Operations

- echo "Basic arithmetic operators"
- echo "Numbers: a=$num_a and b=$num_b"
- echo "Sum a + b = " $((num_a + num_b))
- echo "Subtract a - b = " $((num_a - num_b))
- echo "Multiply a * b = " $((num_a * num_b))
- echo "Divide a / b = " $((num_a / num_b))
- echo "Residue a % b = " $((num_a % num_b))
- 
- echo -e "\nBasic relational operators"
- echo "Numbers: a=$num_a and b=$num_b"
- echo "a > b = " $((num_a > num_b))
- echo "a < b = " $((num_a < num_b))
- echo "a >= b = " $((num_a >= num_b))
- echo "a <= b = " $((num_a <= num_b))
- echo "a == b = " $((num_a == num_b))
- echo "a != b = " $((num_a != num_b))
- 
- echo -e "\nBasic asignation operators"
- echo "Numbers: a=$num_a and b=$num_b"
- echo "Sum a += b = " $((num_a += num_b))
- echo "Subtract a -= b = " $((num_a -= num_b))
- echo "Multiply a *= b = " $((num_a *= num_b))
- echo "Divide a /= b = " $((num_a /= num_b))
- echo "Residue a %= b = " $((num_a %= num_b))

### Arguments

$0 is the file name
$1 - $9 use the nine first arguments
${10} - ${n} use 10 or more arguments
$# Show how many arguments there are
$* show all the arguments