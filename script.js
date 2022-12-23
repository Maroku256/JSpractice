//Пример 1
let example1_summ, example1_subtraction, example1_multiply, example1_divide;
example1_summ = 7 + 2;
example1_subtraction = 7 - 3;
example1_multiply = 2 * 4;
example1_divide =  4 / 2;
console.log(`7 + 2 = ${example1_summ}, 7 - 3 = ${example1_subtraction}, 2 * 4 = ${example1_multiply}, 4 / 2 = ${example1_divide}`);


//Пример 2
let example2_height, example2_width, example2_s;
example2_height = 23;
example2_width = 10;
example2_s = example2_height * example2_width;
console.log(`Площадь = ${example2_s} см`)


//Пример 3
let example3_remOfdiv_1, example3_remOfdiv_2, example3_numPlusString, example3_strMinNum, example3_numPlusWord;
example3_remOfdiv_1 = 5 % 3;
example3_remOfdiv_2 = 3 % 5;
example3_numPlusString = 5 + '3';
example3_strMinNum = '5' - 3;
example3_numPlusWord = 75 + 'кг';
console.log(`5 % 3 = ${example3_remOfdiv_1}, 3 % 5 = ${example3_remOfdiv_2}, 5 + '3' = ${example3_numPlusString}, '5' - 3 = ${example3_strMinNum}, 75 + 'кг' = ${example3_numPlusWord}`);


//Пример 4
let example4_heightC, example4_dC, example4_v;
example4_heightC = 10;
example4_dC = 4;
example4_v = Math.PI * Math.pow((example4_dC / 2), 2) * example4_heightC;
console.log(`Объём цилиндра = ${example4_v}`);


//Пример 5
let example5_numA = 10, example5_numB = 2;
let example5_sum, example5_sub, example5_mult, example5_div;
example5_sum = example5_numA + example5_numB;
example5_sub = example5_numA - example5_numB;
example5_mult = example5_numA * example5_numB;
example5_div = example5_numA / example5_numB;
console.log(`10 + 2 = ${example5_sum}, 10 - 2 = ${example5_sub}, 10 * 2 = ${example5_mult}, 10 / 2 = ${example5_div}`);


//Пример 6
let example6_numC = 15, example6_numD = 2, example6_result;
example6_result = example6_numC + example6_numD;
console.log(`15 + 2 = ${example6_result}`);


//Пример 7
let example7_numA = 10, example7_numB = 2, example7_numC = 5, example7_result;
example7_result = example7_numA + example7_numB + example7_numC;
console.log(`10 + 2 + 5 = ${example7_result}`);


//Пример 8
let example8_numA = 17, example8_numB = 10, example8_numC, example8_numD = 7, example8_result;
example8_numC = example8_numA - example8_numB;
example8_result = example8_numC + example8_numD;
console.log(`17 - 10 + 7 = ${example8_result}`);


//Пример 9
let example9_name = 'Alexander';
console.log(`Привет, ${example9_name}!`);


//Пример 10
let example10_age = 18;
console.log(`Мне ${example10_age} лет`);


//Пример 11
let example11_str = 'abcde';
console.log(`Символы из строки 'abcde': ${example11_str[0]}, ${example11_str[2]}, ${example11_str[4]}`);


//Пример 12
let example12_sec = 60, example12_hour, example12_day, example12_month;
example12_hour = example12_sec * 60;
example12_day = example12_hour * 24;
example12_month = example12_day * 30;
console.log(`Кол-во секунд в часе = ${example12_hour}, в сутках = ${example12_day}, в месяце = ${example12_month}`);


//Пример 13
let example13_num = 47;
example13_num += 7;
example13_num -= 18;
example13_num *= 10;
example13_num /= 15; 
console.log(`Результат от 47 = ${example13_num}`);


//Пример 14
let example14_num = 10;
example14_num++;
example14_num++;
example14_num--;
console.log(`Результат от 10 = ${example14_num}`);