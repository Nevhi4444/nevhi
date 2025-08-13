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
window.Script17 = function()
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

window.Script18 = function()
{
  var player = GetPlayer();

const nameID = '5nUrFGgQUGe';
const surnameID = '6pA0k2kuv5Z';

const nameInput = document.getElementById(`acc-${nameID}`);
const surnameInput = document.getElementById(`acc-${surnameID}`);

function checkInputs() {
  const nameVal = nameInput ? nameInput.value.trim() : "";
  const surnameVal = surnameInput ? surnameInput.value.trim() : "";

  // Boş değilse aktif
  const aktif = nameVal !== "" && surnameVal !== "";
  const name=nameVal !== "";
  const surname=surnameVal !== "";

  player.SetVar("butonAktif", aktif);
  console.log("butonAktif:", aktif);
  player.SetVar("butonName",name);
  player.SetVar("butonSurname",surname);
  
}

if (nameInput && surnameInput) {
  nameInput.addEventListener("input", checkInputs);
  surnameInput.addEventListener("input", checkInputs);

  checkInputs();
}

}

window.Script19 = function()
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

window.Script20 = function()
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

window.Script21 = function()
{
  var player = GetPlayer();

const bildigimIDs = [
  '6ieZDNMPZYN', '6BdI9THY8al', '5bFVGbkuLER',
  '5pkPuZEjyAY', '5z39nk1XOjc', '5z9CC6xdElw', '6ieLhgoKxtq'
];

const ogrenmekIDs = [
  '6eEm7zV4km0', '6YbscFIu9sA', '5l6F0zmWigE',
  '6JC4aHau366', '5ug3nVgq8Fg', '5sNGuHi6Tqu', '68BuZDk3Ofp'
];

function getInputsByIds(ids) {
  return ids.map(id => {
    const el = document.getElementById(`acc-${id}`);
    if (!el) console.warn("Input bulunamadı:", id);
    return el;
  });
}

function Inputs() {
  const bildigimInputs = getInputsByIds(bildigimIDs);
  const ogrenmekInputs = getInputsByIds(ogrenmekIDs);

  function checkInputs() {
    // Bildiğim inputlar için her birinin doluluk durumunu ayarla
    bildigimInputs.forEach((input, i) => {
      const dolu = input && input.value.trim() !== "";
      player.SetVar(`bildigimAktif${i + 1}`, dolu);
    });

    // Öğrenmek istediğim inputlar için her birinin doluluk durumunu ayarla
    ogrenmekInputs.forEach((input, i) => {
      const dolu = input && input.value.trim() !== "";
      player.SetVar(`ogrenAktif${i + 1}`, dolu);
    });

    // Genel buton aktif durumu (en az bir input dolu ise)
    const bildigimDolu = bildigimInputs.some(input => input && input.value.trim() !== "");
    const ogrenmekDolu = ogrenmekInputs.some(input => input && input.value.trim() !== "");
    const aktif = bildigimDolu && ogrenmekDolu;
    player.SetVar("butonAktif", aktif);
    console.log("butonAktif:", aktif);
  }

  [...bildigimInputs, ...ogrenmekInputs].forEach(input => {
    if (input) input.addEventListener('keyup', checkInputs);
  });

  checkInputs();
}

setTimeout(Inputs, 300);

}

window.Script22 = function()
{
  var styles = `
@media print {
  @page {
    size: A4 landscape;
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  body * {
    visibility: hidden;
  }

  /* İçerik alanını tam genişlikte göster */
  #slide {
    visibility: visible !important;
    position: static !important;
    top: auto !important;
    left: auto !important;
    transform: none !important;
    width: 100% !important;
    height: auto !important;
    margin: 0 auto !important;
    page-break-before: avoid;
    page-break-after: avoid;
    page-break-inside: avoid;
  }

  #slide * {
    visibility: visible !important;
  }

  /* Yazdırma sırasında yan menüyü gizle */
  .sidebar, #sidebar, .menu-panel, .side-menu {
    display: none !important;
    visibility: hidden !important;
  }
}
`;

var stylesheet = document.createElement('style');
stylesheet.type = 'text/css';
stylesheet.innerText = styles;
document.head.appendChild(stylesheet);

const indir = object('68efAKclttZ');

let menuElement = document.querySelector('#sidebar, .sidebar, .menu-panel, .side-menu');
let menuWasOpen = false;

window.addEventListener('beforeprint', () => {
  if (indir) indir.style.display = 'none';

  if (menuElement) {
    if (menuElement.classList.contains('active') || menuElement.classList.contains('open')) {
      menuWasOpen = true;
      menuElement.classList.remove('active');
      menuElement.classList.remove('open');
    }
  }
});

window.addEventListener('afterprint', () => {
  if (indir) indir.style.display = '';

  if (menuElement && menuWasOpen) {
    menuElement.classList.add('active');
  }
});

setTimeout(() => window.print(), 100);

}

