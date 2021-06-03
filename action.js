let words = [[], []];
words[0] = ['be', 'bear', 'beat', 'become', 'begin', 'bet', 'bite', 'blow', 'broadcast', 'break', 'bring', 'build', 'burn', 'buy', 'can', 'catch', 'choose', 'come', 'cost', 'cut', 'do', 'draw', 'dream', 'drink', 'drive', 'eat', 'fall', 'feed', 'feel', 'fight', 'find', 'fly', 'forget', 'freeze', 'get', 'give', 'go', 'grow', 'hang', 'have', 'hear', 'hide', 'hit', 'hold', 'hurt', 'keep'];
words[1] = ['know', 'lead', 'learn', 'leave', 'lend', 'let', 'lie', 'lose', 'make', 'mean', 'meet', 'pay', 'put', 'read', 'ride', 'ring', 'rise', 'run', 'say', 'see', 'sell', 'send', 'set', 'shoot', 'show', 'shut', 'sing', 'sink', 'sit', 'sleep', 'speak', 'spend', 'stand', 'steal', 'stick', 'swim', 'understand', 'take', 'teach', 'tell', 'think', 'throw', 'wake', 'wear', 'win', 'write']
let forms = [[], []];
forms[0] = [['was/were', 'been'], ['bore', 'born'], ['beat', 'beaten'], ['became', 'become'], ['began', 'begun'], ['bet', 'bet'], ['bit', 'bitten'], ['blew', 'blown'], ['broadcast', 'broadcast'], ['broke', 'broken'], ['brought', 'brought'], ['built', 'built'], ['burnt', 'burnt'], ['bought', 'bought'], ['could', '-'], ['caught', 'caught'], ['chose', 'chosen'], ['came', 'come'], ['cost', 'cost'], ['cut', 'cut'], ['did', 'done'], ['drew', 'drawn'], ['dreamt', 'dreamt'], ['drank', 'drunk'], ['drove', 'driven'], ['ate', 'eaten'], ['fell', 'fallen'], ['fed', 'fed'], ['felt', 'felt'], ['fought', 'fought'], ['found', 'found'], ['flew', 'flown'], ['forgot', 'forgotten'], ['froze', 'frozen'], ['got', 'got'], ['gave', 'given'], ['went', 'gone'], ['grew', 'grown'], ['hung', 'hung'], ['had', 'had'], ['heard', 'heard'], ['hid', 'hidden'], ['hit', 'hit'], ['held', 'held'], ['hurt', 'hurt'], ['kept', 'kept']];
let translations = [[], []];
translations[0] = ['быть', 'родить', 'бить', 'становиться', 'начинать', 'делать ставки', 'кусать', 'дуть', 'передавать', 'ломать', 'приносить', 'строить', 'жечь', 'покупать', 'мочь', 'ловить', 'выбирать', 'приходить', 'стоить', 'резать', 'делать', 'рисовать', 'мечтать', 'пить', 'водить', 'есть', 'падать', 'кормить', 'чувствовать', 'бороться', 'находить', 'летать', 'забывать', 'замерзать', 'получать', 'давать', 'идти', 'расти', 'висеть', 'иметь', 'слышать', 'прятать', 'ударять', 'держать(не keep)', 'ранить', 'держать(не hold)'];
let meanings = [[], []];
meanings[0] = ['exist', 'to give birth', 'to hit repeatedly', 'to turn new', 'to start', 'to risk money', 'to use your teeth to cut into something', 'to snap', 'to move and make currents of air', 'to make wind', 'to show', 'to destroy', 'to take and carry something to a place or a person', 'to construct', 'to make a fire', 'spend money', 'to be able to', 'to pick up', 'to grab', 'to select', 'to arrive', 'to have a price', 'to use knife', 'to make', 'to paint', 'to use pencil', 'to fly in the sky', 'to imagine', 'you want to do it when you are thirsty', 'to use car', 'you want to do it when you are hungry', 'to drop', 'to give food', 'to have senses', 'to have emotions', 'to argue with', 'when you are against', 'to do that to achieve something', 'to search', 'to use wings', 'to use plane', 'not remember', 'to become cold', 'to take', 'opposite of take', 'opposite of stop', 'to move', 'to rise', 'become taller', 'become older', 'picture on the wall', 'to own', 'to use ears', 'to make secret', 'become invisible', 'to beat', 'to carry', 'to make you feel pain', 'to hold', 'to carry(not keep)'];
let meaningRanges = [[], []];
meaningRanges[0] = [-1, 0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 25, 27, 28, 29, 30, 31, 32, 34, 37, 38, 40, 41, 42, 43, 44, 46, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59];

function random(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}

let [action, part] = localStorage.getItem('option').split('_');
part = part - 1;
let set = new Set();
let checkbox = {};
let content = document.getElementById('content');
let index = 0;
let opt = [];
let number = document.querySelector('.number span');
number.innerHTML = '1';
let count = 1;
let rights = 20;
let flag = 0;

