# !/bin/bash
# Program to make backups about files in this directory

while :
do
echo "********************************************"
echo "*            Backups - Menu                *"
echo "********************************************"
echo "*    1 - Create Backup (current files)     *"
echo "*    2 - Remove all the backups            *"
echo "*    3 - Look logs                         *"
echo "*    4 - Info                              *"
echo "*    5 - Exit                              *"
echo "********************************************"

read -n1 -p "Choose an option [1-5] " option
   case $option in
       1)
          echo -e "\nCreate Backup (current files)"
          mkdir -m 755 backups/backup-$(date +"%Y-%m-%d-%T")
          cp *.* backups/backup-$(date +"%Y-%m-%d-%T")
          echo "$(date +"%Y-%m-%d-%T") - Create Backup by $(whoami)" >> 05-backups.log
          ;;
       2)
          echo -e "\nRemove all the backups"
          rm -i -r backups/*
          echo "$(date +"%Y-%m-%d-%T") - Remove logs by $(whoami)" >> 05-backups.log
          ;;
       3)
          echo -e "\nLook logs"
          cat 05-backups.log
          ;;	
       4)
          echo -e "\nInfo"
          echo -e "Script to create backups about files in $(pwd)"
          echo -e "All the backups are stored in $(pwd)/backups"
          ;;
       5)
         echo -e "\nExit"
         exit 0
	      ;; 
       *)
	   echo -e "\nInvalid option"
	   ;;
       esac
done