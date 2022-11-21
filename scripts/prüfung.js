//questions.json
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
async function getQuestions() {
    let response = await fetch('/data/questions.json');
    let questions = await response.json();
    //console.log(questions);

    const grundstoff = [];
    const zusatzstoff= [];
    for (const [k, v] of Object.entries(questions)) {
        const sectionName = k.charAt(0);
        if(sectionName=="1"){
            grundstoff.push(v);
        }
        if(sectionName=="2"){
            zusatzstoff.push(v);
        }
    }
          
    console.log(grundstoff);
    console.log(zusatzstoff);
    //grundstoff_selected=getRandom(grundstoff,20);
    //zusatzstoff_selected=getRandom(zusatzstoff,10);
    //const fragen = grundstoff_selected.concat(zusatzstoff_selected); 
    /*let questions = fragen
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    */
    }

getQuestions()