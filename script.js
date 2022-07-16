//global variables
var words = [
    'cavalo',
    'gato',
    'cachorro',
    'passaro'
];
var word;
var hit = 0;
var mainInput = [];
var letter = [];
var formInput;
var userInput = [];
var count1 = 1;
var count2 = 0;
var wrong = 0;
var wrongs = [];
rightWords = 0;
var canvas = document.getElementById('drawArea');
textArea = document.getElementById('newWord');
//We need to add two functions to make the style change when the user click over a button in the start page, we will load content and make some content became invisible for the user
function gameStart() {
    var start = document.getElementById('btnsStart');
    var draw = document.getElementById('drawArea');
    var mainInput = document.getElementById('input');
    var inGameBtns = document.getElementById('inGameBtns');
    var rectangles = document.getElementById('rectangles');
    var input01 = document.getElementById('letter1');
    var input02 = document.getElementById('letter2');
    var input03 = document.getElementById('letter3');
    var input04 = document.getElementById('letter4');
    var input05 = document.getElementById('letter5');
    var input06 = document.getElementById('letter6');
    var input07 = document.getElementById('letter7');
    var input08 = document.getElementById('letter8');
    input08.style.cssText = 'text-transform: uppercase;';
    input07.style.cssText = 'text-transform: uppercase;';
    input06.style.cssText = 'text-transform: uppercase;';
    input05.style.cssText = 'text-transform: uppercase;';
    input04.style.cssText = 'text-transform: uppercase;';
    input03.style.cssText = 'text-transform: uppercase;';
    input02.style.cssText = 'text-transform: uppercase;';
    input01.style.cssText = 'text-transform: uppercase;';
    start.style.cssText = 'display: none';
    draw.style.cssText = 'display: block';
    mainInput.style.cssText = 'display: flex';
    inGameBtns.style.cssText = 'display: block';
    rectangles.style.cssText = 'display: block';
    if (letter.length == 7) {
        input08.style.cssText = 'display: none';
    }
    if (letter.length == 6) {
        input08.style.cssText = 'display: none';
        input07.style.cssText = 'display: none';
    }
    if (letter.length == 5) {
        input08.style.cssText = 'display: none';
        input07.style.cssText = 'display: none';
        input06.style.cssText = 'display: none';
    }
    if (letter.length == 4) {
        input08.style.cssText = 'display: none';
        input07.style.cssText = 'display: none';
        input06.style.cssText = 'display: none';
        input05.style.cssText = 'display: none';
    }
    if (letter.length == 3) {
        input08.style.cssText = 'display: none';
        input07.style.cssText = 'display: none';
        input06.style.cssText = 'display: none';
        input05.style.cssText = 'display: none';
        input04.style.cssText = 'display: none';
    }
    if (letter.length == 2) {
        input08.style.cssText = 'display: none';
        input07.style.cssText = 'display: none';
        input06.style.cssText = 'display: none';
        input05.style.cssText = 'display: none';
        input04.style.cssText = 'display: none';
        input03.style.cssText = 'display: none';
    }
    if (letter.length == 1) {
        input08.style.cssText = 'display: none';
        input07.style.cssText = 'display: none';
        input06.style.cssText = 'display: none';
        input05.style.cssText = 'display: none';
        input04.style.cssText = 'display: none';
        input03.style.cssText = 'display: none';
        input02.style.cssText = 'display: none';
    }
    alert("Você tem 5 vidas para tentar acertar o maior numero de palavras, não existem palavras com acento ou números, mas se inseri-los será computado como erro ! Vamos ver o quantas palavras você acerta.");
}

function newWordLoad() {
    var input = document.getElementById('newWordInput');
    var footer = document.getElementById('newWordFooter');
    var start = document.getElementById('btnsStart');

    start.style.cssText = 'display: none';
    input.style.cssText = 'display: block';
    footer.style.cssText = 'display: block';
}

// Now we need to create a function that take us back to initial page in any other page, to this we will lod and hide some objects like before 
function back() {
    var start = document.getElementById('btnsStart');
    var draw = document.getElementById('drawArea');
    var mainInput = document.getElementById('input');
    var inGameBtns = document.getElementById('inGameBtns');
    var rectangles = document.getElementById('rectangles');
    var input = document.getElementById('newWordInput');
    var footer = document.getElementById('newWordFooter');

    start.style.cssText = 'display: flex';
    draw.style.cssText = 'display: none';
    mainInput.style.cssText = 'display: none';
    inGameBtns.style.cssText = 'display: none';
    rectangles.style.cssText = 'display: none';
    input.style.cssText = 'display: none';
    footer.style.cssText = 'display: none';
}

