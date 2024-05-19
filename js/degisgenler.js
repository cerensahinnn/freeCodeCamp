/* data types 
undefined, null, boolean, string, symbol, number, and object */ 

var myName = "Ceren" // var değer tanımlamamızı ve atamamızı sağlar
myAge = 20
 
let ourName = "Coder" // let değer tanımlamamızı ve atamamızı sağlar

const pi = 3.14 // değeri asla değişmeyenler için const kullanılır

var a; // a'yı tanımlamak demektir. bu noktada consol.log denirse output = null olur. 
var b = 3; // b'yi tanımlayıp değer atamak demektir.
a = 7;
console.log(a) // output= 7 olur. 

var c = 3; 
var d = 7;
var f = "I am a"
// ve sonrasında biz de şunları kullanarak değer atayabiliri.
c = c + 7;
d = d - 2;
f = f + " student." 
/* yeni outputlar şu şekilde olur
c= 10 d=5 f= "I am a student." */

c += 7; // bu aslında c = c + 7 işlemini ifade eder ve output = 10'dur.
d -= 2; // d = d - 2 ifade eder, output = 5 
a *= 2; // a = a * 2, output = 14
b /= 3; // b = b / 3, output = 1

var sum = 10 + 10;
console.log(sum) // sum değerini hesaplayıp sonucu verir. outout = 20

var difference = 50 - 6;
console.log(difference) // output = 44 

var product = 22 * 2;
console.log(product) // output = 44

var quotient = 32 / 2;
console.log(quotient) // output = 16 

var x = 44;
x++; // bu -> x = x + 1 anlamına gelir. (kısaca gösterimi bu şekilde olur)
console.log(x) // output = 45 

var y = 44;
y--; // bu -> y = y -1  anlamına gelir. (kısaca)
console.log(y) // output = 43 

var ourDecimal = 5.4 // var değişgeni ondalık sayı değerleri de alabilir.
console.log(ourDecimal) // output = 5.4 

// bu ondalık sayılar ile toplama, çıkarma, çarpma, bölme işlemleri yine aynı tam sayılarda oldupu gibi yapılabilir.

var remainder; // remainder bölümden kalanı verir
remainder = 11 % 3; // burda 11'in 3 e bölümünden kalan 2dir, output = 2 
console.log(remainder) 

var myString = "String ifademin içerisinde ne zaman \" tırnak işareti \" kullanmak istersem önüne ters slash getirmem gerekir, yoksa çalışmaz. " 
console.log(myString) // output'ta slash sayesinde tırnak işaretimiz gözükür.
// bu işlemi yapmak yerine çift tırnak işaretini kullanabilmek adına tanımlama yaparken tek tırnak da kullanabilirdim. 
var myOtherString = 'Bakınız burada "çift tırnak işareti" kullanabildim.'
console.log(myOtherString) 

/* 
CODE   OUTPUT
\'     single quote
\"     double quote  
\\     backslash
\n     new line
\r     carriage return (satır başı)
\t     tab
\b     backspace
\f     form feed (sonraki sayfaya geçer)

*/

var ourString = "I come first" + " I come second" // bu şekilde eklenebilir 
console.log(ourString) 

var myString2 = "İlk madde"
myString2 += " ve ikinci madde" 
console.log(myString2) 

var hisName = " Anıl. " 
var ourSentence = "Hello, My name is" + hisName + "Nice to meet you";
console.log(ourSentence)  

// Finding length of string
var firstNameLength;
var firstName = "Anıl"

firstNameLength = firstName.length; // .length komutu ile girilen değerin(yazının) kaç harf olduğunu hesaplayabiliriz.
console.log(firstNameLength) // output = 4 olur, anıl kelimesi 4 harflidir. 

