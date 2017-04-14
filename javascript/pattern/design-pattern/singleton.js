'use strict'
// 利用静态属性实现单例模式
// function Universe() {

// 	// 我们有一个现有的实例吗？
// 	if (typeof Universe.instance === 'object') {
// 		return Universe.instance
// 	}

// 	// 正常进行
// 	this.start_time = 0
// 	this.bang = 'Big'

// 	// 缓存
// 	Universe.instance = this

// 	// 隐式返回
// 	// return this
// }

// 利用闭包实现单例模式
function Universe() {
	// 缓存实例
	var instance = this

	// 正常进行
	// this.start_time = 0
	// this.bang = 'Big'

	// 重写该构造函数
	Universe = function () {
		return instance
	}

	// 保留原型属性
	Universe.prototype = this

	// 实例
	instance = new Universe()

	// 重置构造函数指针
	instance.constructor = Universe

	// 所有功能
	instance.start_time = 0
	instance.bang = 'Big'

	return instance
}

Universe.prototype.nothing = true
var uni = new Universe()
Universe.prototype.everything = true
var uni2 = new Universe()

// function Ca() {

// }
// Ca.prototype.a = 1
// var a = new Ca()
// Ca.prototype.b = 1

// 测试
// var uni = new Universe()
// var uni2 = new Universe()
// console.log(uni === uni2)

// es6代码实现单例模式
// let __instance = (function () {
// 	let instance
// 	return (newInstance) => {
// 		if (newInstance) instance = newInstance
// 		return instance
// 	}
// }())

// class Universe {
// 	constructor () {
// 		if (__instance()) return __instance()
// 		//按自己需求实例化
// 		this.foo = 'bar'
// 		__instance(this)
// 	}
// }

// let u1 = new Universe()
// let u2 = new Universe()

// console.log(u1.foo) //'bar'
// console.log(u1 === u2) //true