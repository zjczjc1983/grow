'use strict'
// exmaple one
var scareMe = function () {
	alert('Boo!')
	scareMe = function () {
		alert('Double boo!')
	}
}

// // 使用自定义函数
// scareMe() // 输出Boo!
// scareMe() // 输出Double boo!

// example two
// 1.添加一个新的属性
scareMe.property = 'properly'

// 2.赋值给另一个不同名称的变量
var prank = scareMe

// 3.作为一个方法使用
var spooky = {
	boo: scareMe
}

// calling with a new name
prank() // 输出Boo!
prank() // 输出Boo!
console.log(prank.property) // 输出"properly"

// 作为一个方法来调用
spooky.boo() // 输出"Boo!"
spooky.boo() // 输出"Boo!"
console.log(spooky.boo.property) // 输出"properly"

// 使用自定义函数
scareMe() // 输出Double boo!
scareMe() // 输出Double boo!
console.log(scareMe.prototype) // 输出undefined
