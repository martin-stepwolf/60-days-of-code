import re

def validation(text):
    rules = [
        {
            'pattern': r"([0-1]+)",
            'message': 'It is a binary code'
            # example match:  0101
        },
        {
            'pattern': r"([0-9A-Fa-f]+)",
            'message': 'It is a hexadecimal code'
            # example match:  FF101145A5 or ffaa56
        },
        {
            'pattern': r"(([0-9a-fA-F]{3}){1,2})",
            'message': 'It is a hexadecimal code of a color'
            # example match:  fff, 123fff
        },
        {
            'pattern': r"([/d+])", # \d or [0-9]
            'message': 'It is digit numbers'
        },
        {
            'pattern': r"(.+?[,\n]{1,1}){2,}",
            # Note: ".+?" is more concrete than just ".+"
            'message': 'It looks like a csv content'
            # example match:  123,asdas,123
        },
        # {
        #     'pattern': r"([^\d]*[/w]+[^\d]*)",
        #     'message': 'It is words'
        # },
        # {
        #     'pattern': r"(/W+)",
        #     'message': 'It is not words'
        # },
        # {
        #     'pattern':  r"([^0-9][a-zA-Z]+[^0-9])",
        #     'message': 'It is letters'
        # },
        # {
        #     'pattern': r"(\w*\.)",
        #     'message': 'It has a . at the final'
        # },
        # {
        #     'pattern': r"(\w*\.{1}?)",
        #     'message': 'It is a paragraph with some .'
        # },
        # {
        #     'pattern': r"([\d*\s+\d*])",
        #     'message': 'It has spaces'
        # },
        # {
        #     'pattern': r"([\d*\S+\d*])",
        #     'message': 'It does not have spaces'
        # },
        {
            'pattern': r"([^1-9][a-z]{3,}(s|es))",
            'message': 'It could be a word in plural'
            # example match:  words, parties
        },
        {
            'pattern': r"(w{3,3}\.[^\W][\w]{2,}\.com)",
            'message': 'It is a basic URL'
            # example match:  www.url.com
        },
        {
            'pattern': r"((\d{2,2}[\-\.\ ]?){3,3})",
            'message': 'It is a phone number'
            # example match:  99 99 99, 99-99-99 or 99.99.99
        },
        {
            'pattern': r"(\+\d{1,3}\s?(\d{3}\s?){2}\d{2}\s?\d{2})",
            'message': 'It is a international phone number'
            # example match: +123 123 123 12 12 or +11231231212
        },

    ]
    print('===== Validations =====')
    for rule in rules:
        if re.match(rule['pattern'], text):
            print("- " + rule['message'])

def run():
    print("1-regex (regular expressions).")
    text = input("Type whatever you want: ")
    validation(text)

if __name__ == "__main__":
    run()