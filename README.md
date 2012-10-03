# eventual-stream

Promise to give back a readable stream later

## Example

``` js
var from = require("read-stream").fromArray
    , to = require("write-stream").toArray
    , EventualStream = require("eventual-stream")

var fulfill = EventualStream()

fulfill.stream.pipe(to(function (list) {
    console.log("eventual", list)
}))

setTimeout(function () {
    fulfill(from([1,2,3]))
}, 1000)
```

## Installation

`npm install eventual-stream`

## Contributors

 - Raynos

## MIT Licenced
