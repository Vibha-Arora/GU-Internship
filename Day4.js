// 1.
try {
    throw new Error('oops');
} catch(e) {
    console.log(e.message, e instanceof Error);
} finally {
    console.log('done');
} //output:   oops true
    //done
// 2.
    try {
    null.x;
} catch(e) {
    console.log(e.constructor.name);
}// TypeError
// 3.
try {
    try { throw 42 }
    finally { console.log('inner') }
}
catch(e) { console.log('caught', e) }
finally { console.log('outer') } //output:  inner
                                // caught 42
                                // outer

// 4. Predict Output
function f() {
    try { return 1 }
    finally { return 2 }
}
console.log(f())  // output: 2

//5.

async function go() {
    try {
        await Promise.reject('bad')
    }
    catch(e) {
        console.log(e)
    }
    finally {
        console.log('fin')
    }
}
go()

// output  bad
// fin

// 6.
try {
    undeclaredVar
}
catch(e) {
    console.log(e.constructor.name)
}

// Output
// ReferenceError

//7.
class AppError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
    }
}

try {
    throw new AppError('fail', 404)
}
catch(e) {
    console.log(e.message, e.code, e instanceof Error)
}

// Output
// fail 404 true

//8.
try {
    JSON.parse('{bad}')
}
catch(e) {
    console.log(e instanceof SyntaxError)
}

// Output
// true

//9.
Promise.resolve()
.then(() => {
    throw new Error('p')
})
.catch(e => console.log('c', e.message));

try {
    throw new Error('s')
}
catch(e) {
    console.log('s', e.message)
}

// Output
// s s
// c p

//10.
const obj = {};
obj.foo.bar;

//output
// TypeError

//11. ValidationError, NetworkError, aur AuthError class banao
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

class AuthError extends Error {
    constructor(message, userId) {
        super(message);
        this.name = "AuthError";
        this.userId = userId;
    }
}

function handle(err) {
    if (err instanceof ValidationError) {
        console.log("Validation:", err.field);
    }
    else if (err instanceof NetworkError) {
        console.log("Network:", err.statusCode);
    }
    else if (err instanceof AuthError) {
        console.log("Auth:", err.userId);
    }
    else {
        console.log("Unknown Error");
    }
}


// Q12: safeDiv(a, b) function banao
// b===0 par custom DivisionByZeroError throw karo.
// Proper try/catch — error message console mein print ho.


class DivisionByZeroError extends Error {
    constructor() {
        super("Division by zero is not allowed");
        this.name = "DivisionByZeroError";
    }
}

function safeDiv(a, b) {
    try {
        if (b === 0) {
            throw new DivisionByZeroError();
        }
        console.log(a / b);
    } catch (err) {
        console.log(err.message);
    }
}

safeDiv(10, 2);
safeDiv(10, 0);


// Q13: retry(fn, times) — async retry function banao
// Sab fail ho jaayein toh custom MaxRetriesError throw karo


class MaxRetriesError extends Error {
    constructor(attempts) {
        super(`Failed after ${attempts} attempts`);
        this.name = "MaxRetriesError";
        this.attempts = attempts;
    }
}

async function retry(fn, times) {
    let attempt = 0;

    while (attempt < times) {
        try {
            return await fn();
        } catch (err) {
            attempt++;
            console.log(`Attempt ${attempt} failed: ${err.message}`);

            if (attempt === times) {
                throw new MaxRetriesError(attempt);
            }
        }
    }
}



// Q14: ES Modules project banao
// mathUtils.js

export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
};

// main.js
import { add, sub, mul, div } from "./mathUtils.js";
console.log(add(10, 5));
console.log(sub(10, 5));
console.log(mul(10, 5));
console.log(div(10, 5));



// Q15: CommonJS logger module banao
// logger.js


function log(level, msg) {
    console.log(`[${level}] ${msg}`);
}
module.exports = log;

app.js
const log = require("./logger");
log("INFO", "Server Started");

// Named Export Example:
// exports.log = log;



// Q16: Dynamic import() se plugin loader banao

class PluginNotFoundError extends Error {
    constructor(pluginName) {
        super(`Plugin '${pluginName}' not found`);
        this.name = "PluginNotFoundError";
        this.pluginName = pluginName;
    }
}

async function loadPlugin(name) {
    try {
        return await import(`./plugins/${name}.js`);
    } catch {
        throw new PluginNotFoundError(name);
    }
}


// ======================================================
// Q17: config.js with default export banao
// ======================================================

// config.js
// export default {
//     env: "development",
//     port: 3000,
//     dbUrl: "mongodb://localhost:27017/mydb"
// };

