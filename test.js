var num = "3-56.87";

console.log(parseFloat(num));


if ((num.includes('-')) && (num.charAt(0) !== '-')) { console.log ('invalid'); }
if ((num.includes('+'))  || (num.includes('e')) || (num.includes('E'))) { console.log ('invalid'); }

/*

"123.4" => 123.4
"-123.4" => 123.4


*/