const ducktape = require('./');
const sleep = (n) => new Promise((r) => setTimeout(r, n));

ducktape('async function', async (t) => {
    t.plan(1);

    await sleep(0);

    t.ok(1, 'this should be an assertion');
});

ducktape('promise function', (t) => {
    t.plan(1);

    return sleep(0)
        .then(() => t.ok(1, 'running in a promise'));
});

ducktape('plain function', (t) => {
    t.plan(1);
    t.ok(1, 'running in a plain function');
});
