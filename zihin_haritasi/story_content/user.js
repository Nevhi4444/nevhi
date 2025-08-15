window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // menuSlideNumber kontrolü
var menuSlideNumber = player.GetVar("menuSlideNumber");
if (menuSlideNumber === undefined || menuSlideNumber === null) {
    console.warn("menuSlideNumber değişkeni tanımlı değil veya null. Varsayılan değer atanıyor.");
    menuSlideNumber = 0; // Varsayılan değer
}
console.log("menuSlideNumber:", menuSlideNumber);

// SlideNo işlemleri
var slideNo;
if (typeof menuSlideNumber === "number" && !isNaN(menuSlideNumber)) {
    slideNo = menuSlideNumber; // Geçerli ise menuSlideNumber değerini kullan
} else {
    slideNo = player.GetVar("slideNo") || 0; // Geçerli değilse mevcut slideNo değerini kullan
}

var formattedSlideNo = String(slideNo).padStart(2, '0');

player.SetVar("slideNoText", formattedSlideNo); // slideNoText güncelleniyor
player.SetVar("slideNo", slideNo); // slideNo'nun değeri güncelleniyor

// SlideTitle işlemleri
var projectSlideTitle = player.GetVar("projectSlideTitle");
player.SetVar("slideTitle", projectSlideTitle); // slideTitle güncelleniyor

}

window.Script2 = function()
{
  var player = GetPlayer();

var soruSay=player.GetVar("soruSay");
soruSay++;

var metinler = ["", "What is the term for protecting information, systems, and networks from unauthorized access?",
"Which of the following refers to malicious software such as viruses, trojans, and ransomware?",
"Phishing, spear phishing, and vishing are examples of which type of attack that relies on deceiving users?",
"DDoS, Man-in-the-Middle, and sniffing are examples of which category of threats?",
"The situation where unauthorized persons access sensitive data is defined as which type of threat?",
"Strong passwords, two-factor authentication, and firewalls are examples of which type of security measure?",
"Using device locks and storing data in secure locations are examples of which type of measure?",
"User training programs and social media safety practices belong to which type of measure?",
"Which law regulates the protection of personal data in Türkiye?",
"Which law regulates the protection of personal data in the European Union?",
"Official agreements between countries for cooperation in cybersecurity fall under which category?",
"Using artificial intelligence to detect cyber threats is referred to by which term?",
"Ensuring data integrity and security by using distributed ledger technology is called what?",
"Which security approach is based on continuously verifying every user and device accessing the network?",
"Measures taken to secure smart devices are referred to by which term?",
"Protecting data and applications stored in cloud environments is known as what?",
"Detecting cyberattacks and continuously monitoring for them is part of which process?",
"Regularly creating and storing copies of data falls under which category?",
"Plans to restore systems to working condition after a cyberattack are called what?",
"The process of examining cyber incidents to collect evidence is known as what?",
]; 
var alttext1,altext2,alttext3;
var soru_text = metinler;


var sayi_sec = soruSay;
player.SetVar("soruSay",soruSay);
player.SetVar("soru_sec", sayi_sec);
player.SetVar("soru_text", soru_text[sayi_sec]);

var text_map = {
    1: ["Cybersecurity", "Database","Internet"],
	2: ["Malware", "Social Engineering","Network Attacks"],   
   	3: ["Social Engineering", "Malware","Data Breaches"],   
   	4: ["Network Attacks", "Malware","Social Engineering"],   
    5: ["Data Breaches", "Network Attacks","Malware"],
    6: ["Technical Measures", "Physical Measures","User Awareness"],
    7: ["Physical Measures", "Technical Measures","User Awareness"],
    8: ["User Awareness", "Technical Measures","Physical Measures"],
    9: ["KVKK", "GDPR","ICA"],
    10: ["GDPR", "KVKK","Blockchain"],
    11: ["ICA", "KVKK","AI-based Threat"],
    12: ["AI-based Threat", "Blockchain","Zero Trust"],
    13: ["Blockchain", "IoT Security","Cloud Security"],
    14: ["Zero Trust", "VPN","AI-based"],
    15: ["IoT Security", "Cloud Security","AI-based Threat"],
    16: ["Cloud Security", "IoT Security","Technical Measures"],
    17: ["Incident Detection", "Backup Strategies","Recovery Plans"],
    18: ["Backup Strategies", "Digital Forensics","Zero Trust"],
    19: ["Recovery Plans", "Technical Measures","Incident"],
    20: ["Digital Forensics", "Backup Strategies","Malware"]  
 
   };

// Tekrarlayan işlemleri fonksiyona çektik
function handleSayiSec(sayi, metinler) {
    player.SetVar(`sayi${sayi}`, 0);

    var textler = ["", ...metinler];
    var text = [];
    var usedIndices = [];
    
    for (var i = 1; i < 4; i++) {
        var sayi_sec;
        do {
            sayi_sec = [1, 2,3][Math.floor(Math.random() * 3)];
        } while (usedIndices.includes(sayi_sec));

        usedIndices.push(sayi_sec);
        text[i] = textler[sayi_sec];
        player.SetVar("alt_text"+i,"Tıkla, " + textler[sayi_sec].toLowerCase());
    }

    for (var j = 1; j < 4; j++) {
        player.SetVar("text" + j, text[j]);
    }

    for (var k = 1; k <= 3; k++) {
        for (var l = 0; l < textler.length; l++) {
            if (text[k] === textler[l]) {
                player.SetVar("s" + k, l);
                break;
            }
        }
    }
}

if (text_map[sayi_sec]) {
    handleSayiSec(sayi_sec, text_map[sayi_sec]);
}

}

