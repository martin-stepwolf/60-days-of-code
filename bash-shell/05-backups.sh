# !/bin/bash
# Program to make backups about files in this directory

while :
do
echo "**************************************************"
echo "*            Backups - Menu                      *"
echo "**************************************************"
echo "* 1 - Create backup (*.*)                        *"
echo "* 2 - Create backup (*.* with password)          *"
echo "* 3 - Remove all the backups                     *"
echo "* 4 - Look logs                                  *"
echo "* 5 - Info                                       *"
echo "* 6 - Exit                                       *"
echo "**************************************************"

read -n1 -p "Choose an option [1-6] " option
   case $option in
       1)
          mkdir backups
          echo -e "\nCreate Backup (current files)"
          # packaging many files with tar
          tar -cvf backups/backup-$(date +"%Y-%m-%d-%T").tar *.*
          # -c create, -v verbose, -f file
          # packaging just one file with gzip and that file is deleted  
          gzip -9 backups/backup-$(date +"%Y-%m-%d-%T").tar
          # ration -9 is the compression level of the file.
          echo "$(date +"%Y-%m-%d-%T") - Create Backup by $(whoami)" >> 05-backups.log
          ;;
       2)
          mkdir backups
          echo -e "\nCreate Backup (current files with password)"
          zip -e backups/backup-$(date +"%Y-%m-%d-%T").zip *.*
          echo "$(date +"%Y-%m-%d-%T") - Create Backup with password by $(whoami)" >> 05-backups.log
          ;;
       3)
          echo -e "\nRemove all the backups"
          rm -i -r backups/*
          echo "$(date +"%Y-%m-%d-%T") - Remove backups by $(whoami)" >> 05-backups.log
          ;;
       4)
          echo -e "\nLook logs"
          cat 05-backups.log
          ;;	
       5)
          echo -e "\nInfo"
          echo -e "Script to create backups about files in $(pwd)"
          echo -e "All the backups are stored in $(pwd)/backups"
          ;;
       6)
         echo -e "\nExit"
         exit 0
	      ;; 
       *)
	   echo -e "\nInvalid option"
	   ;;
       esac
done

# TODO: implement rsync and the posibility to choose a backup