function chooseMeanings(part) {
    let task = document.getElementById('task');
    content.innerHTML = '';
    content.append(task);
    let ind = 0;
    while(true) {
        ind = random(0, words[part].length);
        if (!set.has(ind)) {
            set.add(ind);
            break;
        }
    }
    task.innerText = words[part][ind];

    let options = new Set();
    for (let i = meaningRanges[part][ind] + 1; i <= meaningRanges[part][ind + 1]; i++) {
        options.add((1 + i) * (-1));
    }
    while(options.size != 5) {
        let x = random(1, meanings[part].length + 1);
        if (!options.has((-1) * x)) {
            options.add(x);
            if (options.size == 5) {
                break;
            }
        }
    }
    options = Array.from(options);
    console.log(options);
    for (let i = 0; i < 5; i++) {
        let value = random(0, options.length);
        let p = document.createElement('p');
        p.classList.add('answer');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let label = document.createElement('label');
        p.append(checkbox, label);
        if (options[value] < 0) {
            checkbox.classList.add('right');
            label.innerText = meanings[part][options[value] * (-1) - 1];
        } else {
            label.innerText = meanings[part][options[value] - 1];
        }
        options.splice(value, 1);
        opt.push(checkbox);
        content.append(p);
    }
}

function writeFormsByTranslations(part) {
    let task = document.getElementById('task');
    let ind = 0;
    while(true) {
        ind = random(0, words[part].length);
        if (!set.has(ind)) {
            set.add(ind);
            break;
        }
    }
    index = ind;
    task.innerText = translations[part][ind];
}

function writeFormsByMeaning(part) {
    let task = document.getElementById('task');
    let ind = 0;
    while(true) {
        ind = random(0, words[part].length);
        if (!set.has(ind)) {
            set.add(ind);
            break;
        }
    }
    index = ind;
    let options = new Set();
    for (let i = meaningRanges[part][ind] + 1; i <= meaningRanges[part][ind + 1]; i++) {
        options.add(i);
    }
    options = Array.from(options);
    task.innerText = meanings[part][options[random(0, options.length)]];
}

comment = document.getElementById('comment');
comment.append('NEXT');
comment.style.backgroundColor = '';

comment.onclick = function() {
    if (action == 'm' && flag == 0) {
        let f = 0;
        comment.style.fontSize = '15px';
        comment.style.backgroundColor = 'rgba(129, 138, 140)';
        comment.innerText = '';
        for (let i = 0; i < 5; i++) {
            console.log(opt[i].classList);
            let p = document.createElement('p');
            p.append(`${i + 1}. `);
            if (opt[i].classList.contains('right')) {
                if (opt[i].checked) {
                    p.append("Right ");
                    p.style.color = '#c5faeafd';
                } else {
                    p.append("Wrong");
                    p.style.color = '#f7ccc6fd';
                    if (f == 0) {f = 1};
                }
            } else {
                if (opt[i].checked) {
                    p.append("Wrong");
                    p.style.color = '#f7ccc6fd';
                    if (f == 0) {f = 1};
                } else {
                    p.append("Right ");
                    p.style.color = '#c5faeafd';
                }
            }
            if (f == 1) {rights--};
            comment.append(p);
        }
        flag = 1;
    } else if ((action == 't' || action == 'w') && (flag == 0)) {
        let f = 0;
        comment.style.fontSize = '15px';
        comment.style.backgroundColor = 'rgba(129, 138, 140)';
        comment.innerText = '';
        flag = 1;
        if (document.querySelector('#a_1 input').value === words[part][index]) {
            let p = document.createElement('p');
            p.append('1. Right ');
            p.style.color = '#c5faeafd';
            comment.append(p);
        } else {
            let p = document.createElement('p');
            p.append('1. Wrong');
            p.style.color = '#f7ccc6fd';
            comment.append(p);
            if (f == 0) {f = 1};
        }
        if (document.querySelector('#a_2 input').value === forms[part][index][0]) {
            let p = document.createElement('p');
            p.append('2. Right ');
            p.style.color = '#c5faeafd';
            comment.append(p);
        } else {
            let p = document.createElement('p');
            p.append('2. Wrong');
            p.style.color = '#f7ccc6fd';
            comment.append(p);
            if (f == 0) {f = 1};
        }
        if (document.querySelector('#a_3 input').value === forms[part][index][1]) {
            let p = document.createElement('p');
            p.append('3. Right ');
            p.style.color = '#c5faeafd';
            comment.append(p);
        } else {
            let p = document.createElement('p');
            p.append('3. Wrong');
            p.style.color = '#f7ccc6fd';
            comment.append(p);
            if (f == 0) {f = 1};
        }
        if (f == 1) {rights--;};
    } else if (flag == 1) {
        if (count == 20) {
            window.location.href = "result.html";
            localStorage.setItem('result', '' + rights);
        }
        comment.style.fontSize = '';
        comment.style.backgroundColor = '';
        comment.innerText = 'NEXT';
        number.innerHTML = `${count}`;
        flag = 0;
        count++;
        if (action == 'm') {
            chooseMeanings(part);
        } else if (action == 'w') {
            writeFormsByMeaning(part);
            document.querySelector('#a_1 input').value = '';
            document.querySelector('#a_2 input').value = '';
            document.querySelector('#a_3 input').value = '';
        } else {
            writeFormsByTranslations(part);
            document.querySelector('#a_1 input').value = '';
            document.querySelector('#a_2 input').value = '';
            document.querySelector('#a_3 input').value = '';
        }
    }
}






