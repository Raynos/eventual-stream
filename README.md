# read-promise

Promise to give back a readable stream later

## Example

``` js
var from = require("read-stream").fromArray
    , to = require("write-stream").toArray
    , PromiseStream = require("read-promise")

var promise = PromiseStream()

promise.stream.pipe(to(function (list) {
    console.log("promise", list)
}))

setTimeout(function () {
    promise(from([1,2,3]))
}, 1000)
```

## Installation

`npm install read-promise`

## Contributors

 - Raynos

## MIT Licenced
