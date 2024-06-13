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
    if (val > 5) { 
        result = "bigger than 5 ";
    } else {
        result = "5 or smaller";
    }
     return result;  
}
console.log(testElse(44))

function testElseIf(val) {
    if (val > 10) { // ||  : " ya da (OR)" anlamında gelir 
        return "bigger than 10 ";
    } else if(val < 5 ) {
        return "smaller than 5";
    } else { 
        return "between 5 or 10"
    } 
}
console.log(testElseIf(44))


// Order'ın önemi!!!
function orderMyLogic(val) {
    if (val < 5) {  // eğer sayısının 5ten küçükse ve farklı bir sonuç göstermesini istiyorsak ilk sıraya yazmalıyız.
        return "less than 5"
    }
    else if ( val < 10) { // örn: 3 olursa 5ten de küçüktür 10dan da. bu yüzden sıralama önemli.
        return "less than 10" // "val < 10" komutunu ilk sıraya yazsaydık "less than 5" sonucunu göremezdik !!!!
    }
    else {
        return "greater than or equal to 10 "
    }
}
console.log(orderMyLogic(4))

function testSize(num) {
    if (num < 5 ){
        return "Tiny"
    } else if (num < 10){
        return "Small"
    } else if (num < 15){
        return "Medium"
    } else if (num < 20){
        return "Large"
    }  else { // (num >= 20) olduğu durumlarda
        return "Huge"
    } 
}
console.log(testSize(16))


// Golf code, Par= bir deliğin, raundun ya da turnuvanın tamamlanması için yapılması gereken vuruş sayısıdır. strokes=vuruş 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1){
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par){
        return names[3]
    } else if (strokes == par + 1){
        return names[4]
    } else if (strokes == par + 2){
        return names[5]
    } else (strokes >= par + 3);
        return names[6]
}
console.log(golfScore(1,1))

// Switch statement: case'ler ile çalışır. 
function caseInSwitch(val) {
    var answer ="";
    switch (val){
        case 1:
            answer = "alpha";
            break; // buradaki "break" case 1 kullanılacaksa kullan ve switchTen çık anlamına gelir. 
        case 2:
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer; // case'ler dışında değer girildiğinde answer boş gözükecek.(en başta öyle tanımlanmış)
}
console.log(caseInSwitch(4))

function switchOfStuff(val) {
    var answer ="";
    switch (val){
        case "a": // tırnak işareti ile string değer girmiş olduk 
            answer = "apple";
            break; 
        case "b":    
            answer = "bird";
            break;
        case "c": 
            answer = "cat";
            break;
        case "d":
            answer = "dog";
            break;
        default: // case'ler dışında bir girdi olursa ne yapması gerektiği söylüyor, aynı "else" gibi.
            answer = "stuff";
            break;
    }
    return answer; 
}
console.log(switchOfStuff("g")) // default olmasaydı, number type girdiğimde (örn:2), boş gözükecekti.(başta öyle tanımlanmış)

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3: // bu şekilde ccase 1 2 3 hepsi break'e gelene kadar aynı şeyi ifade ediyor. 
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6: // aynı şekilde case 4 5 6 da break'e gelene kadar aynı şeyi ifade ediyor.
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9: // aynı şekilde ne zaman case 7 olsa 8 ve 9 a giriyor break 9. sonunda olduğunda cevap oradaki oluyor.
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(4))

// alıştırma: if else statement'ı switch statement yap
function chainToSwitch (val){
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case "42":
            answer = "The answer";
            break;
        case "1":
            answer = "There is no #1";
            break;
        case "99":
            answer = "Missed me by this much";
            break;
        case "7":
            answer = "Ate nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch("bob"))

// alıştırma: Returning Boolean values from functions (if else ile yazılanı boolean yapıcaz.)
// if else ile yapılan true-false
function isLess(a,b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isLess(10,20)) // output= true

function isLessThis(a,b) {
    return (a < b); // girilen değerlerle beraber şartımızı sağlıyorsa true gösterir, değilse false. 
}
console.log(isLessThis(20,10)) // output= false

function abTest(a,b) {
    if (a < 0 || b < 0){
    return undefined; 
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,5))

// Blackjack card counting function örneği
var count = 0 ;
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    } 
    return count + " " + holdbet
}

console.log(cc("A"))

// Object: similiar to arrays except that instead of using indexes to access data, you use properties. 
var ourDog = {
        "name" : "dobby", // bunların her biri özellik properties) oluyor. 
        "legs" : "4",
        "tails" : "1",
        "friends" : ["everything!"]
};

// There are too many ways to access a property on an object.
// dot notation
var testObj = {
    "hat" : "Mercedes",
    "shirt" : "Ferrari",
    "shoes" : "Nike"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue)