window.Script23 = function()
{
  var player = GetPlayer();


$.ajax({
  url: "https://script.google.com/macros/s/AKfycbyAwm3ucdtkgkZj5_jhQmZJdC_BbzXp04X2ay5uFGRtiqxqEG2i4NnDGsjcrUS8207_Jw/exec",
  type: "POST",
  data: {
    "Name": player.GetVar("name"),
    "Surname": player.GetVar("surname"),
    
    "Kavram1": player.GetVar("bildigim1"),
    "Öğren1": player.GetVar("ogren1"),
    "Kavram2": player.GetVar("bildigim2"),
    "Öğren2": player.GetVar("ogren2"),
    "Kavram3": player.GetVar("bildigim3"),
    "Öğren3": player.GetVar("ogren3"),
    "Kavram4": player.GetVar("bildigim4"),
    "Öğren4": player.GetVar("ogren4"),
    "Kavram5": player.GetVar("bildigim5"),
    "Öğren5": player.GetVar("ogren5"),
    "Kavram6": player.GetVar("bildigim6"),
    "Öğren6": player.GetVar("ogren6"),
    "Kavram7": player.GetVar("bildigim7"),
    "Öğren7": player.GetVar("ogren7")
    
      
    
    
  },
  success: function(data) {
    console.log(data);
  },
  error: function(err) {
    console.log('Hata:', err);
  }
});

return false;
}

window.Script24 = function()
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

window.Script25 = function()
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

window.Script26 = function()
{
  var player = GetPlayer();

var sayilar = [
  player.GetVar("sayi1"), player.GetVar("sayi2"), player.GetVar("sayi3"), player.GetVar("sayi4"),
  player.GetVar("sayi5"), player.GetVar("sayi6"), player.GetVar("sayi7"), player.GetVar("sayi8"),
  player.GetVar("sayi9"), player.GetVar("sayi10"), player.GetVar("sayi11"), player.GetVar("sayi12"),
  player.GetVar("sayi13"), player.GetVar("sayi14"), player.GetVar("sayi15"), player.GetVar("sayi16"),
  player.GetVar("sayi17"), player.GetVar("sayi18"), player.GetVar("sayi19"), player.GetVar("sayi20"),
  
];

var soruSay=player.GetVar("soruSay");

var soru_text = [
  "", "Phishing", "Malware", "Ransomware", "Firewall", "Encryption", "Zero-Day", "Botnet", "Two-Factor Authentication (2FA)", "Social Engineering",
  "VPN (Virtual Private Network)", "DDoS (Distributed Denial of Service)", "Brute Force Attack", "Trojan Horse", "Spyware", "Adware", "Patch", "Vulnerability", "Exploit",
  "Penetration Testing", "Incident Response"];

var cevapA = [
  "",
  "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity via email, text, or websites.",
  "Malicious software designed to damage, disrupt, or gain unauthorized access to systems.",
  "A type of malware that encrypts files and demands payment for their release.",
  "A network security device or software that monitors and controls incoming and outgoing network traffic.",
  "The process of converting data into a coded form to prevent unauthorized access.",
  "A software vulnerability unknown to the vendor, exploited before a fix is released.",
  "A network of infected devices controlled remotely by attackers.",
  "A security process requiring two different forms of verification to access a system.",
  "Manipulating people into revealing confidential information or performing certain actions.",
  "A service that encrypts internet traffic and masks the user’s IP address.",
  "An attack that overwhelms a target system with massive traffic to make it unavailable.",
  "A trial-and-error method used to crack passwords or encryption keys.",
  "Malware disguised as legitimate software to gain access to systems.",
  "Software that secretly collects user data without consent.",
  "Software that automatically displays or downloads advertisements, often unwanted.",
  "A software update designed to fix vulnerabilities or bugs.",
  "A weakness in a system that can be exploited by attackers.",
  "A piece of code or technique used to take advantage of a vulnerability.",
  "Simulated cyberattacks conducted to evaluate system security.",
   "The process of handling and mitigating the impact of a cybersecurity breach."
];


// Aktif olanları filtrele
var filtered = sayilar.filter(x => x > 0);

// Eğer hiç soru kalmadıysa tamamla'yı 1 yap
if (filtered.length === 0) {
  player.SetVar("soru_sec", 100);
  soru_text="You have completed all the concepts."
  player.SetVar("soru_text", soru_text);
  
} else {
  // Rastgele bir soru seç
  var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];
soruSay++;
  // Seçilen verileri ayarla
  player.SetVar("soru_sec", sayi_sec);
  player.SetVar("soru_text", soru_text[sayi_sec]);
  player.SetVar("cevap", cevapA[sayi_sec]);
  player.SetVar("altTextSoru", "Kartı çevir, " + soru_text[sayi_sec]);
  player.SetVar("altTextDogru", "Kartı tekrar çevir, " + soru_text[sayi_sec]);
  player.SetVar("soruSay",soruSay);

  // Tekrar seçilmesin diye sıfırla
  player.SetVar(`sayi${sayi_sec}`, 0);
}

}

