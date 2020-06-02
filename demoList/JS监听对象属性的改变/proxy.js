const obj = {};
const newObj = new Proxy(obj, {
    get: function (target, name) {
        return name in target ? target[name] : 37;
    },
    set: function (target, name, value) {
        target[name] = value + 1
        return true
    }
});