console.log(shirtValue)

// bracket notation
var testFood = {
    "Dish" : "Sushi",
    "Ingredients" : "Fish",
    "Drink" : "Sparkling water"
};
var dishPrefer = testFood["Dish"];
var ingredients = testFood["Ingredients"];
console.log(dishPrefer)
console.log(ingredients)

// Accessing object properties with variables 
var testObjc = {
    16 : "Charles",
    33 : "Max",
    44 : "Lewis"
};
var playerNumber = 16;
var player = testObjc[playerNumber]; // istediğim property'yi bir variable ile çağırdım.
console.log(playerNumber)
console.log(player) // player'ı çağırdım ve testObjc içindeki bir özelliği çağırmış oldum.


// using objets for lookup: burda switch case ile tek tek yapılabilirdi ama properties belirlemek de işe yarıyor.
function phoneticLookup (val) {
    var result = "";
    var lookup = {
        "Team" : "Redbull",
        "Principal" : "Christan Horner",
        "Sponspor" : "Bybit",
        "Driver 1" : "Max Verstappen",
        "Driver 2" : "Sergio Perez"
    }
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("Principal"))

// .hasOwnProperty method 
var yourObj = {
    gift : "car",
    pet : "dog",
    city : "miami"
};
function checkObj(checkProp) { // propları kastediyor, gift , pet ve city.
    if (yourObj.hasOwnProperty(checkProp)){ // .hasOwnProperty komutu Bir nesnenin belirtilen adda bir özelliğe sahip olup olmadığını belirler. Bir (parameter) özellik adı.
        return yourObj[checkProp];
    } else {
        return "not found"
    }
}
console.log(checkObj("car")) 

// Manipulating complex objects
var myMusic = [ 
    {
        "artist" : "Ceren Şahin",
        "style" : "Pop",
        "Format" : [ 
            "MP3",
            "spotify"
        ],
        "gold" : true 
    },
    {
        "artist" : "Anıl Karaçay",
        "style" : "Rap",
        "Format" : [ 
            "CD",
            "Youtube",
            "spotify"
        ],
        "gold" : true 
    }
];
console.log("Artist 1:", myMusic[0].artist); // console ile yazdırırken + işareti yerine , kullandım.
console.log("Artist 2:", myMusic[1].artist);

// accessing nested objects(iç içe geçmiş nesneler)
var inMyPaddock = {
    "paddock"  : { 
        "Team" : {
            "Team Name" : "Redbull Racing", // "Team Name" 2 kelime yani boşluklu olduğu için [] içinde çağırılır.
            "Principal Name" : "Christan Horner", 
        },
        "Sponspor" : { 
            "Main" : "Bybit"
        }
    }
}
console.log("Formula 1:", inMyPaddock.paddock.Team["Team Name"]); // . ile tek tek iç kısma geçtik,en son[] ile çağırdk.

// accessing nested arrays
var inFormula = [ 
    {
        "paddock" : "teams", 
        "list" : [ 
            "Ferrari",
            "Mercedes",
            "Mclaren" 
        ], 
    },
    {
        "paddock" : "Drivers",
        "list" : [ 
            "Carlos Sainz",
            "Lando Norris",
            "Charles Leclerc"
        ],
    }
];
console.log("Team is", inFormula[0].list[0]); 

// record collection 
var collection = {
    "2548" : {
        "Ferrari" : "red",
        "Mercedes" : "black",
        "Mclaren" : ["orange", "white"] 
    },
    "4321" : {
        "Ferrari" : "Carlos Sainz",
        "Mercedes": "Lewis Hamilton",
        "Mclaren": ["Lando Norris", "Oscar Piastri"]
    }
}
var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id,prop,value) {
    if (value === "") {
        delete collection[id][prop]; 
       } else if (prop == "tracks") {  // tracks burada parçalı olan property anlamına geliyor. 
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
       } else {
        collection[id][prop] = value;
       }
       return collection;
}
console.log(updateRecords(2548 , "Ferrari" , "blue")); // else çalıştı ve çıktı verdi
console.log(updateRecords(4321, "Mclaren", "LANDO")); // else if çalıştı, yanı parçalı olan property çağrıldı.

// WHILE: i ile array yazdırma 
var testiArray =[];
var i = 0;
while ( i < 5 ) {
    testiArray.push(i);
    i++;
}
console.log(testiArray);

// FOR: i ile array yazdırma
var testiArray2 = [] ;
for ( var i = 0; i < 8; i++ ) {
    testiArray2.push(i);
}
console.log(testiArray2)

// çift sayılardan oluşan array yazdırma
var testiArray3 = [] ;
for ( var i = 0 ; i < 8 ; i+=2 ) {
    testiArray3.push(i);
}
console.log(testiArray3)