window.Script27 = function()
{
  var player = GetPlayer();

var sayilar = [
  player.GetVar("sayi1"), player.GetVar("sayi2"), player.GetVar("sayi3"), player.GetVar("sayi4"),
  player.GetVar("sayi5"), player.GetVar("sayi6"), player.GetVar("sayi7"), player.GetVar("sayi8"),
  player.GetVar("sayi9"), player.GetVar("sayi10"), player.GetVar("sayi11"), player.GetVar("sayi12"),
  player.GetVar("sayi13"), player.GetVar("sayi14"), player.GetVar("sayi15"), player.GetVar("sayi16"),
  player.GetVar("sayi17"), player.GetVar("sayi18"), player.GetVar("sayi19"), player.GetVar("sayi20"),
  
];

var soruSay=player.GetVar("soruSay");

var soru_text = [
  "", "Phishing", "Malware", "Ransomware", "Firewall", "Encryption", "Zero-Day", "Botnet", "Two-Factor Authentication (2FA)", "Social Engineering",
  "VPN (Virtual Private Network)", "DDoS (Distributed Denial of Service)", "Brute Force Attack", "Trojan Horse", "Spyware", "Adware", "Patch", "Vulnerability", "Exploit",
  "Penetration Testing", "Incident Response"];

var cevapA = [
  "",
  "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity via email, text, or websites.",
  "Malicious software designed to damage, disrupt, or gain unauthorized access to systems.",
  "A type of malware that encrypts files and demands payment for their release.",
  "A network security device or software that monitors and controls incoming and outgoing network traffic.",
  "The process of converting data into a coded form to prevent unauthorized access.",
  "A software vulnerability unknown to the vendor, exploited before a fix is released.",
  "A network of infected devices controlled remotely by attackers.",
  "A security process requiring two different forms of verification to access a system.",
  "Manipulating people into revealing confidential information or performing certain actions.",
  "A service that encrypts internet traffic and masks the user’s IP address.",
  "An attack that overwhelms a target system with massive traffic to make it unavailable.",
  "A trial-and-error method used to crack passwords or encryption keys.",
  "Malware disguised as legitimate software to gain access to systems.",
  "Software that secretly collects user data without consent.",
  "Software that automatically displays or downloads advertisements, often unwanted.",
  "A software update designed to fix vulnerabilities or bugs.",
  "A weakness in a system that can be exploited by attackers.",
  "A piece of code or technique used to take advantage of a vulnerability.",
  "Simulated cyberattacks conducted to evaluate system security.",
  "The process of handling and mitigating the impact of a cybersecurity breach."
];

// Aktif olanları filtrele
var filtered = sayilar.filter(x => x > 0);

// Eğer hiç soru kalmadıysa tamamla'yı 1 yap
if (filtered.length === 0) {
  player.SetVar("soru_sec", 100);
} else {
  // Rastgele bir soru seç
  var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];
soruSay++;
  // Seçilen verileri ayarla
  player.SetVar("soru_sec", sayi_sec);
  player.SetVar("soru_text", soru_text[sayi_sec]);
  player.SetVar("cevap", cevapA[sayi_sec]);
  player.SetVar("altTextSoru", "Kartı çevir, " + soru_text[sayi_sec]);
  player.SetVar("altTextDogru", "Kartı tekrar çevir, " + soru_text[sayi_sec]);
  
  player.SetVar("soruSay",soruSay);

  // Tekrar seçilmesin diye sıfırla
  player.SetVar(`sayi${sayi_sec}`, 0);
}

}

