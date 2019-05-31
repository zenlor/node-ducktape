const tape = require('tape');
const assert = require('assert');

const isPromise = x => x && typeof x.then === 'function';

module.exports = exports = function ducktape(description, fn) {
    assert(typeof description === 'string');
    assert(typeof fn === 'function');

    const onEnd = (t) => () => t.end();
    const onErr = (t) => (err) => t.end(err);

    if (isPromise(fn)) {
        return tape(description, (t) => fn
                    .then(onEnd(t)).catch(onErr(t)));
    }


    tape(description, (t) => {
        const p = fn(t);
        if (isPromise(p)) {
            return p
                .then(onEnd(t)).catch(onErr(t));
        }

        t.end();
    });
}