//Here we will insert the main function of the game he will take the words and verify the inputs of the user, as well make all the logic to make the mistakes count and retur this for the user

function main() {
    var wrongLetter;
    console.log(wrongLetters);
    userInput.push(document.getElementById('letter' + count1).value);
    document.getElementById('letter' + count1).readOnly = true;
    var anyLetter = document.getElementById('letter' + count1);
    userInput[count2] = userInput[count2].toUpperCase();
    letter[count2] = letter[count2].toUpperCase();
    console.log(userInput);
    console.log(count1);
    console.log(count2);
    if (userInput[count2] == letter[count2]) {
        anyLetter.style.cssText = 'text-transform: uppercase;';
        console.log('acertou');
        hit++;
        console.log(hit);
    }
    else {
        var ctx = canvas.getContext('2d');
        ctx.strokeStyle = "blue";
        hit = 0;
        wrong++;
        if (letter.length == 7 && wrong != 0) {
            if (wrong == 1) {
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
                console.log("erro" + count2)
            }
            else if (wrong == 2) {
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
                console.log("erro" + count2)
            }
            else if (wrong == 3) {
                ctx.beginPath();
                ctx.moveTo(70, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
                console.log("erro" + count2)
            }
            else if (wrong == 4) {
                ctx.beginPath();
                ctx.moveTo(230, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
                console.log("erro" + count2)
            }
            else if (wrong == 5) {
                ctx.beginPath();
                ctx.moveTo(70, 100);
                ctx.lineTo(140, 90);
                ctx.moveTo(220, 100);
                ctx.lineTo(140, 90);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
                console.log("erro" + count2)
            }
            else { console.log("erro") }
        }
        if (letter.length == 8 && wrong != 0) {
            if (wrong == 1) {
                console.log('erro')
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                    wrongs.push(userInput[count2]);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
            }
            else if (wrong == 2) {
                console.log('erro')
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 3) {
                console.log('erro')
                ctx.beginPath();
                ctx.moveTo(70, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 4) {
                console.log('erro')
                ctx.beginPath();
                ctx.moveTo(230, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 5) {
                ctx.beginPath();
                ctx.moveTo(70, 100);
                ctx.lineTo(140, 90);
                ctx.moveTo(220, 100);
                ctx.lineTo(140, 90);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else { console.log("erro") }
        }
        if (letter.length == 6 && wrong != 0) {
            if (wrong == 1) {
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                    wrongs.push(userInput[count2]);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
            }
            else if (wrong == 2) {
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 3) {
                ctx.beginPath();
                ctx.moveTo(70, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 4) {
                ctx.beginPath();
                ctx.moveTo(230, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 5) {
                ctx.beginPath();
                ctx.moveTo(70, 100);
                ctx.lineTo(140, 90);
                ctx.moveTo(220, 100);
                ctx.lineTo(140, 90);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else { console.log("erro") }
        }
        if (letter.length == 5 && wrong != 0) {
            if (wrong == 1) {
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                    wrongs.push(userInput[count2]);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
            }
            else if (wrong == 2) {
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 3) {
                ctx.beginPath();
                ctx.moveTo(70, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 4) {
                ctx.beginPath();
                ctx.moveTo(230, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 5) {
                ctx.beginPath();
                ctx.moveTo(70, 100);
                ctx.lineTo(140, 90);
                ctx.moveTo(220, 100);
                ctx.lineTo(140, 90);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else { console.log("erro") }
        }
        if (letter.length == 4 && wrong != 0) {
            if (wrong == 1) {
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                    wrongs.push(userInput[count2]);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
            }
            else if (wrong == 2) {
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 3) {
                ctx.beginPath();
                ctx.moveTo(70, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 4) {
                ctx.beginPath();
                ctx.moveTo(230, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else { console.log("erro") }
        }
        if (letter.length == 3 && wrong != 0) {
            if (wrong == 1) {
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                    wrongs.push(userInput[count2]);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
            }
            else if (wrong == 2) {
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else if (wrong == 3) {
                ctx.beginPath();
                ctx.moveTo(70, 185);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else { console.log("erro") }
        }
        if (letter.length == 2 && wrong != 0) {
            if (wrong == 1) {
                ctx.beginPath();
                ctx.arc(140, 70, 15, 0, Math.PI * 2, true);
                ctx.moveTo(40, 35);
                ctx.stroke();
                if (wrong == 1) {
                    wrongLetter = document.createTextNode(userInput[count2]);
                    wrongLetters.appendChild(wrongLetter);
                    wrongs.push(userInput[count2]);
                }
                else {
                    for (i = 0; i <= wrongs.length; i++) {
                        if (wrongs[i] === userInput[count2]) {
                            console.log('aqui')
                            break;
                        }
                        else {
                            wrongLetter = document.createTextNode(userInput[count2]);
                            wrongLetters.appendChild(wrongLetter);
                            wrongs.push(userInput[count2]);
                            break;
                        }
                    }
                }
            }
            else if (wrong == 2) {
                ctx.beginPath();
                ctx.moveTo(140, 85);
                ctx.lineTo(140, 125);
                ctx.stroke();
                for (i = 0; i <= wrongs.length; i++) {
                    if (wrongs[i] === userInput[count2]) {
                        console.log('aqui')
                        break;
                    }
                    else {
                        wrongLetter = document.createTextNode(userInput[count2]);
                        wrongLetters.appendChild(wrongLetter);
                        break;
                    }
                }
            }
            else { console.log("erro") }
        }
    }
    if (hit == letter.length) {
        alert("Parabéns você acertou a palavra ! Por-favor inicie um novo jogo.");
        rightWords++;
        hit = 0;
    }
    if (wrong == 5) {
        alert("Você perdeu, a palavra era " + word + ", você acertou " + rightWords + " palavras, inicie um novo jogo.");
        cleanWrongLetters();
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        wrong = 0;
        rightWords = 0;
    }
    count1++;
    count2++;
}

// this function save a new word that the user whants and make the conversion to upper case as well the division of letters
function saveNewWord() {
    words.push(document.getElementById('newWord').value);
    letter = words[Math.floor(Math.random() * words.length)].split('');
    var input = document.getElementById('newWordInput');
    var footer = document.getElementById('newWordFooter');
    word = [letter.join('')];
    input.style.cssText = 'display: none';
    footer.style.cssText = 'display: none';
    gameStart();
}
// this function clean all functions that need to have a dinamic style, and it generate another random word that is present in the global array 
function randomWord() {
    formStyleReset();
    cleanForm();
    letter = words[Math.floor(Math.random() * words.length)].split('');
    word = [letter.join('')];
    console.log(letter);
    for (let i = userInput.length; i > 0; i--) {
        userInput.pop();
    }
    for (let i = wrongs.length; i > 0; i--) {
        wrongs.pop();
    }
    count1 = 1;
    count2 = 0;
    gameStart();
}

function cleanForm() {
    document.getElementById('letter1').value = '';
    document.getElementById('letter2').value = '';
    document.getElementById('letter3').value = '';
    document.getElementById('letter4').value = '';
    document.getElementById('letter5').value = '';
    document.getElementById('letter6').value = '';
    document.getElementById('letter7').value = '';
    document.getElementById('letter8').value = '';
    document.getElementById('letter1').readOnly = false;
    document.getElementById('letter2').readOnly = false;
    document.getElementById('letter3').readOnly = false;
    document.getElementById('letter4').readOnly = false;
    document.getElementById('letter5').readOnly = false;
    document.getElementById('letter6').readOnly = false;
    document.getElementById('letter7').readOnly = false;
    document.getElementById('letter8').readOnly = false;
}

function formStyleReset() {
    var input02 = document.getElementById('letter2');
    var input03 = document.getElementById('letter3');
    var input04 = document.getElementById('letter4');
    var input05 = document.getElementById('letter5');
    var input06 = document.getElementById('letter6');
    var input07 = document.getElementById('letter7');
    var input08 = document.getElementById('letter8');
    input08.style.cssText = 'display: block';
    input07.style.cssText = 'display: block';
    input06.style.cssText = 'display: block';
    input05.style.cssText = 'display: block';
    input04.style.cssText = 'display: block';
    input03.style.cssText = 'display: block';
    input02.style.cssText = 'display: block';
}


function cleanArreys() {
    for (let i = userInput.length; i > 0; i--) {
        userInput.pop();
    }
    for (let i = letter.length; i > 0; i--) {
        letter.pop();
    }
    for (let i = wrongs.length; i > 0; i--) {
        wrongs.pop();
    }
    for (let i = words.length; i > 0; i--) {
        words.pop();
    }
}

function cleanWrongLetters() {
    document.getElementById('wrongLetters').innerHTML = "";
}

textArea.addEventListener("keypress", function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault();
    } 
    if(keyCode > 191 && keyCode <= 255){
        e.preventDefault();
    }
})