window.Script28 = function()
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

window.Script29 = function()
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

window.Script30 = function()
{
  var player = GetPlayer();
var s1=0;
var s2=0;
var s3=0;

var sayilar = [player.GetVar("sayi1"), player.GetVar("sayi2"), player.GetVar("sayi3"),player.GetVar("sayi4"),player.GetVar("sayi5"),player.GetVar("sayi6")];
var metinler = ["", 
"A cybersecurity expert hired by a bank to find security vulnerabilities in the system and report them to management is what type of hacker?", 
"An individual who independently finds a security flaw in a website, informs the site owner, but sometimes conducts unauthorized tests is what type of hacker?", 
"A person who steals customer data from a company and sells it on the dark web is what type of hacker?", 
"A security professional officially authorized to test a government agency’s network and prepare a report is what type of hacker?",
"A person who discovers a software vulnerability and informs the vendor, but also publicly shares the flaw on their blog is what type of hacker?",
"An attacker who breaks into a company’s network and demands ransom in exchange for returning critical data is what type of hacker?",


];
var alttext1,altext2;
var soru_text = metinler;

var filtered = sayilar.filter(x => x > 0);

if (filtered.length === 0) {
    // Eğer seçilebilecek sayı kalmadıysa
    player.SetVar("soru_sec", 10);
} else {
    var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];
    player.SetVar("soru_sec", sayi_sec);
    player.SetVar("soru_text", soru_text[sayi_sec]);
    player.SetVar("altTextSoru","Soru, " + soru_text[sayi_sec]);

var text_map = {
    1: ["White Hat", "Grey Hat","Black Hat"],
    2: ["Grey Hat", "White Hat","Black Hat"],
    3: ["Black Hat", "White Hat","Grey Hat"],
    4: ["White Hat", "Black Hat","Grey Hat"],
    5: ["Grey Hat", "White Hat","Black Hat"],
    6: ["Black Hat", "White Hat","Grey Hat"],
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
        
    }

    for (var j = 1; j < 4; j++) {
        player.SetVar("text" + j, text[j]);
        
    }

    for (var k = 1; k <= 3; k++) {
        for (var l = 0; l < textler.length; l++) {
            if (text[k] === textler[l]) {
                player.SetVar("s" + k, l);
                 player.SetVar("alt_text"+k,"Tıkla, " + textler[l].toLowerCase());
                break;
            }
        }
    }
}

if (text_map[sayi_sec]) {
    handleSayiSec(sayi_sec, text_map[sayi_sec]);
}

}

}

window.Script31 = function()
{
  var player = GetPlayer();
var sayilar = [player.GetVar("sayi1"), player.GetVar("sayi2"), player.GetVar("sayi3"),player.GetVar("sayi4"),player.GetVar("sayi5"),player.GetVar("sayi6")];
var metinler = ["", 
"A cybersecurity expert hired by a bank to find security vulnerabilities in the system and report them to management is what type of hacker?", 
"An individual who independently finds a security flaw in a website, informs the site owner, but sometimes conducts unauthorized tests is what type of hacker?", 
"A person who steals customer data from a company and sells it on the dark web is what type of hacker?", 
"A security professional officially authorized to test a government agency’s network and prepare a report is what type of hacker?",
"A person who discovers a software vulnerability and informs the vendor, but also publicly shares the flaw on their blog is what type of hacker?",
"An attacker who breaks into a company’s network and demands ransom in exchange for returning critical data is what type of hacker?",


];

var soru_text = metinler;

var filtered = sayilar.filter(x => x > 0);
var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];
player.SetVar("soru_sec", sayi_sec);
player.SetVar("soru_text", soru_text[sayi_sec]);
player.SetVar("altTextSoru","Soru, " + soru_text[sayi_sec]);




