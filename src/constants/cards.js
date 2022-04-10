const cards = [
    {
        number: "1",
        isDiscarded: false,
        hint: "The infographic shows the number of hotels listed",
        solution: "64 hidden in the number of hotels à take the 64 card"    
    },
    {
        number: 3,
        isDiscarded: false,
        hint: "Look at the number assigned to each deposit. Which one matches the criteria on the S2 card?",
        solution: "The deposit is FORSBase, number 1. +70 = 71 à take the card 71"   
    },
    {
        number: 4,
        isDiscarded: false,
        hint: "Nothing to find",
        solution: "Nothing to find"    
    },
    {
        number: 6,
        isDiscarded: false,
        hint: "We'll have to walk a bit",
        solution: "11th floor à take card 11"    
    },
    {
        number: 7,
        isDiscarded: false,
        hint: "Which identifier corresponds to that of a dataset? Use card I 3 as a guide.",
        solution: "The doi is correct. 10.1840/309registries à take card 84"    
    },
    {
        number: 8,
        isDiscarded: false,
        hint: "Count the post-its on the desk",
        solution: "There are 4 large post-it notes on the desk of card 59 à take card 4"    
    },
    {
        number: 9,
        isDiscarded: false,
        hint: "Take a good look at the post-its. Your phone will also be useful.",
        solution: "Take the S8 card (in the phone). Take the 85 card (post-it on the computer screen)."    
    },
    {
        number: 11,
        isDiscarded: false,
        hint: "Did you make a note of the date? You may also find the books useful.",
        solution: "Take card 17 (in Roman numerals on a book). Take card 19 (circled in red on the calendar)."
    },
    {
        number: 12,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 13,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 15,
        isDiscarded: false,
        hint: "Look carefully at the name of the page in the document",
        solution: "This is the same document as card 16! Add them together. 16 + 15 = 31 à take card 31"
    },
    {
        number: 16,
        isDiscarded: false,
        hint: "Look carefully at the name of the page in the document",
        solution: "This is the same document as card 15! Add them together. 16 + 15 = 31 à take card 31"
    },
    {
        number: 17,
        isDiscarded: false,
        hint: "This chapter looks interesting and the book seems to be open at a strategic location",
        solution: "Chapter 30 à take card 30. The page numbers I 67 and I 68 refer to the corresponding role à cards take the cards I 67 and I 68."
    },
    {
        number: 18,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 19,
        isDiscarded: false,
        hint: "It seems that it is necessary to add a file to launch the analysis",
        solution: "19 + 60 (card with cleanest data) = 79  à take card 79"
    },
    {
        number: 21,
        isDiscarded: false,
        hint: "One file seems particularly interesting",
        solution: "Dossier_Number twenty-six.zip à take card 26"
    },
    {
        number: 22,
        isDiscarded: false,
        hint: "Have you observed the corkboard behind your colleague's desk?",
        solution: "Take card 1 indicated on the post-it à take card 1"
    },
    {
        number: 25,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 26,
        isDiscarded: false,
        hint: "Which file is named correctly? Use the information given on the S10 card.",
        solution: "OFS_Continental_20200628.png à take card 28"
    },
    {
        number: 28,
        isDiscarded: false,
        hint: "Look at the key box and the reception panel",
        solution: "Number 92 in the key box à take card 92. R36ception: take card 36."
    },
    {
        number: 29,
        isDiscarded: false,
        hint: "This is a coded message to be deciphered! Look at card 59 to find the title of the message, which will serve as a decoding key.",
        solution: "Writing your DMP - A. Administrative information - B. Data collection - C. Documentation and Metadata - D. Ethics and Legal Compliance - E. Storage and backup - F. Selection and retention - G. Data Sharing - H. Responsibilities and Resources"
    },
    {
        number: 30,
        isDiscarded: false,
        hint: "Read the information in bold and use the card I 68.",
        solution: "The card to be introduced in the software is the 60"
    },
    {
        number: 31,
        isDiscarded: false,
        hint: "Nothing to find. Take the S1 card.",
        solution: "Nothing to find. Take the S1 card."
    },
    {
        number: 32,
        isDiscarded: false,
        hint: "Nothing to find",
        solution: "Nothing to find"
    },
    {
        number: 35,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 36,
        isDiscarded: false,
        hint: "Some fields in the questionnaire appear to be completed",
        solution: "Numbers 15 and 16 à take cards 15 and 16"
    },
    {
        number: 37,
        isDiscarded: false,
        hint: "Nothing to find, you are at the end of the game!",
        solution: "Nothing to find, you are at the end of the game!"
    },
    {
        number: 44,
        isDiscarded: false,
        hint: "Call on Ines the computer scientist by taking the I 22 card",
        solution: "Take the I22 card"
    },
    {
        number: 47,
        isDiscarded: false,
        hint: "Take a good look at the screen. Your phone will also help you.",
        solution: "Take the S5 card (on the phone). Take card 3 (on the screen, re3data.org)"
    },
    {
        number: 51,
        isDiscarded: false,
        hint: "After replying to this message, please note that others are waiting to be read",
        solution: "47 unread messages à take the card 47"
    },
    {
        number: 56,
        isDiscarded: false,
        hint: "Do all the cells look right?",
        solution: "This is not the correct card, the data is completely mixed up and there are empty cells without explanation."
    },
    {
        number: 59,
        isDiscarded: false,
        hint: "Look closely at the screen and the date the DMP is due. Need a little break?",
        solution: "Take card 8 (in the coffee cup). Take card 21 (in the screen). Take card 29 (in the notebook)"
    },
    {
        number: 60,
        isDiscarded: false,
        hint: "Do all the cells look right?",
        solution: "This is the correct card! You can add it in the analysis software"
    },
    {
        number: 61,
        isDiscarded: false,
        hint: "Please read the information in bold",
        solution: "Take cards 68 and S28"
    },
    {
        number: 64,
        isDiscarded: false,
        hint: "Contact the IT department",
        solution: "Phone number 0099 à take card 99"
    },
    {
        number: 65,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 68,
        isDiscarded: false,
        hint: "A specific beacon should help you move forward",
        solution: "<card cardAPrendre=''forNextStep''> àtake card 51"
    },
    {
        number: 69,
        isDiscarded: false,
        hint: "Do all the cells look right?",
        solution: "This is not the correct card, the data is not standardized, some cells are empty, the N/A are heterogeneous."
    },
    {
        number: 71,
        isDiscarded: false,
        hint: "Here's a tip: the data can be published in plain sight and does not contain sensitive data. Use the J1 card.",
        solution: "The data is open à take the card 96"
    },
    {
        number: 75,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 77,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 79,
        isDiscarded: false,
        hint: "The researcher seems very happy!",
        solution: "Number 22 on the sweater à take card 22"
    },
    {
        number: 81,
        isDiscarded: false,
        hint: "Ask the Information Specialist for advice by taking the S13 card",
        solution: "Take the S13 card"
    },
    {
        number: 82,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 84,
        isDiscarded: false,
        hint: "You have to go somewhere",
        solution: "Office n°9 à take card 9"
    },
    {
        number: 85,
        isDiscarded: false,
        hint: "It is necessary to make an individual operation with the number of views and downloads",
        solution: "Add up the individual numbers of views and downloads. 1+5+2+3+7+7+1+1+0+6+4+0 = 37 à take card 37"
    },
    {
        number: 88,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 92,
        isDiscarded: false,
        hint: "A small addition will certainly be necessary",
        solution: "3+2+1 = 6 à take card 6"
    },
    {
        number: 93,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 94,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 95,
        isDiscarded: false,
        hint: "Penalty card",
        solution: "Penalty card"
    },
    {
        number: 96,
        isDiscarded: false,
        hint: "Which license allows free reuse provided that the authors of a work are credited? Help yourself to the J9 card",
        solution: "Licence CC BY à take the card 7."
    },
    {
        number: 99,
        isDiscarded: false,
        hint: "It looks like there's a logo on the edge of the desktop, right? The various screens also catch your eye.",
        solution: "Take card 44 (screen). Take card 81 (edge of the desk)"
    },
    {
        number: "i22",
        isDiscarded: false,
        hint: "Theory on file formats. Take the I 51 card",
        solution: "Theory on file formats. Take the I 51 card"
    },
    {
        number: "i3",
        isDiscarded: false,
        hint: "Theory on identifiers. Help to find the solution of the card 7",
        solution: "Theory on identifiers. Help to find the solution of the card 7"   
    },
    {
        number: "i51",
        isDiscarded: false,
        hint: "Find all the numbers and add them up",
        solution: "Theory on file formats. Take the I 51 card"
    },
    {
        number: "i67",
        isDiscarded: false,
        hint: "Theory of data cleansing",
        solution: "Theory of data cleansing"
    },
    {
        number: "i68",
        isDiscarded: false,
        hint: "Data cleaning theory. Helps to identify the card on which the data is best cleaned",
        solution: "Data cleaning theory. Helps to identify the card on which the data is best cleaned"
    },
    {
        number: "j1",
        isDiscarded: false,
        hint: "Theory on open data. Help to find the solution of the card 71",
        solution: "Theory on open data. Help to find the solution of the card 71"    
    },
    {
        number: "j9",
        isDiscarded: false,
        hint: "Theory on reuse licenses. Help to find the solution of the 96 card",
        solution: "Theory on reuse licenses. Help to find the solution of the 96 card"    
    },
    {
        number: "s1",
        isDiscarded: false,
        hint: "Theory on project documentation. Nothing to find",
        solution: "Theory on project documentation. Nothing to find"    
    },
    {
        number: "s2",
        isDiscarded: false,
        hint: "Which repository is free and has all its servers in Switzerland? Use card 3 to find its number",
        solution: "The deposit is FORSBase, number 1. +70 = 71 à take the card 71"    
    },
    {
        number: "s4",
        isDiscarded: false,
        hint: "Theory on data types. Nothing to find",
        solution: "Theory on data types. Nothing to find"    
    },
    {
        number: "s5",
        isDiscarded: false,
        hint: "Theory on data repository. Nothing to find",
        solution: "Theory on data repository. Nothing to find"    
    },
    {
        number: "s8",
        isDiscarded: false,
        hint: "Theory on altmetrics. Nothing to find",
        solution: "Theory on altmetrics. Nothing to find"    
    },
    {
        number: "s10",
        isDiscarded: false,
        hint: "Theory on file naming. Help to find the solution of the card 26",
        solution: "Theory on file naming. Help to find the solution of the card 26"    
    },
    {
        number: "s13",
        isDiscarded: false,
        hint: "Data value theory. Take the S25 card",
        solution: "Data value theory. Take the S25 card"    
    },
    {
        number: "s15",
        isDiscarded: false,
        hint: "DMP Theory. Nothing to find",
        solution: "DMP Theory. Nothing to find"    
    },
    {
        number: "s25",
        isDiscarded: false,
        hint: "Some letters are highlighted",
        solution: "By reading the letters in red only, we get sixty-one à take card 61"    
    },
    {
        number: "s28",
        isDiscarded: false,
        hint: "Metadata theory. Nothing to find",
        solution: "Metadata theory. Nothing to find"    
    }
]

export default cards