// geriye doğru teker teker sayma 
var testiArray4 = [] ;
for ( var i = 10 ; i > 0 ; i-- ) {
    testiArray4.push(i);
}
console.log(testiArray4)

var testiArray5 = [9, 10, 11, 12] ;
var ourTotal = 0 ;
for ( var i = 0; i < testiArray5.length ; i++ ) {
    ourTotal += testiArray5[i];
}
console.log(ourTotal);
console.log(testiArray5);


// iç içe arrayler ile işlemler
function multiplyAll(arr) {
    var products = 1;

    for ( var i = 0; i < arr.length; i++ ) {
        for (var j = 0; j < arr[i].length; j++) {
            products *= arr[i][j];
        }
    } return products;
}
var products = multiplyAll([[1,2],[3,4],[5,6,7]])
console.log(products);

// do while loops: ilk önce yapar sonra şarta uyar
var testiArray6 = [] ;
var i = 10;

do {
    testiArray6.push(i); // bunları yaptı
    i++;
} while (i < 5)  // şarta baktı ve sağlamadığı için daha fazla ilerlemedi
console.log(testiArray6);
console.log("i after: ", i);

// generate random fractions : .random, kesirli random bir sayı üretir 0 ile 1 arasında.
function randomFraction () { // math.random can never be 1, it can be 0. 
    return Math.random ();
}
console.log(randomFraction());

// rnadom number between a and b ==> // .floor en yakın tam sayıya yuvarlar
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // 20 ile çarpmak demek 0 ile 20 arasında olur 
// ancak 20 olamaz çünkü math.random 1 olamaayacağından 20 de olmaz.  
function randomWholeNumber () { 
    return Math.floor(Math.random() * 10); // sayı 0 ile 10 arasında olur 
}
console.log(randomWholeNumber());
console.log(randomNumberBetween0and19);

// generate random whole number within a range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(3,7);
console.log(myRandom); 

//use the parseInt function : string alıp integer döndürüyor. eğer yazıyı sayıya çeviremezse NaN gözükür(not a num).
function convertIntoInteger (str) {
    return parseInt(str);
}
console.log("55");

// use the parseInt function with radix => radix sayısının base'ini belirler, binary(2) or decimal(10) gibi. 
function convertIntoInteger2 (str) {
    return parseInt(str , 2) // binary (2) dedik.
}
console.log(convertIntoInteger2("10011"));

// use the conditional (tarnary) operator (üçlü operator kullanmak)
// condition ? statement-if-true : statement-if-false
function checkEqual (a , b) {
    return  a === b ? true : false ;
    // return a === b;
}

 console.log(checkEqual(1,2));

 // use the multiple conditional (tarnary) operator (birden fazla 3lü operator kullanırken)
 function checkSign (num) {
    return  num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    // return a === b;
}

 console.log(checkSign(0)); 

 // difference between the var and let keywords
var catName = "Neela"; 
var quote;
var catName = "niloş" 
console.log(catName) // var kullanarak istersem bir variable'a 2 defa değer atayabilirim.En son verilen değeri gösterir.

let dogName = "Trex"; 
let quote1;
dogName = "Flash" // let kullanmadan tanımlama yaparsam code çalışır. 
console.log(dogName) // let kullanarak 2 defa atama yapamadım variable'a. 

function catTalk() {
    "use strict"; // bu eğer kodda hata varsa bunu bul demek.
    catName = "Olive";
    quote = catName + " says meow";
    return quote
}
console.log(catTalk());


function checkScope(){
let i = "function scope"; // var kullanmış olsaydık aşağıda if'indeki yeni i değeri dönecekti.
    if (true) {
        let i = "Block scope"; // let kullanmamızla beraber sadece if içinde tanımlamış olduk.
        console.log("Block Scope is : " + i);
    }
    console.log("Fucntion scope is : " + i);
    return i
}
console.log(checkScope()); 

function printManyTimes (str) {
    "use strict";
    const SENTENCE = str + " is cool." // const kullandığımız için değiştiremeyiz, hata verir
    for (let i = 0; i < str.length ; i++ ){
        console.log(SENTENCE)
    }
}
console.log(printManyTimes("Anıl"))

const s = [2,5,7]
function editInPlace () {
    // s = [7, 2,5] diye yazıp direkt değiştiremiyoruz, const izin vermiyor 
    s [0] = 7; // şeklinde tek tek elemanları değiştirebiliriz.
    s [1] = 2;
    s [2] = 5;
    return s
}
console.log(editInPlace());

