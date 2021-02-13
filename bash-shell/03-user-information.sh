# !/bin/bash

echo "User information"
read -n10 -p "Enter a identification (10 digits): " identification
read -p "Enter a country's initials (MX, COL, US): " country
read -p "Enter your birthdate(XXXX-XX-XX): " birthdate
read -s -p "Enter your password: " password
echo -e "\n----------------------------------------"

identificationRegex='^[0-9]{10}$'
if [[ $identification =~ "^[0-9]{10}$" ]]; then
    echo "Valid identification: $identification"
else
    echo "Invalid identification: $identification"
fi

countryRegex='^MX|COL|US$'
if [[ $country =~ $countryRegex ]]; then
    echo "Valid country: $country"
else
    echo "Invalid country: $country"
fi

birthdateRegex='^19|20[0-9]{2}\-[1-12]\-[1-31]$'
if [[ $birthdate =~ $birthdateRegex ]]; then
    echo "Valid birthdate: $birthdate"
else
    echo "Invalid birthdate: $birthdate"
fi
