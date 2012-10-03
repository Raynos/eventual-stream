var from = require("read-stream").fromArray
    , to = require("write-stream").toArray

    , EventualStream = require("..")

var fulfill = EventualStream()

fulfill.stream.pipe(to(function (list) {
    console.log("fulfill", list)
}))

setTimeout(function () {
    fulfill(from([1,2,3]))
}, 1000)