var firstLetterOfFirstName;
firstLetterOfFirstName = firstName[0] // yazılan yazıda bulunan harfler array elemanlarını oluşturur.
// array'in içinden hangisini öğrenmek istiyorsak [] ile çağırabiliriz. 
// bilgisayar dili 0'dan başlayarak sayıyor, bu yüzden [0] ilk elemanı çağırı ve array length - 1 kadar elemandan oluşur diyebiliriz. 
console.log(firstLetterOfFirstName) // ouput = A

/* HATALI kullanım: 
bu noktadan sonra zaten firstName ' e değer atamışken üstünden şöyle bir değişiklik yapılamaz.
firstName [2] = i ---> bu noktada arrayin 2. elemanını değiştirip çıktı olarak "Anil" vermesi beklenmez. */

var lastLetterOfFirstName;
lastLetterOfFirstName = firstName[firstName.length - 1] // length-1 son elemanı ifade eder ve biz son harfi öğrenebiliriz. output=l
console.log(lastLetterOfFirstName) 

function wordBlank (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective  + " " + myNoun  + " " + myVerb + " very " + myAdverb; 
    return result ;
}
console.log(wordBlank("dog", "big", "run", "fastly")); // fonksiyonu oluşturduğum için şimdi istediğim verileri girerek aynı yapıda cümleler oluşturabilirim. 

var ourArray = ["Lewis", 44];
console.log(ourArray) 

var ourArray2 = [["Lewis", 44], ["Hamilton"]] 
console.log(ourArray2) 

var ourArray3 = [33,44,16,55];
ourArray3[3] = 5;
console.log(ourArray3) // output = [33 44 16 5]

var ourArray4 = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var ourData = ourArray4[0][2] // 3 değerini verir
var ourData2 = ourArray4[3][0][1] // 11 değerini verir. 
console.log(ourData)
console.log(ourData2)

// .push() ile array'e sondan eleman eklemek 
var ourArray5 = ["Lewis", "Hamilton", 44]
ourArray5.push(" is World Drivers' Champion for the 8th time. ")
console.log(ourArray5) 

// .pop() ile array'e sondan eleman silmek
var ourArray5 = ["Lewis", "Hamilton", 44];
ourArray5.pop()
console.log(ourArray5)
/*  ?????
var ourRemovedOne = ourArray5.pop();
console.log(ourRemovedOne) // output = 44  
*/

// .shift() ile array'in başından eleman silmek
var ourArray6 = ["Lewis", "Hamilton", 8];
ourArray6.shift()
console.log(ourArray6) 

// .unshift() ile array'e baştann eleman eklemek 
ourArray6.unshift("World champion")
console.log(ourArray6)

function ourReusableFunction() { // fonksiyonları tekrar tekrar kullanabiliriz. 
    console.log("Max Verstappen")
}

ourReusableFunction(); // şuanda bu fonksiyonu çağırdım ve bu sayede output ekranında max verstappen gördüm. Yani fonksiyonu çalıştırmış oldum, diğer türlü içindekini okumayazdık. 

function ourFunctionWithArg (a,b) { 
    console.log(a - b);
}
ourFunctionWithArg (10,5); 


// fonksiyonlarla denemeler yaptık. 
var myGlobal =10;
function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output = "My global: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output = "Oops global: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();
/* HATALI kullanım
console.log(output)  ---> eğer bu kodu burda çağırırsak hata verir, kendisi fun2 içinde olduğundan ancak fun2 çağırılırsa çıktı verir. */

// Burda global ve localde aynı isimler verebileceğimizi ama farklı şeyler ifade edip farklı çıktılar verebileceğini gösterdik.
var outerWear = "T-shirt"

function myOutFit() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutFit()); // function çağırdığımıx için onun içindeki outerWear'ı çıktı alır
console.log(outerWear);  // function dışında (Globalde) tanımlanmış bir outerWear olduğu için onu çağırdı, funciton içindekini değil. 


// function ile mantık kurma ve işlem deneme 
function minusNum(num) {
    return num - 7;
}
console.log(minusNum(10))

function timesNum (num) {
    return num * 5;
}
console.log(timesNum(11)); 

