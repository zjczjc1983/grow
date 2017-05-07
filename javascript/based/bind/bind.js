Function.prototype.__bind = function(context) {
    var self = this
    return function() {
        return self.apply(context, arguments)
    }
}

var obj = {
    name: 'cxs'
}

var func = function() {
    console.log(this.name)
}.__bind(obj)

func()