// main.js
// import config from "./config.js";

// Object.entries(config).forEach(([key, value]) => {
//     if (!value) {
//         throw new Error(`${key} is missing`);
//     }
// });

// console.log(config);


// ======================================================
// Q18: errorBoundary(fn) higher-order function banao
// Sync aur async dono handle kare
// ======================================================

function errorBoundary(fn) {
    return async (...args) => {
        try {
            const result = await fn(...args);
            return {
                ok: true,
                data: result
            };
        } catch (e) {
            return {
                ok: false,
                error: e.message
            };
        }
    };
}


// ======================================================
// Q19: Teen utility modules + barrel export banao
// ======================================================

// stringUtils.js
// export const capitalize = str =>
//     str.charAt(0).toUpperCase() + str.slice(1);

// arrayUtils.js
// export const sum = arr =>
//     arr.reduce((a, b) => a + b, 0);

// objectUtils.js
// export const keys = obj =>
//     Object.keys(obj);

// index.js
// export * from "./stringUtils.js";
// export * from "./arrayUtils.js";
// export * from "./objectUtils.js";

// main.js
// import { capitalize, sum, keys } from "./index.js";
// console.log(capitalize("hello"));
// console.log(sum([1,2,3]));
// console.log(keys({a:1,b:2}));


// ======================================================
// Q20: fetchWithTimeout(url, ms)
// Promise.race() use karo
// ======================================================

class TimeoutError extends Error {
    constructor(ms) {
        super(`Request timed out after ${ms}ms`);
        this.name = "TimeoutError";
    }
}

async function fetchWithTimeout(url, ms) {
    const controller = new AbortController();

    const timeoutPromise = new Promise((_, reject) => {
        const timeoutId = setTimeout(() => {
            controller.abort();
            reject(new TimeoutError(ms));
        }, ms);

        timeoutPromise.cleanup = () => clearTimeout(timeoutId);
    });

    try {
        const response = await Promise.race([
            fetch(url, { signal: controller.signal }),
            timeoutPromise
        ]);

        return response;
    } finally {
        if (timeoutPromise.cleanup) {
            timeoutPromise.cleanup();
        }
    }
}


// ======================================================
// Q21: Custom EventEmitter class banao
// ======================================================

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(cb);
    }

    off(event, cb) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(
            listener => listener !== cb
        );
    }

    emit(event, ...args) {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => {
            try {
                listener(...args);
            } catch (err) {
                console.error("Listener Error:", err.message);
            }
        });
    }
}



// Q22: parseJSON(str) safe wrapper banao


function parseJSON(str) {
    try {
        return JSON.parse(str);
    } catch (err) {
        console.error(err.message);
        return null;
    } finally {
        console.log("Parsing completed");
    }
}

// Q23: Predict Output

const obj = {
    get val() {
        throw new Error("no");
    }
};

try {
    const { val } = obj;
} catch (e) {
    console.log(e.message);
}

// Output:
// no

// Q24: Predict Output

function* gen() {
    try {
        yield 1;
        yield 2;
    } finally {
        yield 3;
    }
}

const g = gen();

console.log(
    g.next(),
    g.return("done"),
    g.next()
);

// Output:
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 'done', done: true }


// ======================================================
// Q25: Predict Output


class E extends Error {}

const e = new E("test");

console.log(
    e instanceof E,
    e instanceof Error,
    e.name
);

// Output:
// true true E

// Q51: Top-level await — kab valid, kab error?

// Valid (ES Module)
// package.json => { "type": "module" }
// main.js
const m = await import('./mod.js');
console.log(m.default, m.named);

// Error (CommonJS)
// SyntaxError: await is only valid in async functions and top-level bodies of modules


// Q52: Kya print hoga?

try {
    eval('{{bad syntax{{');
} catch (e) {
    console.log(e.name);
}

// Output:
// SyntaxError


// Q53: Kya print hoga?

class HttpError extends Error {
    constructor(code) {
        super('HTTP ' + code);
        this.code = code;
        this.name = 'HttpError';
    }
}

const e = new HttpError(500);

console.log(
    e.message,
    e.stack?.split('\n')[0]
);

// Output:
// HTTP 500 HttpError: HTTP 500


// Q54: Runtime behaviour mein kya farq hai?

// ESM
// import x from './a.js'

// CommonJS
// const x = require('./a.js')

// ESM:
// - Static analysis
// - Hoisted imports
// - Live bindings
// - Async loading possible

// CJS:
// - Runtime require
// - Snapshot values
// - Synchronous loading
// - module.exports caching


// Q55: Kya print hoga?

const err = new TypeError('bad type');

