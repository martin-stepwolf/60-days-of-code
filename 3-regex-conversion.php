<?php
/*
 * This program reads a csv file with data about soccer matches
 * This validates the data format and creates a conversion to sql code
 * The conversion result is saved in a new file
 */
$t = time();

$file = fopen("files/soccer-matches.csv","r");
// "r" = read
# header: date,home_team,away_team,home_score,away_score,tournament,city,country,neutral
# value example: 1872-11-30,Scotland,England,0,0,Friendly,Glasgow,Scotland,FALSE

$matches = 0;
$data_without_proper_format = 0;
$csv_to_sql_code= "";

while(!feof($file)) {
    $line = fgets($file);
    if(preg_match('/^([\d]{4,4})\-.*?,(.*?),(.*?),(\d+),(\d+),.*$/', $line, $m)) {
        $csv_to_sql_code .= 
            "INSERT INTO soccer_matches (date, home_team, away_team, home_score, away_score) 
            VALUES($m[1], $m[2], $m[3], $m[4], $m[5])\n";
            // note: example about code, a real sql query 
            // the relationship and normalizated would be taken into account
        $matches++;
    } else {
        $data_without_proper_format++;
    }
}
fclose($file);

// The file with sql code is saved
$new_file = fopen("files/soccer-matches.sql", "w");
// "w" = write
fwrite($new_file, $csv_to_sql_code);
fclose($new_file);

printf("There are %d matches and %d data that does not have a proper format\n", $matches, $data_without_proper_format - 1);
# ($data_without_proper_format - 1) because of the header

printf("Program delay: %d seconds\n", time() - $t);

echo "The file with sql code were saved in files/soccer-matches.sql\n";