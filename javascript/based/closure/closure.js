/*
 * Wikipedia对闭包的定义：
 * In computer science, a closure is a function together with a referencing environment for the nonlocal names (free variables) of that function.
 * 在计算机科学中，闭包（Closure）是词法闭包（Lexical Closure）的简称，是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。
 * 所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。
 * Peter J. Landin 在1964年将术语闭包定义为一种包含环境成分和控制成分的实体。
 * 从技术上来讲，在JS中，每个function都是闭包，因为它总是能访问在它外部定义的数据。
 * Since scope-defining construction in Javascript is a function, not a code block like in many other languages, what we usually mean by closure
 * in Javascript is a fuction working with nonlocal variables defined in already executed surrounding function.
 */

// 当function里嵌套function时，内部的function可以访问外部function里的变量。
// 不管执行多少次，都会alert 16，因为bar能访问foo的参数x，也能访问foo的变量tmp。

// function foo (x) {
// 	var tmp = 3
// 	function bar(y) {
// 		alert (x + y + (++tmp))
// 	}
// 	bar (10)
// }
// foo (2)

// 但，这还不是闭包。当你return的是内部function时，就是一个闭包。
// 内部function会close-over外部function的变量直到内部function结束。
// 下面的脚本最终也会alert 16，因为虽然bar不直接处于foo的内部作用域，但bar还是能访问x和tmp。
// 但是，由于tmp仍存在于bar闭包的内部，所以它还是会自加1，而且你每次调用bar时它都会自加1。

// function foo (x) {
// 	var tmp = 3
// 	return function (y) {
// 		alert (x + y + (++tmp))
// 	}
// }
// var bar = foo (2) // bar 现在是一个闭包
// bar (10)

// 上面的x是一个字面值（值传递），和JS里其他的字面值一样，当调用foo时，实参x的值被复制了一份，复制的那一份作为了foo的参数x。
// 那么问题来了，JS里处理object时是用到引用传递的，那么，你调用foo时传递一个object，foo函数return的闭包也会引用最初那个object！
// 不出我们意料，每次运行bar(10)，x.memb都会自加1。但需要注意的是x每次都指向同一个object变量——age，运行两次bar(10)后，age.memb会变成2。这和HTML对象的内存泄漏有关

// function foo (x) {
// 	var tmp = 3
// 	return function (y) {
// 		alert (x + y + tmp)
// 		x.memb = x.memb ? x.memb + 1 : 1
// 		alert (x.memb)
// 	}
// }
// var age = new Number (2)
// var bar = foo (age) // bar 现在是一个引用了age的闭包
// bar (10)

// 一个不用return关键字的闭包例子

// function closureExample (objID, text, timedelay) {
// 	setTimeout (function () {
// 		document.getElementById (objID).innerHTML = text
// 	}, timedelay)
// }
// closureExample ('myDiv', 'Closure is created', 500)

// 闭包经常用于创建含有隐藏数据的函数（但并不总是这样）。

var db = (function () {
	// 创建一个隐藏的object, 这个object持有一些数据
	// 从外部是不能访问这个object的
	var data = {}
	// 创建一个函数, 这个函数提供一些访问data的数据的方法
	return function (key, val) {
		if (val === undefined) { return data [key] } // get
		else { return data [key] = val } // set
	}
	// 我们可以调用这个匿名方法
	// 返回这个内部函数，它是一个闭包
})()

// db('x') // 返回 undefined
// db('x', 1) // 设置data['x']为1
// db('x') // 返回 1

