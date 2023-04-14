// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Who is the father of HTML?",
    answer: "Tim Berners Lee",
    options: [
      "Sergey Brin",
      "James Gosling",
      "Tim Berners Lee",
      "Bjarne Stroustrup"
    ]
  },
    {
    numb: 2,
    question: "Which tag is used for making text bold?",
    answer: "< b >",
    options: [
      "< p >",
      "< br >",
      "< hr >",
      "< b >"
    ]
  },
    {
    numb: 3,
    question: "What is the full form of HTML?",
    answer: "Hypertext Markup Language",
    options: [
      "Hypertext Machine Language",
      "Hypertext Markup Language",
      "Hypertool Multi Language",
      "Hometext  makeup Language"
    ]
  },
    {
    numb: 4,
    question: "Which of the following document type initialized in HTML5?",
    answer: "< !DOCTYPE HTML >",
    options: [
      "< /DOCTYPE HTML >",
      "< /DOCTYPE >",
      "< !DOCTYPE HTML >",
      "< !document html >"
    ]
  },
    {
    numb: 5,
    question: "Why do we use div tags in HTML?",
    answer: "For creating differnt section",
    options: [
      "For adding items",
      "For creating differnt section",
      "For dividing items",
      "For adding details"
    ]
  },
  
    {
    numb: 6,
    question: "Which of the following element is used for creating Unordered List?",
    answer: "< ul >",
    options: [
      "< ul >",
      "< dt >",
      "< dd >",
      "< li >"
    ]
  },
    {
    numb: 7,
    question: "How many heading tags are there in HTML5?",
    answer: " 6 ",
    options: [
      " 1 ",
      " 4 ",
      " 6 ",
      " 5 "
    ]
  },
    {
    numb: 8,
    question: "Which of the following attributes is used to link elements?",
    answer: "link",
    options: [
      "a",
      "href",
      "newref",
      "link"
    ]
  },
    {
      numb: 9,
      question: "Which of the following character is used to comments ?",
      answer: "a and b both",
      options: [
        "//",
        "/*---*/",
        "a and b both",
        "!"
    ]
  },
    {
    numb: 10,
    question: "Which attributes is used for favicon?",
    answer: "rel",
    options: [
      "rel",
      "href",
      "title",
      "icon"
    ]
  },
    {
      numb: 11,
      question: "Which of the following in a storage device?",
      answer: "All of the above",
      options: [
        "Hard Disk",
        "Pendrive",
        "Flopped Disk",
        "All of the above"
    ]
  },
    {
    numb: 12,
    question: "ISP stands for?",
    answer: "Internet Service Provider",
    options: [
      "International Service Provider",
      "Internet Service Provider",
      "Internet Service Presenter",
      "None of the above"
    ]
  },
    {
    numb: 13,
    question: "Which of the following is used to communicate from one city to another?",
    answer: "WAN",
    options: [
      "LAN",
      "MAN",
      "WAN",
      "All of the above"
    ]
  },
    {
    numb: 14,
    question: "Which of the following cannot be connected via USB?",
    answer: "Moniter",
    options: [
      "Mouse",
      "Printer",
      "Moniter",
      "Hard Disk"
    ]
  },
    {
    numb: 15,
    question: "In which of the following years was Blockchain invented?",
    answer: "2008",
    options: [
      "2012",
      "2008",
      "2016",
      "2006"
    ]
  },
    {
    numb: 16,
    question: "Which of the following is the shortcut key for screenshot in windows 10?",
    answer: "prt Sc",
    options: [
      "prt Sc",
      "Screen",
      "print",
      "Screenshot"
    ]
  },
    {
    numb: 17,
    question: "Which of the following service is used to convert domain name to IP Address?",
    answer: "DNS",
    options: [
      "IP",
      "ISP",
      "DNS",
      "NIS"
    ]
  },
    {
    numb: 18,
    question: "Which of the following is the brain of the computer?",
    answer: "CPU",
    options: [
      "CPU",
      "CU",
      "Memory",
      "ALU"
    ]
  },
    {
    numb: 19,
    question: "Which of the following is a GUI Operating System?",
    answer: "Linux",
    options: [
      "DOS",
      "Windows",
      "Unix",
      "Linux"
    ]
  },
    {
    numb: 20,
    question: "Number of primitive data types in Java?",
    answer: "8",
    options: [
      "9",
      "12",
      "8",
      "6"
    ]
  },
    {
    numb: 21,
    question: "Arrays in Java are?",
    answer: "Object",
    options: [
      "Object reference",
      "Object",
      "Primitive data type",
      "None"
    ]
  },
    {
    numb: 22,
    question: "When is the object created with new keyword?",
    answer: "At run time",
    options: [
      "At compile time",
      "At run time",
      "Depends on code",
      "None"
    ]
  },
    {
    numb: 23,
    question: "compareTO() returns?",
    answer: "An int value",
    options: [
      "An int value",
      "True",
      "False",
      "None"
    ]
  },
    {
    numb: 24,
    question: "To which of the following does the class string belong to ?",
    answer: "java.lang",
    options: [
      "java.lang",
      "java.awt",
      "java.applet",
      "java.string"
    ]
  },
    {
    numb: 25,
    question: "In Computer world,Trojan refer to....",
    answer: "Malware",
    options: [
      "Virus",
      "Malware",
      "Worm",
      "Spyware"
    ]
  },
    {
    numb: 26,
    question: "Which protocol is used to received e-mail? ",
    answer: "POP3",
    options: [
      "POP3",
      "HTTP",
      "FTP",
      "SMTP"
    ]
  },
    {
    numb: 27,
    question: "In which year @ sign was first chosen for its use in e-mail address? ",
    answer: "1972",
    options: [
      "1960",
      "1972",
      "1977",
      "1980"
    ]
  },
    {
    numb: 28,
    question: "Who is also know as the father of Indian Supercomputer?",
    answer: "Vijay Bhatkar",
    options: [
      "Ragunath Mashelkar",
      "Jayant Narlika",
      "Vijay Bhatkar",
      "Nandan Nilekani"
    ]
  },
    {
    numb: 29,
    question: "Which is the largest unit of storage among the following?",
    answer: "Terabyte",
    options: [
      "Terabyte",
      "Megabyte",
      "Byte",
      "Gigabyte"
    ]
  },
    {
    numb: 30,
    question: "Which of the following units is used to measure the speed of a computer?",
    answer: "MIPS",
    options: [
      "BAUD",
      "Byte",
      "MIPS",
      "SYPS"
    ]
  },
    {
    numb: 31,
    question: "Which of the following is an extension of a temporary file?",
    answer: ".tmp",
    options: [
      ".tar",
      ".tnt",
      ".txt",
      ".tmp"
    ]
  },
    {
      numb: 32,
      question: "What do you need to use to connect to the internet?",
      answer: "Modem",
      options: [
        "Moniter",
        "Modem",
        "CPU",
        "Mouse"
    ]
  },
    {
      numb: 33,
      question: "Total number of function keys in computer keyboard?",
      answer: "12",
      options: [
        "12",
        "8",
        "4",
        "2"
    ]
  },
    {
      numb: 34,
      question: "Which function key needs to press during reboot to enter a Safe Mode of a Windows machine?",
      answer: "F8",
      options: [
        "F4",
        "F2",
        "F1",
        "F8"
    ]
  },
    {
      numb: 35,
      question: "Which company bought the popular machine teleconferencing software Skype",
      answer: "Microsoft",
      options: [
        "Google",
        "Microsoft",
        "Accenture",
        "Apple"
    ]
  },
    {
      numb: 36,
      question: "What is the full form of PDF?",
      answer: "Portable Document Format",
      options: [
        "Printed Document Format",
        "Public Document Format",
        "Published Document Format",
        "Portable Document Format"
    ]
  },
    {
      numb: 37,
      question: "The maximum speed at which the data can be transmitted on each channel of a standard PCM stream is...",
      answer: "64 Kbps",
      options: [
        "64 Kbps",
        "128 Kbps",
        "1 Mbps",
        "4 Mbps"
    ]
  },
    {
      numb: 38,
      question: "Who is known as father of computer?",
      answer: "Charles Babbage",
      options: [
        "Charles Babbage",
        "James Gosling",
        "Tim Berners Lee",
        "Bill Gates"
    ]
  },
    {
      numb: 39,
      question: "A social network can be represented as...",
      answer: "Graph",
      options: [
        "Graph",
        "Star",
        "Bus",
        "Ring"
    ]
  },
    {
      numb: 40,
      question: "How many bits are there in a nibble?",
      answer: "4",
      options: [
        "16",
        "32",
        "4",
        "8"
    ]
  },
    {
    numb: 41,
    question: "How long is an IPv6 address?",
    answer: "128 bits",
    options: [
      "32 bits",
      "128 bytes",
      "64 bits",
      "128 bits"
    ]
  },
    
      {
        numb: 42,
        question: "Different computers are connected to LAN by a cable and",
        answer: "Interface Card",
        options: [
          "Telephone lines",
          "Special wires",
          "Interface Card",
          "Modem"
        ]
  },
    {
      numb: 43,
      question: "Fibre optics have maximum segment",
      answer: "2000m",
      options: [
        "100m",
        "200m",
        "500m",
        "2000m"
      ]
  },
    {
    numb: 44,
    question: "Which of the following is the outcome of data processing?",
    answer: "Information",
    options: [
      "Output window",
      "Data ",
      "System",
      "Information"
    ]
  },
    {
    numb: 45,
    question: "Which are the operations that are performed on RAM?",
    answer: "Read and Write both",
    options: [
      "Write only",
      "Read only",
      "Read and Write both",
      "It depends on the user"
    ]
  },
    {
    numb: 46,
    question: "On the Internet.moving form one website to another is known as....",
    answer: "Browsing",
    options: [
      "Uploading",
      "Downloading",
      "Searching",
      "Browsing"
    ]
  },
    {
    numb: 47,
    question: "A computer on Internet i uniquely identified by...",
    answer: "IP address",
    options: [
      "memory address",
      "E-mail address",
      "Virtual address",
      "IP address"
    ]
  },
    {
    numb: 48,
    question: "Which of the following service is not available through E-Commerce?",
    answer: "Online Email",
    options: [
      "Online Search",
      "Online Email",
      "Buy & Sell",
      "Online Payment"
    ]
  },
    {
    numb: 49,
    question: "Which of the following was created by the US Military in 1969?",
    answer: "Arpanet",
    options: [
      "First Computer",
      "TCP/IP",
      "Arpanet",
      "Super Computer"
    ]
  },
    {
    numb: 50,
    question: "How many Digits are present in IMEI?",
    answer: "15",
    options: [
      "15",
      "9",
      "7",
      "12"
    ]
  },
      
];