window.Script3 = function()
{
  var player = GetPlayer();


var soruSay=player.GetVar("soruSay");
soruSay++;

var metinler = ["", "What is the term for protecting information, systems, and networks from unauthorized access?",
"Which of the following refers to malicious software such as viruses, trojans, and ransomware?",
"Phishing, spear phishing, and vishing are examples of which type of attack that relies on deceiving users?",
"DDoS, Man-in-the-Middle, and sniffing are examples of which category of threats?",
"The situation where unauthorized persons access sensitive data is defined as which type of threat?",
"Strong passwords, two-factor authentication, and firewalls are examples of which type of security measure?",
"Using device locks and storing data in secure locations are examples of which type of measure?",
"User training programs and social media safety practices belong to which type of measure?",
"Which law regulates the protection of personal data in Türkiye?",
"Which law regulates the protection of personal data in the European Union?",
"Official agreements between countries for cooperation in cybersecurity fall under which category?",
"Using artificial intelligence to detect cyber threats is referred to by which term?",
"Ensuring data integrity and security by using distributed ledger technology is called what?",
"Which security approach is based on continuously verifying every user and device accessing the network?",
"Measures taken to secure smart devices are referred to by which term?",
"Protecting data and applications stored in cloud environments is known as what?",
"Detecting cyberattacks and continuously monitoring for them is part of which process?",
"Regularly creating and storing copies of data falls under which category?",
"Plans to restore systems to working condition after a cyberattack are called what?",
"The process of examining cyber incidents to collect evidence is known as what?",
]; 

var alttext1,altext2,alttext3;
var soru_text = metinler;


  	var sayi_sec = soruSay;
  	player.SetVar("soruSay",soruSay);
    player.SetVar("soru_sec", sayi_sec);
    player.SetVar("soru_text", soru_text[sayi_sec]);

var text_map = {
    1: ["Cybersecurity", "Database","Internet"],
	2: ["Malware", "Social Engineering","Network Attacks"],   
   	3: ["Social Engineering", "Malware","Data Breaches"],   
   	4: ["Network Attacks", "Malware","Social Engineering"],   
    5: ["Data Breaches", "Network Attacks","Malware"],
    6: ["Technical Measures", "Physical Measures","User Awareness"],
    7: ["Physical Measures", "Technical Measures","User Awareness"],
    8: ["User Awareness", "Technical Measures","Physical Measures"],
    9: ["KVKK", "GDPR","ICA"],
    10: ["GDPR", "KVKK","Blockchain"],
    11: ["ICA", "KVKK","AI-based Threat"],
    12: ["AI-based Threat", "Blockchain","Zero Trust"],
    13: ["Blockchain", "IoT Security","Cloud Security"],
    14: ["Zero Trust", "VPN","AI-based Threat"],
    15: ["IoT Security", "Cloud Security","AI-based Threat"],
    16: ["Cloud Security", "IoT Security","Technical Measures"],
    17: ["Incident Detection", "Backup Strategies","Recovery Plans"],
    18: ["Backup Strategies", "Digital Forensics","Zero Trust"],
    19: ["Recovery Plans", "Technical Measures","Incident Detection"],
    20: ["Digital Forensics", "Backup Strategies","Malware"]  
 
   };
// Tekrarlayan işlemleri fonksiyona çektik
function handleSayiSec(sayi, metinler) {
    player.SetVar(`sayi${sayi}`, 0);

    var textler = ["", ...metinler];
    var text = [];
    var usedIndices = [];
    
    for (var i = 1; i < 4; i++) {
        var sayi_sec;
        do {
            sayi_sec = [1, 2,3][Math.floor(Math.random() * 3)];
        } while (usedIndices.includes(sayi_sec));

        usedIndices.push(sayi_sec);
        text[i] = textler[sayi_sec];
        player.SetVar("alt_text"+i,"Tıkla, " + textler[sayi_sec].toLowerCase());
    }

    for (var j = 1; j < 4; j++) {
        player.SetVar("text" + j, text[j]);
    }

    for (var k = 1; k <= 3; k++) {
        for (var l = 0; l < textler.length; l++) {
            if (text[k] === textler[l]) {
                player.SetVar("s" + k, l);
                break;
            }
        }
    }
}

if (text_map[sayi_sec]) {
    handleSayiSec(sayi_sec, text_map[sayi_sec]);
}

}

};
