import re

def validation(text):
    rules = [
        {
            'pattern': "[0-1]+",
            'concept': 'Binary code'
            # example match:  0101
        },
        {
            'pattern': "[0-9A-Fa-f]+",
            'concept': 'Hexadecimal code'
            # example match:  FF101145A5 or ffaa56
        },
        {
            'pattern': "([0-9a-fA-F]{3}){1,2}",
            'concept': 'Hexadecimal code of a color'
            # example match:  fff, 123fff
        },
        {
            'pattern': "[/d+]", # \d or [0-9]
            'concept': 'Numbers'
        },
        {
            'pattern': "(.+?[,\n]{1,1}){2,}",
            # Note: ".+?" is more concrete than just ".+"
            'concept': 'CSVcontent'
            # example match:  123,asdas,123
        },
        {
            'pattern':  "[a-zA-Z]+",
            'concept': 'Letters'
            # example match: developer, Python
        },
        {
            'pattern': "/W+",
            'concept': 'Not words'
        },
        {
            'pattern': "\S+",
            'concept': 'Content without spaces'
        },
        {
            'pattern': "[^1-9][a-z]{3,}(s|es|ies)",
            'concept': 'Word in plural'
            # example match:  words, parties
        },
        {
            'pattern': "[\w\.]{3,}@[\w\.]{3,}\.\w{2,5}",
            'concept': 'Email'
            # example match:  user@mail.com or user.new@mail.com
        },
        {
            'pattern': "w{3,3}\.[^\W][\w]{2,}\.com",
            'concept': 'Basic URL'
            # example match:  www.url.com
        },
        {
            'pattern': "https?://www\.[^\W][\w]{2,}\.com(\.\w{1,})?",
            'concept': 'Complete URL'
            # example match:  https://www.url.com or http://www.url.com.mx
        },
        {
            'pattern': "(\d{2,2}[\W]?){3,3}",
            'concept': 'Phone number'
            # example match:  99 99 99, 99-99-99 or 99.99.99
        },
        {
            'pattern': "\+\d{1,3}\s?(\d{3}\s?){2}\d{2}\s?\d{2}",
            'concept': 'International phone number'
            # example match: +123 123 123 12 12 or +11231231212
        },
        {
            'pattern': "(\d{1,3}\.){3}\d{1,3}",
            'concept': 'IPv4 address or Wildcard mask'
            # example match: 0.0.0.255 or 999.999.999.999
            # Note: 999.999.999.99 cannot be a IPv4
            # The programming language should to validate the value
            # Regex can only validate the format in this case
        },
        {
            'pattern': "\-?\d{1,3}\.\d{1,6},\s?\-?\d{1,3}\.\d{1,6}",
            'concept': 'Geographical coordinates'
            # example match: '-78.123223,100.12' or '999.123, 390.123'
            # Note: 999.123, 390.123 cannot be a coordinates
            # The programming language should to validate the value
            # Regex can only validate the format in this case
        },
        {
            'pattern': "([A-ZÑÁÉÍÓÚ][a-zñáéíóú]+\s?){1,5}",
            'concept': 'Name of a person from Mexico'
            # example match: Edgar Julio Ponce Rodríguez, Martín Campos 
        }
    ]
    print("===== Validations =====")
    print("Your input could be:")
    for rule in rules:
        if re.match(r"(^" + rule['pattern'] +"$)", text):
            # ^ (at the beginning) and $ (at the final) make the match more exactly
            # example: Martin is a name, but www.Martin.mx is not a name even if it contains it
            print("- " + rule['concept'])

def run():
    print("1-regex (regular expressions).")
    text = ""
    while text == "":
        text = input("Type whatever you want, (not null input): ")
    validation(text)

if __name__ == "__main__":
    run()