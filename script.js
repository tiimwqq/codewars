// Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort(function (a, b) {
            return a - b;
        })
        return args[0];
    }
}

// Получить среднее значение массива

function getAverage(marks) {
    return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}

function getAverage(marks) {
    let acc = 0;
    marks.forEach(el => acc += el);
    return Math.floor(acc / marks.length);
}

function getAverage(marks) {
    let sum = 0;
    for (let i in marks) {
        sum += marks[i];
    }
    return parseInt(sum / marks.length);
}

function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return Math.floor(sum / marks.length);
}

// Обратная последовательность

const reverseSeq = n => {
    const finalArr = [];
    for (let i = n; i > 0; i--) {
        finalArr.push(i);
    }

    return finalArr;
};



// последовательность

const Seq = n => {
    const finalArr = [];
    for (let i = 1; i <= n; i++) {
        finalArr.push(i);
    }

    return finalArr;
};


// Итоговая оценка ученика

function finalGrade(exam, projects) {
    let finalGrade;
    if (exam > 90 || projects > 10) {
        finalGrade = 100;
    } else if (exam > 75 && projects >= 5) {
        finalGrade = 90;
    } else if (exam > 50 && projects >= 2) {
        finalGrade = 75;
    } else {
        finalGrade = 0;
    }
    return finalGrade;
}

function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 && projects >= 5) return 90;
    if (exam > 50 && projects >= 2) return 75;
    return 0;
}

function finalGrade(exam, projects) {
    switch (true) {
        case exam > 90 || projects > 10: return 100;
        case exam > 75 && projects >= 5: return 90;
        case exam > 50 && projects >= 2: return 75;
        default: return 0;
    }
}


// Напечатайте прямоугольник, используя звездочки


function getRectangleString(w, h) {
    const rn = '\r\n';
    const tb = '*'.repeat(w) + rn;
    const center = (w > 1) ? ('*' + ' '.repeat(w - 2) + '*' + rn).repeat(h - 2) : '';
    return h > 1 ? (tb + center + tb) : tb.repeat(h);
}

// Преобразовать в двоичный формат

function toBinary(n) {
    return +n.toString(2);
}

const toBinary = n => +n.toString(2); // function expression


// Найдите недостающий элемент между двумя массивами


function findMissing(arr1, arr2) {
    let index;
    for (i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i]); // присваевает индексу найденный элемент
        if (index > -1) {
            arr2.splice(index, 1); // удаляет найденный элемент
        } else {
            return arr1[i]
        }
    }
}


function findMissing(arr1, arr2) {
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return arr1[i];
        }
    }
}


// Подсчитайте нечетные числа ниже n
function oddCount(n) {
    return Math.floor(n / 2);
}

// Повторение строки

function repeatStr(n, s) {
    return s.repeat(n);
}

// Насколько ты хорош на самом деле?

function betterThanAverage(classPoints, yourPoints) {
    let a = Math.floor(classPoints.reduce((acc, cur) => acc + cur) / classPoints.length);
    if (a < yourPoints) {
        return true;
    } else {
        return false;
    }
}


function betterThanAverage(c, y) {
    return c.reduce((acc, item) => acc + item) / c.length < y;
}



// Аутентификация саней

function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    return name === 'Santa Claus' && password === 'Ho Ho Ho!';
}; // === возвращает только тру или фолс поэтому тернарные операторы не нужны


// Преобразовать число в перевернутый массив цифр

function digitize(n) {
    return n.toString().split('').reverse().map(el => +el);
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squares = nums.map(String)

console.log(squares)


// Codewars. Reversed Strings

function solution(str) {
    return str.split('').reverse().join('');
}

function solution(str) {
    let s = '';
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}

// Difference of Volumes of Cuboids

function findDifference(a, b) {
    let c = a[0] * a[1] * a[2];
    let f = b[0] * b[1] * b[2];
    return Math.abs(c - f);
}

// Кузнечик — Персонализированное сообщение

function greet(name, owner) {
    return (name == owner) ? 'Hello boss' : 'Hello guest';
}


function greet(name, owner) {
    return 'Hello ' + (name == owner ? 'boss' : 'guest');
}

const greet = (name, owner) => 'Hello ' + (name == owner ? 'boss' : 'guest');

// Таблица умножения числа


function multiTable(n) {
    let c = ''
    for (let i = 1; i <= 10; i++) {
        c += `${i} * ${n} = ${i * n}`;
        i !== 10 ? c += '\n' : '';
    }
    return c;
}

function multiTable(n) {
    let c = ''
    for (let i = 1; i <= 10; i++) {
        c += `${i} * ${n} = ${i * n}${i !== 10 ? '\n' : ''}`;
    }
    return c;
}

const multiTable = (n) => {
    const table = []
    for (let i = 1; i <= 10; i++) {
        table.push(`${i} * ${n} = ${i * n}`)
    }
    return table.join('\n')
}

// Сумма разностей в массиве


function sumOfDifferences(arr) {
    const sort = arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 1; i < sort.length; i++) {
        sum += sort[i - 1] - sort[i];
    }
    return sum;
}

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}


// Перечислимая магия № 2 — верна для всех?


const any = (arr, fun) => arr.some(fun);



// Total amount of points


function points(games) {
    let count = 0;
    games.forEach(item => {
        if (item[0] > item[2]) count += 3;
        if (item[0] == item[2]) count += 1;
    })
    return count;
}


function points(games) {
    let total = 0;
    games.map(game => {
        if (game[0] === game[2]) {
            total += 1;
        } else if (game[0] > game[2]) {
            total += 3;
        }
    });
    return total;
}