//Dictionary, dass als Keys die Subcategorien hat und als Values Arrays mit den Pfaden für die Zufallsfunktion
var themen={"Betriebsvorschriften":[],
"Eignung":[],
"Gefahrenlehre":[],
"Technik":[],
"Umweltschutz":[],
"Verhalten":[],
"Verkehrszeichen":[],
"Vorfahrt":[]
}
function zufallsmodus_betriebsvorschriften() {
    
    var questions = [ '/questions/Betriebsvorschriften/2.6.01-003.html', '/questions/Betriebsvorschriften/2.6.01-105.html',
    '/questions/Betriebsvorschriften/2.6.01-106.html', '/questions/Betriebsvorschriften/2.6.02-011.html',
    '/questions/Betriebsvorschriften/2.6.02-013.html', '/questions/Betriebsvorschriften/2.6.02-014.html',
    '/questions/Betriebsvorschriften/2.6.03-001.html','/questions/Betriebsvorschriften/2.6.03-102.html',
    '/questions/Betriebsvorschriften/2.6.03-105.html','/questions/Betriebsvorschriften/2.6.03-106.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}

function zufallsmodus_eignung() {
    
    var questions = [ '/questions/Gefahrenlehre/1.1.01-001.html', '/questions/Gefahrenlehre/1.1.01-002.html', '/questions/Gefahrenlehre/1.1.01-003.html', '//questions/Gefahrenlehre/1.1.01-004.html',
    '/questions/Gefahrenlehre/1.1.01-101.html', '/questions/Gefahrenlehre/1.1.01-102.html', '/questions/Gefahrenlehre/1.1.01-103.html', '/questions/Gefahrenlehre/1.1.01-104.html', 
    '/questions/Gefahrenlehre/1.1.01-107.html', '/questions/Gefahrenlehre/1.1.01-108.html', '/questions/Gefahrenlehre/1.1.01-109.html', '/questions/Gefahrenlehre/1.1.01-110.html', 
    '/questions/Gefahrenlehre/1.1.01-111.html', '/questions/Gefahrenlehre/1.1.01-112.html', '/questions/Gefahrenlehre/1.1.01-113.html', '/questions/Gefahrenlehre/2.1.01-001.html', '/questions/Gefahrenlehre/2.1.01-003.html', 
    '/questions/Gefahrenlehre/2.1.01-004.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}

function zufallsmodus_gefahrenlehre() {
    
    var questions = [ '/questions/Gefahrenlehre/1.1.01-001.html', '/questions/Gefahrenlehre/1.1.01-002.html', '/questions/Gefahrenlehre/1.1.01-003.html', '//questions/Gefahrenlehre/1.1.01-004.html',
    '/questions/Gefahrenlehre/1.1.01-101.html', '/questions/Gefahrenlehre/1.1.01-102.html', '/questions/Gefahrenlehre/1.1.01-103.html', '/questions/Gefahrenlehre/1.1.01-104.html', 
    '/questions/Gefahrenlehre/1.1.01-107.html', '/questions/Gefahrenlehre/1.1.01-108.html', '/questions/Gefahrenlehre/1.1.01-109.html', '/questions/Gefahrenlehre/1.1.01-110.html', 
    '/questions/Gefahrenlehre/1.1.01-111.html', '/questions/Gefahrenlehre/1.1.01-112.html', '/questions/Gefahrenlehre/1.1.01-113.html', '/questions/Gefahrenlehre/2.1.01-001.html', '/questions/Gefahrenlehre/2.1.01-003.html', 
    '/questions/Gefahrenlehre/2.1.01-004.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}
function zufallsmodus_technik() {
    
    var questions = [ '/questions/Gefahrenlehre/1.1.01-001.html', '/questions/Gefahrenlehre/1.1.01-002.html', '/questions/Gefahrenlehre/1.1.01-003.html', '//questions/Gefahrenlehre/1.1.01-004.html',
    '/questions/Gefahrenlehre/1.1.01-101.html', '/questions/Gefahrenlehre/1.1.01-102.html', '/questions/Gefahrenlehre/1.1.01-103.html', '/questions/Gefahrenlehre/1.1.01-104.html', 
    '/questions/Gefahrenlehre/1.1.01-107.html', '/questions/Gefahrenlehre/1.1.01-108.html', '/questions/Gefahrenlehre/1.1.01-109.html', '/questions/Gefahrenlehre/1.1.01-110.html', 
    '/questions/Gefahrenlehre/1.1.01-111.html', '/questions/Gefahrenlehre/1.1.01-112.html', '/questions/Gefahrenlehre/1.1.01-113.html', '/questions/Gefahrenlehre/2.1.01-001.html', '/questions/Gefahrenlehre/2.1.01-003.html', 
    '/questions/Gefahrenlehre/2.1.01-004.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}
function zufallsmodus_umweltschutz() {
    
    var questions = [ '/questions/Gefahrenlehre/1.1.01-001.html', '/questions/Gefahrenlehre/1.1.01-002.html', '/questions/Gefahrenlehre/1.1.01-003.html', '//questions/Gefahrenlehre/1.1.01-004.html',
    '/questions/Gefahrenlehre/1.1.01-101.html', '/questions/Gefahrenlehre/1.1.01-102.html', '/questions/Gefahrenlehre/1.1.01-103.html', '/questions/Gefahrenlehre/1.1.01-104.html', 
    '/questions/Gefahrenlehre/1.1.01-107.html', '/questions/Gefahrenlehre/1.1.01-108.html', '/questions/Gefahrenlehre/1.1.01-109.html', '/questions/Gefahrenlehre/1.1.01-110.html', 
    '/questions/Gefahrenlehre/1.1.01-111.html', '/questions/Gefahrenlehre/1.1.01-112.html', '/questions/Gefahrenlehre/1.1.01-113.html', '/questions/Gefahrenlehre/2.1.01-001.html', '/questions/Gefahrenlehre/2.1.01-003.html', 
    '/questions/Gefahrenlehre/2.1.01-004.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}
function zufallsmodus_verhalten() {
    var questions = [ '/questions/Verhalten/1.2.01-001.html', '/questions/Verhalten/1.2.01-003.html', '/questions/Verhalten/1.2.02-101.html',
    '/questions/Verhalten/1.2.02-104.html', '/questions/Verhalten/1.2.02-106.html', '/questions/Verhalten/1.2.02-107.html',
    '/questions/Verhalten/1.2.02-108.html', '/questions/Verhalten/1.2.02-109.html', '/questions/Verhalten/1.2.02-110.html',
    '/questions/Verhalten/2.2.02-002.html', '/questions/Verhalten/2.2.02-003.html', '/questions/Verhalten/2.2.02-006.html',
    '/questions/Verhalten/2.2.02-007.html', '/questions/Verhalten/2.2.02-008.html', '/questions/Verhalten/2.2.02-303.html']   
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}

function zufallsmodus_verkehrszeichen() {
    var questions = [ '/questions/Vorfahrt/1.3.01-002.html', '/questions/Vorfahrt/1.3.01-003.html', '/questions/Vorfahrt/1.3.01-007.html',
    '/questions/Vorfahrt/1.3.01-013.html', '/questions/Vorfahrt/1.3.01-016.html', '/questions/Vorfahrt/1.3.01-016.html',
    '/questions/Vorfahrt/1.3.01-035.html', '/questions/Vorfahrt/1.3.01-038.html', '/questions/Vorfahrt/1.3.01-042.html',
    '/questions/Vorfahrt/1.3.01-046.html', '/questions/Vorfahrt/1.3.01-048.html', '/questions/Vorfahrt/1.3.01-049.html',
    '/questions/Vorfahrt/1.3.01-050.html', '/questions/Vorfahrt/1.3.01-052.html', '/questions/Vorfahrt/1.3.01-053.html',
    '/questions/Vorfahrt/1.3.01-055.html', '/questions/Vorfahrt/1.3.01-056.html', '/questions/Vorfahrt/1.3.01-057.html',
    '/questions/Vorfahrt/1.3.01-058.html', '/questions/Vorfahrt/1.3.01-059.html', '/questions/Vorfahrt/1.3.01-101.html',
    '/questions/Vorfahrt/1.3.01-103.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}

function zufallsmodus_vorfahrt() {
    var questions = [ '/questions/Vorfahrt/1.3.01-002.html', '/questions/Vorfahrt/1.3.01-003.html', '/questions/Vorfahrt/1.3.01-007.html',
    '/questions/Vorfahrt/1.3.01-013.html', '/questions/Vorfahrt/1.3.01-016.html', '/questions/Vorfahrt/1.3.01-016.html',
    '/questions/Vorfahrt/1.3.01-035.html', '/questions/Vorfahrt/1.3.01-038.html', '/questions/Vorfahrt/1.3.01-042.html',
    '/questions/Vorfahrt/1.3.01-046.html', '/questions/Vorfahrt/1.3.01-048.html', '/questions/Vorfahrt/1.3.01-049.html',
    '/questions/Vorfahrt/1.3.01-050.html', '/questions/Vorfahrt/1.3.01-052.html', '/questions/Vorfahrt/1.3.01-053.html',
    '/questions/Vorfahrt/1.3.01-055.html', '/questions/Vorfahrt/1.3.01-056.html', '/questions/Vorfahrt/1.3.01-057.html',
    '/questions/Vorfahrt/1.3.01-058.html', '/questions/Vorfahrt/1.3.01-059.html', '/questions/Vorfahrt/1.3.01-101.html',
    '/questions/Vorfahrt/1.3.01-103.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}



function zufaellig_button_gefahrenlehre() {
    var questions = [ '1.1.01-001.html', '1.1.01-002.html', '1.1.01-003.html', '1.1.01-004.html',
    '1.1.01-101.html', '1.1.01-102.html', '1.1.01-103.html', '1.1.01-104.html', 
    '1.1.01-107.html', '1.1.01-108.html', '1.1.01-109.html', '1.1.01-110.html', 
    '1.1.01-111.html', '1.1.01-112.html', '1.1.01-113.html', '2.1.01-001.html', '2.1.01-003.html', 
    '2.1.01-004.html']
    window.location.href = questions[Math.floor(Math.random() * questions.length)]
}

/*//funktioniert nicht da nicht die ganze json geladen wird ;-;
async function getQuestions() {

    zuordnung={"Gefahrenlehre":"Gefahrenlehre",
    "Verhalten im Straßenverkehr":"Verhalten",
    "Vorfahrt, Vorrang":"Vorfahrt",
    "Verkehrszeichen":"Verkehrszeichen",
    "Umweltschutz":"Umweltschutz",
    "Technik":"Technik",
    "Eignung und Befähigung von Kraftfahrern":"Eignung",
    "Vorschriften über den Betrieb der Fahrzeuge":"Betriebsvorschriften"}
    //structure of links / question / {{subcategory}} / {{ID}} .html
    let response = await fetch('/data/questions.json');
    let quest = await response.json();
    console.log(quest);
    for (const [k, v] of Object.entries(quest)) {
        pfad= "/question/"+zuordnung[v.subcategory]+ "/" + k + ".html"
        themen[zuordnung[v.subcategory]].push(pfad)
    }
}
window.onload = async function() {
    await getQuestions();
    console.log(themen)
}*/