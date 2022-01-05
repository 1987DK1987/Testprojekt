let openCloseIndex = 0; /* Counter for open close at menu card */
let pizzaNames = ['Pizza Magarita &Oslash; 26cm', 'Pizza Salami &Oslash; 26cm', 'Pizza Hawai &Oslash; 26cm', 'Pizza Rucola-Tomate &Oslash; 26cm'];
let pizzaPrices = [8.30, 9.30, 10.20, 12.40];
let pizzaAddSauces = ['Sauce Hollondaise', 'Aioli', 'Tzaziki', 'scharf'];
let saucePrices = [1.90, 1.50, 1.50, 2.10];
let pizzaAddCheeseExtra = 2.5;
let equals = [];
let lots = [];
let sums = [];
let addsSums = [];
let equal = 1;


function plus(x) {
    equal = equal + 1;
    document.getElementById(`equal${x}`).innerHTML = equal;
}

function minus(x) {
    equal = equal - 1;
    document.getElementById(`equal${x}`).innerHTML = equal;
}

function init() {
    addMenuCard();
}

function addMenuCard() {
    for (let i = 0; i < pizzaNames.length; i++) {

        document.getElementById(`menuCardAdd`).innerHTML += `

      <div id="hideAndShow${i}" class="itemContainerBGInvisible">
                    <div class="itemHeadlineAndFunction">
                        <div><h2 id="pizzaName${i}">Pizza Name XXX</h2></div>
                        <a onclick="openClose(${i})"><div><p id="switchSign${i}">+</p></div></a>
                    </div>
                    <div class="itemPrice">
                        <p id="basePrices${i}">Preis: 10,20€</p>
                        <img src="./img/pizza0.png">
                    </div>
                    <div id="addContainer${i}" class="itemContainerAddsBG">
                        
                    </div>
                </div>

      `;
        getNames(i);
    }
}

function getNames(x) { /* add Pizza names */
    document.getElementById(`pizzaName${x}`).innerHTML = pizzaNames[x];
    getPrices(x);
}

function getPrices(x) { /* add Pizza base prices */
    document.getElementById(`basePrices${x}`).innerHTML = pizzaPrices[x];
    getAdds(x);
}

function getAdds(x) { /* add checkboxes for Pizza adds */
    for (let i = 0; i < pizzaAddSauces.length; i++) {
        document.getElementById(`addContainer${x}`).innerHTML += `

      <div class="checkboxSort"><input type="checkbox" name="Sauce" id="">${pizzaAddSauces[i]} für <b>${saucePrices[i]}</b>€
                            extra</div>

      `;
    }
    getControls(x);
}

function getControls(x) { /* add controls for adding */
    document.getElementById(`addContainer${x}`).innerHTML += `<div class="controllsContainer"><div class="pMbuttonContainer"><button onclick="minus(${x})" class="pMbutton">-</button><p id="equal${x}" class="outputEqual"></p><button onclick="plus(${x})" id="plusButton" class="pMbutton">+</button></div><button class="button" onclick="addToBasket(${x})">Test</button></div>`;
    document.getElementById(`equal${x}`).innerHTML = equal;
}

function openClose(x) { /* open close function */
    if (openCloseIndex == 0) {
        openCloseIndex++; /* Switch to Open adds card */
        document.getElementById(`hideAndShow${x}`).classList.remove('itemContainerBGInvisible');
        document.getElementById(`hideAndShow${x}`).classList.add('itemContainerBGVisible');
        document.getElementById(`switchSign${x}`).innerHTML = `x`;
        return;
    }
    if (openCloseIndex == 1) {
        openCloseIndex = 0;
        document.getElementById(`hideAndShow${x}`).classList.add('itemContainerBGInvisible');
        document.getElementById(`hideAndShow${x}`).classList.remove('itemContainerBGVisible');
        document.getElementById(`switchSign${x}`).innerHTML = `+`;
        return;
    }
}

function calcSum() { /* calc sums for basket */
    /* Hier kommt die Berechnung für den Warenkorb */
}