import ducktape from "."

ducktape('description',
    t => t.ok(typeof ducktape === 'function', 'ES6 Module default import works'))
