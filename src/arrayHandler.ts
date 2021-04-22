function minArrayNumber (arr: Array<number>) : number {
    return Math.min(...arr);
}

function arrayAverage(arr: Array<number>) :number {
    let sum = 0;
    arr.forEach((n) => (sum += n))
    return Math.round(sum / arr.length);
}

function sortArray(arr: Array<string>) : Array<string> {
    return arr.sort(function(a, b) {
        return a.length - b.length;
    })
}

let arr1: Array<number> = [1 ,5 ,9,-7, 0, -36, 78];
let arr2 = [1, 8, 3, -26, 15, 35];
let arr3 = [2, 3, 7]

let stringArr = ['orange', 'strawberry', 'mango']

console.log("Минимальное число в массиве " + arr1 + ":  " + minArrayNumber(arr1));
console.log("Минимальное число в массиве " + arr2 + ":  " + minArrayNumber(arr2));
console.log("Среднее арифметическое массива " + arr3 + ":  " +arrayAverage(arr3));
console.log("Отсортированный массив " + stringArr +" по возрастанию длины элементов:  "  +sortArray(stringArr));