console.log(
    err instanceof TypeError,
    err instanceof Error,
    err instanceof RangeError
);

// Output:
// true true false


// Q61: pipe(...fns) function banao

class PipelineError extends Error {
    constructor(stepIndex, originalError) {
        super(`Pipeline failed at step ${stepIndex}`);
        this.name = 'PipelineError';
        this.stepIndex = stepIndex;
        this.originalError = originalError;
    }
}

function pipe(...fns) {
    return async function (input) {
        let result = input;

        for (let i = 0; i < fns.length; i++) {
            try {
                result = await fns[i](result);
            } catch (err) {
                throw new PipelineError(i, err);
            }
        }

        return result;
    };
}


// Q62: tryCatch(fn, fallback) utility banao

function tryCatch(fn, fallback) {
    return async (...args) => {
        try {
            return await fn(...args);
        } catch (err) {
            return typeof fallback === 'function'
                ? fallback(err)
                : fallback;
        }
    };
}


// Q63: Singleton config module banao

// config.js

class Config {
    constructor() {
        this.env = "development";
    }
}

const instance = new Config();

export default instance;

// test.js

import config1 from './config.js';
import config2 from './config.js';

console.log(config1 === config2);

// Output:
// true


// Q64: Named + default export ek file mein

// utils.js

export const sum = (a, b) => a + b;

export default function greet() {
    return "Hello";
}

// main.js

import greet, { sum } from './utils.js';

console.log(greet());
console.log(sum(2, 3));


// Q65: SafeMap class banao

class KeyNotFoundError extends Error {
    constructor(key) {
        super(`Key '${key}' not found`);
        this.name = "KeyNotFoundError";
    }
}

class SafeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value) {
        this.map.set(key, value);
    }

    get(key, defaultVal = null) {
        return this.map.has(key)
            ? this.map.get(key)
            : defaultVal;
    }

    getOrThrow(key) {
        if (!this.map.has(key)) {
            throw new KeyNotFoundError(key);
        }

        return this.map.get(key);
    }

    has(key) {
        return this.map.has(key);
    }

    delete(key) {
        return this.map.delete(key);
    }
}


// Q71: Result monad banao

class Result {
    constructor(ok, value) {
        this.ok = ok;
        this.value = value;
    }

    static ok(value) {
        return new Result(true, value);
    }

    static err(error) {
        return new Result(false, error);
    }

    map(fn) {
        if (!this.ok) return this;

        try {
            return Result.ok(fn(this.value));
        } catch (e) {
            return Result.err(e);
        }
    }

    flatMap(fn) {
        if (!this.ok) return this;
        return fn(this.value);
    }

    getOrElse(defaultVal) {
        return this.ok
            ? this.value
            : defaultVal;
    }

    isOk() {
        return this.ok;
    }
}


// Demo

const result = Result.ok(5)
    .map(x => x * 2)
    .map(x => x + 1);

console.log(result.getOrElse(0));


// Q72: Circular dependency problem demo karo

// a.js

// import { b } from './b.js';
// export const a = 'A';
// console.log('a sees:', b);

// b.js

// import { a } from './a.js';
// export const b = 'B';
// console.log('b sees:', a);

// Runtime may throw:
// ReferenceError: Cannot access 'a' before initialization

// Solution:
// Shared module banao ya dependency injection use karo.


// Q73: Kya print hoga?

const p = new Promise((res, rej) => {
    try {
        throw new Error('sync');
    } catch (e) {
        rej(e);
    }
});

p.catch(e =>
    console.log('caught:', e.message)
);

// Output:
// caught: sync


// Q76: Module Explorer

