# !/bin/bash
# Program to make backups about files

backupsDirectory="backups"
backupsLogsFile="05-backups.log"

# this validate if the directory exists
if [ ! -d "$backupsDirectory" ]; then
   mkdir $backupsDirectory
fi

add_log(){
   echo $1 >> $backupsLogsFile
}

while :
do
backupsAmount=`find $backupsDirectory/ -type f | wc -l`
echo "*****************************************"
echo "*            Backups - Menu             *"
echo "*****************************************"
echo "* 1 - Create backup (*.*)               *"
echo "* 2 - Create backup (*.* with password) *"
echo "* 3 - Remove all the backups($backupsAmount backups) *"
echo "* 4 - Look logs                         *"
echo "* 5 - Info                              *"
echo "* 6 - Exit                              *"
echo "*****************************************"

read -n1 -p "Choose an option [1-6] " option
   case $option in
       1)
          echo -e "\nCreate Backup (current files)"
          # packaging many files with tar
          tar -cvf backups/backup-$(date +"%Y-%m-%d-%T").tar *.*
          # -c create, -v verbose, -f file
          # packaging just one file with gzip and that file is deleted  
          gzip -9 backups/backup-$(date +"%Y-%m-%d-%T").tar
          # ration -9 is the compression level of the file.
          add_log "$(date +"%Y-%m-%d-%T") - Create Backup by $(whoami)"
          ;;
       2)
          echo -e "\nCreate Backup (current files with password)"
          verifyInstallZip=$(which zip)
          if [ $? -eq 0 ]; then
            zip -e backups/backup-$(date +"%Y-%m-%d-%T").zip *.*
            add_log "$(date +"%Y-%m-%d-%T") - Create Backup with password by $(whoami)"
          else
             echo -e "\nZIP is not installed in your computer"
          fi    
          ;;
       3)
          echo -e "\nRemove all the backups"
          rm -i -r backups/*
          add_log "$(date +"%Y-%m-%d-%T") - Remove backups by $(whoami)"
          ;;
       4)
          echo -e "\nLook logs"
          cat $backupsLogsFile
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
