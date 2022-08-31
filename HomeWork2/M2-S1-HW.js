// Bài 1

// Bài 2

// Bài 3
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// // Function declaration
// function calAge(year) {
//     return 2022 - year;
// }
//---------------------------------------------------------------------------------------------------------
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }

// Bài 4:
// debugger
// console.log(`1. ${age}`); //TODO: undefined vì chưa có giá trị khởi tạo
// var age = 20;
// console.log(`2. ${age}`); // 20
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`) //27 vì function thực hiện trước hay sao logic vẫn oke
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27
// console.log(`5. ${getFullName(firstName, lastName)}`); // Peter Parker
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); // Peter Parker

//---------------------------------------------------------------------------------------------------------

// Bài 5:
// console.log(age); // Lỗi vì bản chất của let là đã cho code biêt có biến này nhưng chưa dc khởi tạo
// let age = 27;
// console.log(age); // 27
// {
// console.log(firstName); // undefined
// console.log(age); // undefined
// console.log(age); // undefined
// let firstName = "Peter"; 
// let lastName = "Parker"; 
// const job = "Spider man";
// console.log(firstName); // Peter
// console.log(lastName); // Parker
// console.log(job); //Spider man
// }
//---------------------------------------------------------------------------------------------------------

// Bài 6: 
// a = 2;
// var a;
// console.log(a); //2

//---------------------------------------------------------------------------------------------------------

// Bài 7:
// console.log( a ); //undefined
// var a = 2;

//---------------------------------------------------------------------------------------------------------

// Bài 8:
// var a = 10;
// function foo() {
// var a;
// console.log( a ); //undefined vì đã khởi tạo nhưng k có giá tri
// a = 2;
// }
// foo();

//---------------------------------------------------------------------------------------------------------

// Bài 9:
//FIXME: Không đặt được biến var = foo()
// foo();
// var foo;
// function foo() {
// console.log(1); // 1
// }
// foo = function() {
// console.log(2); // ???
// }

//---------------------------------------------------------------------------------------------------------

// Bài 10: Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()
//FIXME: Không đặt được biến var = foo()
// var foo();
// function foo() {
// console.log(1);
// }
// foo = function() {
// console.log(2);
// }
// foo();

//---------------------------------------------------------------------------------------------------------

// Bài 11: Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// function removeEnd(arr, n) {
//     for (i=0; i<n; i++ ){
//         arr.pop()
//     } return arr
// }
// console.log (removeEnd([1, 2, 3, 4, 6, 8, 33], 2));

// Cách 2
// var arr = prompt ("Nhập vào các số cách nhau bởi dấu cách").split(" ");
// let a = arr.length-3;
// arr.splice(a, 3)
// console.log(arr);

//---------------------------------------------------------------------------------------------------------

// 12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function first(arr, n) {
//     let newArr = []
//     for (i=0; i<n; i++){
//         newArr.push(arr[i])
//     } return newArr 
// }
// console.log(first([1, 2, 3, 4, 6, 8, 33], 2));

//---------------------------------------------------------------------------------------------------------

// 13: Cho 1 mảng
// const users = [
//     {
//     name: "Angelina Jolie",
//     age: 80
//     },
//     {
//     name: "Eric Jones",
//     age: 2
//     },
//     {
//     name: "Paris Hilton",
//     age: 5
//     },
//     {
//     name: "Kayne West",
//     age: 16
//     },
//     {
//     name: "Bob Ziroll",
//     age: 100
// }
// ]
// Sử dụng phương thức map() của array, 
// tạo một array mới với các phần tử con ở trong có name nằm trong các thẻ h1, age nằm trong các thẻ h2  

// let newArr = users.map(function(users) {
//     return {
//         name: `<h1>${users.name}</h1>`,
//         age: `<h2>${users.age}</h2>`,
//     }
// })

// console.log(newArr);

//---------------------------------------------------------------------------------------------------------

// Bài 14: Vẫn sử dụng mảng cho sẵn ở bài 12, sử dụng phương thức map() của array, tạo ra một
// mảng mới chỉ chưa tên của các phần tử object con nằm trong mảng lớn.
// let a = users.map(function(users){
//     return users.name
// })
// console.log(a);

// let b = users.map(function(users){
//     return users.age
// })
// console.log(b);

//---------------------------------------------------------------------------------------------------------

// Bài 15
// - Viết một hàm triple() trả về một số đã được nhân 3
// - Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và
// trả về mảng mới với các số đã được nhân 3. Sử dụng hàm triple để nhân 3 các
// số đó. 

// function triple(number) {
//     number = number * 3
//     return number
// }
// console.log(triple(3));

// let arr = [1,2,3,5,5,6,4,8,9]
// let arrMultiply = arr.map(function multiply(arr){
//     return triple(arr)
// })
// console.log(arrMultiply);


//---------------------------------------------------------------------------------------------------------

// Bài 16. 
// Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên, hàm đó
// trả về một mảng mới chỉ chứa các phần tử lớn hơn 5

// function filterArr(arr){
//     let result = arr.filter(function(a){
//         return a > 5
//     }) 
//     return result
// } console.log(filterArr([1,2,5,6,7,8,9,11]));

//---------------------------------------------------------------------------------------------------------

// Bài 17
// Cho mảng sau:
var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
    ];

// Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array, trả về
// một mảng mới chỉ chữa những phần tử object có gender là female

var members_gender = members.filter(function (members) {
  return members.gender == "female";
});
console.log(members_gender);

