var text_map = {
    1: ["White Hat", "Grey Hat","Black Hat"],
    2: ["Grey Hat", "White Hat","Black Hat"],
    3: ["Black Hat", "White Hat","Grey Hat"],
    4: ["White Hat", "Black Hat","Grey Hat"],
    5: ["Grey Hat", "White Hat","Black Hat"],
    6: ["Black Hat", "White Hat","Grey Hat"],
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
     
        
        
        
    }

    for (var j = 1; j < 4; j++) {
        player.SetVar("text" + j, text[j]);
        
    }

    for (var k = 1; k <= 3; k++) {
        for (var l = 0; l < textler.length; l++) {
            if (text[k] === textler[l]) {
                player.SetVar("s" + k, l);
                player.SetVar("alt_text"+k,"Tıkla, " + textler[l].toLowerCase());
                break;
            }
        }
    }
}

if (text_map[sayi_sec]) {
    handleSayiSec(sayi_sec, text_map[sayi_sec]);
}


}

window.Script32 = function()
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

window.Script33 = function()
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

window.Script34 = function()
{
  var player = GetPlayer();

// Temel metinler
var text1 = "The email appeared genuine by using the bank’s logo.";
var text2 = "Emma realized something was wrong right after entering her information.";
var text3 = "The incident was a phishing attack.";
var text4 = "Emma’s quick action helped trace the attacker’s server.";
var text5 = "Emma verified the email link before clicking it.";
var text6 = "The bank waited for days before freezing Emma’s account. ";
var text7 = "Alex was a Black Hat hacker working at the bank. ";
var text8 = "Only one type of hacker appeared in the story. ";

// Doğru metinler dizisi (başlangıçta text4 ve text5 eklenmeden önce)
var dogru = ["", text1, text2, text3,text4];  // İlk başta sadece text1, text2, text3
var dogruSayısı=dogru.length;
dogruSayısı=dogruSayısı-1;
player.SetVar("dogruSayısı",dogruSayısı);

// Sayılar dizisi (0. index'i boş bırakmak için 1, 2, 3'ü kullanıyoruz)
var sayilar = [1, 2, 3,4];

// Filtreleme işlemi (1, 2, 3'ü seçiyoruz)
var filtered = sayilar.filter(x => x > 0 && x < dogru.length);

// Rastgele bir sayı seç
var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];

// Seçilen öğeyi "dogru" dizisinden al
var secilenText = dogru[sayi_sec];

// Seçilen öğeyi "dogru" dizisinden sil
dogru.splice(sayi_sec, 1);

// Seçilen değeri player'a atama
player.SetVar("text8", secilenText);
player.SetVar("dalt_text8" , "Doğru: " + secilenText.toLowerCase());
player.SetVar("alt_text8"  , "Tıkla, " + secilenText);

// Kalan metinlere text4 ve text5'ü ekle
dogru.push(text5,text6,text7,text8);

// Kalan metinlere göre soru_text dizisini oluşturma
var soru_text = dogru.filter(text => text !== "")  // Boş olan öğeleri dışarıda bırak
                      .map((text, index) => {
                          return { text: text, index: index + 1 };  // Metinlere 1'den başlayarak index atama
                      });

// Sonuçları görmek için
console.log("Güncellenmiş soru_text:", soru_text);

// Diziyi karıştırma fonksiyonu
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Array'ı karıştır
    }
}

// Diziyi karıştır
shuffleArray(soru_text);

