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

// Bài 6: 
// a = 2;
// var a;
// console.log(a); //2

// Bài 7:
// console.log( a ); //undefined
// var a = 2;

// Bài 8:
// var a = 10;
// function foo() {
// var a;
// console.log( a ); //undefined vì đã khởi tạo nhưng k có giá tri
// a = 2;
// }
// foo();

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

// Bài 11: Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// function removeEnd(arr, n) {
//     for (i=0; i<n; i++ ){
//         arr.pop()
//     } return arr
// }
// console.log (removeEnd([1, 2, 3, 4, 6, 8, 33], 2));

// Cách 2
// arr = prompt ("Nhập vào các số cách nhau bởi dấu cách").split(" ")
// let deletedArr = arr.splice(arr.length - 3, 3)
// console.log(deletedArr);

// 12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array
// function first(arr, n) {
//     let newArr = []
//     for (i=0; i<n; i++){
//         newArr.push(arr[i])
//     } return newArr 
// }
// console.log(first([1, 2, 3, 4, 6, 8, 33], 2));


// 13: Cho 1 mảng
const users = [
    {
    name: "Angelina Jolie",
    age: 80
    },
    {
    name: "Eric Jones",
    age: 2
    },
    {
    name: "Paris Hilton",
    age: 5
    },
    {
    name: "Kayne West",
    age: 16
    },
    {
    name: "Bob Ziroll",
    age: 100
}
]
// Sử dụng phương thức map() của array, 
// tạo một array mới với các phần tử con ở trong có name nằm trong các thẻ h1, age nằm trong các thẻ h2  

let newArr = users.map(myFunction)

function myFunction(){
    let tempArr = []
        for (i=0; i< users.length; i++){
           users[i].name
        }
    // return tempArr
}
// console.log(newArr);

