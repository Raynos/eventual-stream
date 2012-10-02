var from = require("read-stream").fromArray
    , to = require("write-stream").toArray

    , PromiseStream = require("..")

var promise = PromiseStream()

promise.stream.pipe(to(function (list) {
    console.log("promise", list)
}))

setTimeout(function () {
    promise(from([1,2,3]))
}, 1000)