// Yardımcı fonksiyon, metinleri biçimlendirip player'a set ediyor
function setTextVars(i, obj) {
    var formattedText = obj.text.toLowerCase(); // Metni küçük harfe çevir

    player.SetVar("text" + i, obj.text); // Orijinal metni ayarla
    player.SetVar("alt_text" + i, "Tıkla, " + formattedText); // Küçük harfe çevrilmiş metin

    player.SetVar("c" + i, obj.index); // Orijinal indeksi kaydet
    if (obj.index < 6) {
        player.SetVar("dalt_text" + i, "Doğru: " + formattedText);
    } else {
        player.SetVar("yalt_text" + i, "Yanlış: " + formattedText);
    }
}

// Döngü ile tüm metinleri ayarla
for (var i = 0; i < soru_text.length; i++) {
    setTextVars(i + 1, soru_text[i]);
}


}

window.Script35 = function()
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

window.Script36 = function()
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

window.Script37 = function()
{
  var player = GetPlayer();
var sayilar = [
    player.GetVar("sayi1"),
    player.GetVar("sayi2"),
    player.GetVar("sayi3"),
    player.GetVar("sayi4"),
    player.GetVar("sayi5"),
    player.GetVar("sayi6")
];

var metinler = [
    "",
    "Which type of malware infects files and usually requires user interaction to spread?",
    "What malware spreads automatically across networks without any user intervention?",
    "Which malicious software appears harmless or useful but provides remote access in the background?",
    "What type of malware encrypts files on a computer and demands payment from the user?",
    "Which malware secretly collects user data without their knowledge, causing privacy violations?",
    "Which malware can self-replicate and often reduces system performance?"
];


var soru_text = metinler;

var filtered = sayilar.filter(x => x > 0);

 var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];
    player.SetVar("soru_sec", sayi_sec);
    player.SetVar("soru_text", soru_text[sayi_sec]);
    player.SetVar("altTextSoru","Soru, " + soru_text[sayi_sec]);



   
  var text_map = {
    1: ["Virus", "Worm", "Spyware", "Trojan Horse"],
    2: ["Worm", "Virus", "Spyware", "Ransomware"],
    3: ["Trojan Horse", "Spyware", "Virus", "Worm"],
    4: ["Ransomware", "Virus", "Spyware", "Worm"],
    5: ["Spyware", "Trojan Horse", "Virus", "Worm"],
    6: ["Worm", "Virus", "Spyware", "Trojan Horse"],
};
   

// Tekrarlayan işlemleri fonksiyona çektik
function handleSayiSec(sayi, metinler) {
    player.SetVar(`sayi${sayi}`, 0);

    var textler = ["", ...metinler];
    var text = [];
    var usedIndices = [];
    
    for (var i = 1; i < 5; i++) {
        var sayi_sec;
        do {
            sayi_sec = [1,2,3,4][Math.floor(Math.random() * 4)];
            
  
            
        } while (usedIndices.includes(sayi_sec));

        usedIndices.push(sayi_sec);
        text[i] = textler[sayi_sec];
     
        
        
        
    }

    for (var j = 1; j < 5; j++) {
        player.SetVar("text" + j, text[j]);
        
    }

    for (var k = 1; k <= 4; k++) {
        for (var l = 0; l < textler.length; l++) {
            if (text[k] === textler[l]) {
                player.SetVar("s" + k, l);
                player.SetVar("alt_text"+k,"Tıkla, " + textler[l].toLowerCase());
                break;
            }
        }
    }
}

if (text_map[sayi_sec]) {
    handleSayiSec(sayi_sec, text_map[sayi_sec]);
}


}