var summi = 0;
function addFive() {
    summi += 5;
}
// not going to return anything
console.log(addFive()); // undefined çıktısı verir çünkü içine ne değeri verirsen ver fonsiyonda değer atayamıyor. 

var changed = 0;
function change(num) {
    return (num + 10)/2;
}

changed = change(78); // değer atamak için function kullandık.
console.log(changed)

function nextInLine(arr, item){
    arr.push(item)
    return arr.shift()
}

var testArr = [1,2,3,4,5];
console.log("Before" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); 
console.log("After" + JSON.stringify(testArr));

// Boolean values 
function welcomeTheBoolean() {
    return true;
}

// use conditional logic with if statement

function ourTrueOrFalse (isItTrue) {
    if (isItTrue) {
        return "yes, it is true";
    }
    return "no, it is false";
}

console.log(ourTrueOrFalse(true))

function testEqual(val){
    if (val == 12) {  // if eğer anlamı kattığı için == ile sorguluyoruz, = tanımlamak demektir. 
        return "Equal";
    }
    return "not equal";
} 
console.log(testEqual(10)) 

function testStrict(val) {
    if (val === 3){ // 3 
        return "equal"
    }
    return "not equal"
}
console.log(testStrict(3))

/*  === bu sayı ve yazı arasında T(YPES) kımsına dikkat eder. 
3 === 3   this means true, bir birine eşittir 
3 === '3'    this means false, ama type'ları farklı olduğu için eşittir diyemeyiz.
*/

function compareEquality(a, b) {
    if (a === b) { // === ile yazıldığında output = not equal olur, girilen değerlerin biri number biri string.
        return "equal"; // eğer if içindeki == olsaydı output = equal olurdu. değerlerin ikisi de 10 demek oluyor.
    }
    return "not equal";
}
console.log(compareEquality(10, "10"))

function testNotEqual(val) {
    if (val != 99) { // != means that if is not qual to ... 
        return "equal"; 
    }
    return "not equal"; // val 99'a eşitse not equal olur. 
}
console.log(testNotEqual(99))


function testStrictNotEqual(val) {
    if (val !== 99) { // != means that if is not qual to ... 
        return "equal"; 
    }
    return "not equal"; // val 99'a sayısal eşitse not equal olur. yani convert yapmaz ve string type kabul etmez 
}
console.log(testStrictNotEqual("99")) // output equal çıkar ( eşit değilse equal olucaktı zaten) çünkü string type'ı kabul etmez

function testGreaterThan(val) {
    if (val > 100) {  // eğer büyükse
        return "Over 100"; 
    }
    if (val < 10 ) { // eğer küçükse
        return "Under 10"
    }
    return "Between 10-100"; 
}
console.log(testGreaterThan(55))

function testGreaterOrEqual(val) {
    if (val >= 44) {  // eğer büyük ve eşitse
        return "44 or Over"; 
    }
    if (val <= 16 ) { // eğer küçük ve eşitse
        return "16 or Under"
    }
    return "between 16-44"; 
}
console.log(testGreaterOrEqual(33))

// if içindeki AND operator
function testLogicalAnd(val) {
    if (val >= 16 && val <= 55) { // &&  : " ve (AND)" anlamında gelir 
        return "It could be Charles, Lewis, Max or Carlos. "; 
    }
    return "Other drivers"; 
}
console.log(testLogicalAnd(1))

// if içindeki OR operator
function testLogicalOr(val) {
    if (val < 16 || val > 55) { // ||  : " ya da (OR)" anlamında gelir 
        return "Drivers"; 
    }
    return "It could be Charles, Lewis, Max or Carlos. "; 
}
console.log(testLogicalOr(44))

function testElse(val) {
    var result = ""; 
    if (val > 5) { // ||  : " ya da (OR)" anlamında gelir 
        result = "bigger than 5 ";
    } else {
        result = "5 or smaller";
    }
     return result;  
}
console.log(testElse(44))




