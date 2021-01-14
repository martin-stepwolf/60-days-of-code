#!/usr/bin/perl

# This program reads a csv file with data about soccer matches
# This validates the data format (year, text, text, integer, etc) and search matches won by visitors
# The validation and searching is done by regular expression

use strict;
use warnings;

my $t = time;

open(my $f, "<files/soccer-matches.csv") or die("there is not the file soccer-matches.csv");
# header: date,home_team,away_team,home_score,away_score,tournament,city,country,neutral
# value example: 1872-11-30,Scotland,England,0,0,Friendly,Glasgow,Scotland,FALSE

my $matches = 0;
my $data_without_proper_format = 0;
my $matches_won_by_visits = 0;

print("============= Matches won by visitors =============\n");
while(<$f>) {
	chomp;
	if(m/^([\d]{4,4})\-.*?,(.*?),(.*?),(\d+),(\d+),.*$/){
		if($5 > $4) { # This compares the score of visit team ($5) and home team ($4)
			printf("%s: %s (%d) - (%d) %s\n",
				$1, $2, $4, $5, $3
			);
            # $1, $2, $n means the content inside of parenthesis in the regex
            # for example $1 is (\d){4,4}, this is the year of the match
            $matches_won_by_visits++;
		}
		$matches++;
	} else {
		$data_without_proper_format++;
	}
}
print("====================================================\n");

close($f);

printf("There are %d matches and %d data that does not have a proper format\n", $matches, $data_without_proper_format - 1);
# ($data_without_proper_format - 1) because of the header

printf("%d matches were won by visit teams and %d by home teams\n", 
    $matches_won_by_visits, $matches - $matches_won_by_visits);

printf("Program delay: %d seconds\n", time() - $t);