window.Script38 = function()
{
  var player = GetPlayer();


var sayilar = [
    player.GetVar("sayi1"),
    player.GetVar("sayi2"),
    player.GetVar("sayi3"),
    player.GetVar("sayi4"),
    player.GetVar("sayi5"),
    player.GetVar("sayi6")
];

var metinler = [
    "",
    "Which type of malware infects files and usually requires user interaction to spread?",
    "What malware spreads automatically across networks without any user intervention?",
    "Which malicious software appears harmless or useful but provides remote access in the background?",
    "What type of malware encrypts files on a computer and demands payment from the user?",
    "Which malware secretly collects user data without their knowledge, causing privacy violations?",
    "Which malware can self-replicate and often reduces system performance?"
];



var soru_text = metinler;

var filtered = sayilar.filter(x => x > 0);

if (filtered.length === 0) {
    // Eğer seçilebilecek sayı kalmadıysa
    player.SetVar("soru_sec", 10);
} else {
    var sayi_sec = filtered[Math.floor(Math.random() * filtered.length)];
   
   player.SetVar("soru_sec", sayi_sec);
    player.SetVar("soru_text", soru_text[sayi_sec]);
    player.SetVar("altTextSoru","Soru, " + soru_text[sayi_sec]);



   
  var text_map = {
    1: ["Virus", "Worm", "Spyware", "Trojan Horse"],
    2: ["Worm", "Virus", "Spyware", "Ransomware"],
    3: ["Trojan Horse", "Spyware", "Virus", "Worm"],
    4: ["Ransomware", "Virus", "Spyware", "Worm"],
    5: ["Spyware", "Trojan Horse", "Virus", "Worm"],
    6: ["Worm", "Virus", "Spyware", "Trojan Horse"],
};
   

// Tekrarlayan işlemleri fonksiyona çektik
function handleSayiSec(sayi, metinler) {
    player.SetVar(`sayi${sayi}`, 0);

    var textler = ["", ...metinler];
    var text = [];
    var usedIndices = [];
    
    for (var i = 1; i < 5; i++) {
        var sayi_sec;
        do {
            sayi_sec = [1,2,3,4][Math.floor(Math.random() * 4)];
            
  
            
        } while (usedIndices.includes(sayi_sec));

        usedIndices.push(sayi_sec);
        text[i] = textler[sayi_sec];
     
        
        
        
    }

    for (var j = 1; j < 5; j++) {
        player.SetVar("text" + j, text[j]);
        
    }

    for (var k = 1; k <= 4; k++) {
        for (var l = 0; l < textler.length; l++) {
            if (text[k] === textler[l]) {
                player.SetVar("s" + k, l);
                player.SetVar("alt_text"+k,"Tıkla, " + textler[l].toLowerCase());
                break;
            }
        }
    }
}

if (text_map[sayi_sec]) {
    handleSayiSec(sayi_sec, text_map[sayi_sec]);
}
}



}

window.Script39 = function()
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

window.Script40 = function()
{
  var player = GetPlayer();
var text1 = "I clearly and fully understood the topic.";
var text2 = "I believe I can apply what I have learned in daily life.";
var text3 = "The activities in the lesson supported my learning.";
var text4 = "The examples related to the topic were sufficient and explanatory.";
var text5 = "I have the necessary materials to review the topic.";

//var text6 = "Yazım kurallarını uygulayabilir ve uygun noktalama işaretlerini kullanabilirim.";
//var text7 = "Aynı anlamı farklı sözcükler kullanarak sağlayabilirim.";
//var text8 = "Metnime uygun bir başlık yazabilirim."; 

var soru_text = ["", text1, text2, text3, text4, text5];

// Yardımcı fonksiyon, metinleri biçimlendirip player'a set ediyor
function setTextVars(i, text) {
    var formattedText = text.toLowerCase(); // Metni küçük harfe çevir

    player.SetVar("text" + i, text);
    player.SetVar("ealt_text" + i, "Evet, " + formattedText);
    player.SetVar("esalt_text" + i, "Evet, seçildi: " + formattedText);
    player.SetVar("kalt_text" + i, "Kısmen, " + formattedText);
    player.SetVar("ksalt_text" + i, "Kısmen, seçildi: " + formattedText);
    player.SetVar("halt_text" + i, "Hayır, " + formattedText);
    player.SetVar("hsalt_text" + i, "Hayır, seçildi: " + formattedText);
}

// Döngü ile tüm metinleri ayarla
for (var i = 1; i <= 5; i++) {
    setTextVars(i, soru_text[i]);
}

}

window.Script41 = function()
{
  var player=GetPlayer();

var sayilar = [player.GetVar("soru1_kontrol"), player.GetVar("soru2_kontrol"), player.GetVar("soru3_kontrol"), player.GetVar("soru4_kontrol"), player.GetVar("soru5_kontrol")];

if (sayilar.every(num => num === 1)) {
    player.SetVar("btn_ktrl",1);
} else {
   player.SetVar("btn_ktrl",0);
}












}

};
