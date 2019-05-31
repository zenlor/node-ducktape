# @frenz/ducktape

naive wrapper of [tape](https://github.com/substack/node-tape) to add support
for promises (and automatically ending your test).

# Usage

``` javascript
import ducktape from 'ducktape'

const sleep = n => new Promise(resolve => setTimeout(resolve))
const error = new Promise(reject => reject(new Error('will error')));

ducktape('description', async t => {
    t.ok(true, 'this is tape')

    await sleep(1)

    t.ok(true, 'this waited')

    await error
})
```

## LICENSE

ISC