function exploreModules(code) {
    return {
        tryCatchBlocks:
            (code.match(/try\s*{/g) || []).length,

        imports:
            (code.match(/import\s.+?from\s+['"].+?['"]/g) || []).length,

        exports:
            (code.match(/export\s/g) || []).length
    };
}


// Q77: Error Dashboard

window.onerror = function (
    message,
    source,
    line,
    col,
    error
) {
    addError({
        type: error?.name,
        message,
        timestamp: new Date().toISOString(),
        stack: error?.stack
    });
};

window.onunhandledrejection = function (event) {
    addError({
        type: "UnhandledPromiseRejection",
        message: event.reason?.message || event.reason,
        timestamp: new Date().toISOString(),
        stack: event.reason?.stack
    });
};

function addError(error) {
    console.log(error);
}


// Q80: Plugin System

class PluginNotFoundError extends Error {
    constructor(name) {
        super(`Plugin '${name}' not found`);
        this.name = "PluginNotFoundError";
    }
}

class PluginManager {
    constructor() {
        this.plugins = new Map();
    }

    register(name, module) {
        this.plugins.set(name, module);
    }

    run(name, ...args) {
        const plugin = this.plugins.get(name);

        if (!plugin) {
            throw new PluginNotFoundError(name);
        }

        return plugin(...args);
    }

    unregister(name) {
        this.plugins.delete(name);
    }
}


// Demo

const pm = new PluginManager();

pm.register("sum", (a, b) => a + b);
pm.register("mul", (a, b) => a * b);
pm.register("upper", str => str.toUpperCase());

console.log(pm.run("sum", 2, 3));
console.log(pm.run("mul", 2, 3));
console.log(pm.run("upper", "hello"));


// Q83: withErrorLogging(fn) decorator banao

function withErrorLogging(fn) {
    return function (...args) {
        try {
            return fn(...args);
        } catch (error) {
            console.error({
                fnName: fn.name,
                args,
                error: error.message,
                timestamp: new Date().toISOString()
            });

            throw error;
        }
    };
}


// Q85: Kya print hoga?

function throws() {
    throw new RangeError('out');
}

try {
    throws();
} catch (e) {
    if (e instanceof TypeError) {
        throw e;
    }

    console.log('range caught');
}

// Output:
// range caught


// Q88: AsyncQueue class banao

class AsyncQueue {
    constructor() {
        this.queue = [];
        this.running = false;
        this.errors = [];
    }

    add(task) {
        this.queue.push(task);

        if (!this.running) {
            this.run();
        }
    }

    async run() {
        this.running = true;

        while (this.queue.length) {
            const task = this.queue.shift();

            try {
                await task();
            } catch (err) {
                this.errors.push(err);
            }
        }

        this.running = false;
    }
}


// Q89: toString() ka exact output kya hoga?

const errorObj = new Error();

errorObj.name = 'Custom';
errorObj.message = 'msg';

console.log(`${errorObj}`);

// Output:
// Custom: msg


// Q91: Module Bundler Concept Demo

// c.js
console.log('C loaded');

// b.js
import './c.js';
console.log('B loaded');

// a.js
import './b.js';
console.log('A loaded');

// Output:
// C loaded
// B loaded
// A loaded


// Q94: Error Recovery UI

let errorCount = 0;

window.onerror = () => {
    errorCount++;
    document.getElementById('count').textContent =
        errorCount;
};

async function doAction() {
    try {
        throw new Error("Failed");
    } catch {
        document.getElementById('msg').textContent =
            'Something went wrong';

        document.getElementById('retry')
            .style.display = 'block';
    }
}


// Q96: typecheck(schema, data)

class TypeMismatchError extends Error {
    constructor(field, expected, actual) {
        super(
            `Field '${field}' expected ${expected} but got ${actual}`
        );

        this.name = 'TypeMismatchError';
        this.field = field;
        this.expected = expected;
        this.actual = actual;
    }
}

function typecheck(schema, data) {
    for (const key in schema) {
        const expected = schema[key];
        const value = data[key];

        let actual;

        if (
            Array.isArray(value) &&
            expected.endsWith('[]')
        ) {
            actual = typeof value[0] + '[]';
        } else {
            actual = typeof value;
        }

        if (actual !== expected) {
            throw new TypeMismatchError(
                key,
                expected,
                actual
            );
        }
    }

    return true;
}


// Q99: Chainable Validator banao

class ValidationError extends Error {
    constructor(rule) {
        super(`Validation failed: ${rule}`);
        this.name = 'ValidationError';
    }
}

class Validator {
    constructor() {
        this.rules = [];
    }

    static string() {
        return new Validator();
    }

    minLength(len) {
        this.rules.push({
            rule: 'minLength',
            check: value => value.length >= len
        });

        return this;
    }

    maxLength(len) {
        this.rules.push({
            rule: 'maxLength',
            check: value => value.length <= len
        });

        return this;
    }

    matches(regex) {
        this.rules.push({
            rule: 'matches',
            check: value => regex.test(value)
        });

        return this;
    }

    validate(value) {
        for (const rule of this.rules) {
            if (!rule.check(value)) {
                throw new ValidationError(
                    rule.rule
                );
            }
        }

        return true;
    }
}

// Demo

Validator
    .string()
    .minLength(3)
    .maxLength(50)
    .matches(/^[a-z]+$/)
    .validate('hello');

    // Q26: Bubbling order mein output kya hoga?

// HTML:
// <div id="parent">
//   <span id="child">click</span>
// </div>

// JS:
// parent.addEventListener("click", () => console.log("parent"));
// child.addEventListener("click", () => console.log("child"));

// Span click Output:
// child
// parent