// prevent object mutation 
function freezeObj () {
    "use strict";
    const MATH_CONSTANT = {
        PI : 3.14 // math_constant için property verdil
    };
    Object.freeze(MATH_CONSTANT); // bununla birlikte dediğimiz variable'ı kitledik ve sonrasında değişmeyeceğini garantiledik.
    try {
        MATH_CONSTANT.PI = 99;
    } catch ( ex ){
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}
const PI = freezeObj();
console.log(PI)


/* şimdi yazacaklarımız bu alttakinin kısa versiyonu.
var magic = function () {
    return new date();
}; */
const magic = () => new date(); // => arrow function to write concise and anonymousfunction

// .concat = birleştirmek için kullanılıyor, bununla beraber bir örnek verelim. 
var myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5])); // output = [1,2,3,4,5]

// we want to compute the square of only the positive integers in the array.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
const squareList = (arr)/* func içi */=> { /* func komutları */
    const squareInteger = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); // burdaki x: every element from the array that's being passed to it.
    return squareInteger;
} 
const squareInteger = squareList(realNumberArray);
console.log(squareInteger);

const increment = (function () {
    return function increment (number ,value = 1){
        return number + value;
    };
}) ();
console.log(increment(5,2));
console.log(increment (5));

// rest operator = ... => convert everythin thats passed in into one array called args
const sum1 = (function () {
    return function sum1 (...args){ // x,y,z yazmak yerine ...args yazdık ve 
        // const args = [x,y,z]; bu satıra gerek kalmadı
        return args.reduce((a,b) => a + b, 0)
    };
}) ();
console.log(sum1(1,2,3,4)); // we can have any number of arguments 

// spread poperator= [...array]
const arr1 = ['jun', 'july', 'august', 'september'];
let arr2;
(function () {
    arr2 = [...arr1]; // spread operator ile arr2 yi arr1deki gibi yaptık
    arr1[0] = 'potato' // spread operator sayesinde burda değişiklik arr2'yi etkilemeyecek.
})();
console.log(arr1);
console.log(arr2);

/* functionun parantez içinde başlaması yani
(function (){..})(); 
    şeklinde bir yazımının olması IIFE'den kaynaklanıyor,Bu kısımda ise anonim bir fonksiyon tanımlanıyor ve hemen ardından ( ) ile çağrılıyor. İşte bu kısım IIFE'dir. IIFE'nin amacı, kapsama (scope) seviyesinde izole bir alan yaratmaktır. Yani bu fonksiyon içindeki değişkenler ve işlemler, dışarıdaki diğer kodlar ile karışmaz.

    ~~~~~* IIFE'nin Kullanım Nedenleri *~~~~
    Değişken Kapsamını İzole Etmek:
    IIFE kullanarak, o fonksiyon içinde tanımlanan değişkenler dışarıdaki global veya başka kapsamlar ile karışmaz. Bu, özellikle büyük kod tabanlarında veya modüler yapıda kod yazarken faydalıdır.

    Anında Fonksiyon Çalıştırma:
    Bir fonksiyonun hemen tanımlandığı anda çalıştırılması gerekiyorsa IIFE kullanılır. Bu, başlangıçta bazı ayarlamalar yapmak veya bir dizi işlem gerçekleştirmek için yaygın bir yöntemdir.
*/

// destructring assignment 
var voxel = { x: 3.6 , y: 7.4, z: 6.54}
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
//tek tek var ile x y z için değer atamanın kısa yolu aşağıdaki (satır 964)
const {x: ab, y: bc, z: cd} = voxel ; // a=3.6, b=7.4, c=6.54
 
//temperature 
const AVG_TEMPERATURES = {
    today: 26,
    tomorrow: 32
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures; // bu satırda tempOfTomorrow variable'ına değer ataması yaptım, tomorrow neye eşitse o da ona eşit oldu. 
    return tempOfTomorrow
}

console.log(getTempOfTmrw (AVG_TEMPERATURES));

const [k,l, , m] = [1,2,3,4,5,6];
console.log(k,l,m); // output = 1 2 4 olmuş

let a1 = 8, b1 = 6;
(() => {
    "use strict"
    [a1,b1] = [b1,a1];
})();
console.log(a1)
console.log(b1);

const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo (list) {
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// create string using template literals 
const person = {
    name: "Lewis Hamilton",
    age: "39"
}
const greeting = `This is the world drivers champion, ${person.name}! He is ${person.age} years old.`;
console.log(greeting);

// devamında bir yer var, videoda 3.08.00 a bak.


// bir object functiona sahip olabilir
const bicycle = {
    gear: 2,
    setGear (newGear){ // setGear : function (newGear){ =>>> böyle demek yerine bu şekilde yazdık
    "use strict";
    this.gear = newGear;
    }
};
bicycle.setGear(3)
console.log(bicycle.gear)

// use class syntax to define a constructure function
