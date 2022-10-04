let kedvencek = [
    'Gyürűk Ura',
    'Harry Pottr és a Bölcsek Köve',
    'Ragyogás',
    'Orion Expressz'
]



function ujKedvencElem(cim){
    let label = document.createElement('label');
    label.textContent = cim +': ';
    let number = document.createElement('input');
    number.type = 'number';
    number.min = 1;
    number.max = 5;
    number.value = 3;
    label.appendChild(number);
    return label;
}




function kedvencekBetoltese(){
    let szuloElem = document.getElementById('lista');
    szuloElem.textContent = "";
    for (let k of kedvencek){
        let listaElem = document.createElement('li'); 
     //   listaElem.textContent = k;
        listaElem.appendChild(ujKedvencElem(k));
        let torlesgomb = document.createElement("button");
        torlesgomb.textContent = 'X';
        torlesgomb.addEventListener('click',torlesKatt)

        function torlesKatt(){
            listaElem.remove();
        }

        listaElem.appendChild(torlesgomb);
        szuloElem.appendChild(listaElem);
    }
}



function szinezes(){
    let szuloElem = document.getElementById('lista'); //csak ID
    for (let li of szuloElem.children) {
        let randInt = Math.floor(Math.random() * (2**24));
        li.style.backgroundColor = '#'+ randInt.toString(16);
    }


    let inputMezok = document.querySelectorAll('#lista input'); // Tetszőleges CSS
    for (let i of inputMezok) {
        let randInt = Math.floor(Math.random() * (2**24));
        i.style.backgroundColor = '#'+ randInt.toString(16);
    }

    // Vizsgán Kérdezhetik:
   // document.getElementsByName('fontos');     <div class="fontos">
   // document.getElementsByTagName('p');       <p>
   // document.getElementsByName('ertekeles');  <input type ="number" name="ertekeles">
}


function init(){
document.getElementById('kedvencBetoltesGomb').addEventListener('click',kedvencekBetoltese);
document.getElementById('szinezes').addEventListener('click',szinezes)
}

document.addEventListener('DOMContentLoaded',init);