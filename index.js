var Readable = require("readable-stream")
    , reemit = require("re-emitter").reemit

module.exports = EventualStream

function EventualStream() {
    var stream = new Readable()
        , source

    promise.stream = stream
    stream.read = handleRead

    return promise

    function promise(_source) {
        source = _source

        stream.emit("readable")

        reemit(source, stream, ["readable", "error", "end"])

        return source
    }

    function handleRead(bytes) {
        if (!source) {
            return null
        }

        return source.read(bytes)
    }
}
