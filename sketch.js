let txt;

function preload(){
  txt = loadStrings("bee movie script.txt");
}

function setup() {
  createCanvas(400, 400);
  background(240);
  
  let individuelleOrd = [];
  
  for(let i = 0; i < txt.length; i++){
    let splittetString = txt[i].split(" ")
    for(let j = 0; j < splittetString.length; j++){
      individuelleOrd.push(splittetString[j])
    }
  }
  
  for(let i = 0; i < individuelleOrd.length; i++){
    individuelleOrd[i] = individuelleOrd[i].toLowerCase();
    individuelleOrd[i] = individuelleOrd[i].replace(",", "")
    individuelleOrd[i] = individuelleOrd[i].replace(".", "")
    individuelleOrd[i] = individuelleOrd[i].replace("?", "")
    individuelleOrd[i] = individuelleOrd[i].replace(";", "")    
    individuelleOrd[i] = individuelleOrd[i].replace("-", "") 
    individuelleOrd[i] = individuelleOrd[i].replace("!", "") 
  }
  
  let unikkeOrd = [];
  
  for(let i = 0; i < individuelleOrd.length; i++){
    if(!unikkeOrd.includes(individuelleOrd[i])) unikkeOrd.push(individuelleOrd[i]);
  }
  
  for(let i = 0; i < unikkeOrd.length; i++) {
    let count = 0;
    for (let j = 0; j < individuelleOrd.length; j++){
      if (individuelleOrd[j] == unikkeOrd[i]) {
        count++;
        console.log(count);
      }
      if (j == individuelleOrd.length - 1) {
        textSize(count/2);
        text(unikkeOrd[i], random(height), random(width));
        count = 0;
      }
    }
  }  
}