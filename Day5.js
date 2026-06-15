// Q27: Kya aayega?

const el = document.createElement('div');
el.textContent = '<b>bold</b>';
console.log(el.innerHTML);

// Output:
// &lt;b&gt;bold&lt;/b&gt;


// Q28: Dono ka fark explain karo?

// e.stopPropagation()
// Event bubbling/capturing rokta hai.

// e.preventDefault()
// Browser ka default action rokta hai.

// Dono saath:
// Default action bhi nahi hoga
// Event parent tak bhi nahi jayega


// Q29: Kya return karega aur kyun?

localStorage.setItem('x', { a: 1 });
console.log(localStorage.getItem('x'));

// Output:
// [object Object]


// Q30: Kya print hoga?

const ul = document.createElement('ul');

ul.innerHTML = `
<li>A</li>
<li>B</li>
`;

const items = ul.querySelectorAll('li');

items.forEach(i => i.remove());

console.log(ul.children.length);

// Output:
// 0


// Q31: Difference

// document.getElementById('myId')
// document.querySelector('#myId')

// Dono same element return karte hain.

// Difference:
// getElementById faster
// querySelector CSS selectors support karta hai

// Example:
// querySelector('.box')
// querySelector('div > span')


// Q32: Kya print hoga?

const p = document.createElement('p');

document.body.appendChild(p);

p.addEventListener('click', () => {
    console.log('fired');
});

p.dispatchEvent(new Event('click'));

p.remove();

p.dispatchEvent(new Event('click'));

// Output:
// fired
// fired


// Q33: input vs change

// User type kare:
// input fire hoga

// User Tab dabaye (focus lose):
// change fire hoga

// Typing ke dauran:
// input input input...

// Focus leave:
// change


// Q34: e.target vs e.currentTarget

// HTML
// <div id="parent">
//   <button id="child">Click</button>
// </div>

// Listener parent pe hai
// Click child pe hua

// e.target
// => child button

// e.currentTarget
// => parent div


// Q35: sessionStorage behavior

sessionStorage.setItem('key', 'val');

// Same tab + reload
// Output:
// val

// New tab
// Output:
// null


// Q36: Event delegation implement karo

const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        console.log(e.target.textContent);
    }
});


// Q37: DOM manipulation — vanilla JS only

const p1 = document.querySelector('p');

p1.textContent = 'Updated Text';
p1.style.backgroundColor = 'yellow';


// Q38: virtualDOM(config) function banao

function virtualDOM(config) {
    const el = document.createElement(config.tag);

    if (config.props) {
        Object.entries(config.props).forEach(([k, v]) => {
            el.setAttribute(k, v);
        });
    }

    if (config.text) {
        el.textContent = config.text;
    }

    if (config.children) {
        config.children.forEach(child => {
            el.appendChild(virtualDOM(child));
        });
    }

    return el;
}


// Q39: Form validation karo

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();

    document.querySelector('#nameErr').textContent = '';
    document.querySelector('#emailErr').textContent = '';

    if (!name) {
        document.querySelector('#nameErr').textContent =
            'Name required';
    }

    if (!email.includes('@')) {
        document.querySelector('#emailErr').textContent =
            'Invalid email';
    }
});


// Q40: Drag & Drop reorder banao

let dragged;

document.addEventListener('dragstart', e => {
    dragged = e.target;
});

document.addEventListener('dragover', e => {
    e.preventDefault();
});

document.addEventListener('drop', e => {
    e.preventDefault();

    if (e.target.matches('li')) {
        e.target.parentNode.insertBefore(
            dragged,
            e.target
        );

        saveOrder();
    }
});

function saveOrder() {
    const order = [...document.querySelectorAll('li')]
        .map(li => li.textContent);

    localStorage.setItem(
        'order',
        JSON.stringify(order)
    );
}


// Q41: localStorage wrapper class banao

class StorageWrapper {
    set(key, value, ttlSeconds = null) {
        const item = {
            value,
            expiry: ttlSeconds
                ? Date.now() + ttlSeconds * 1000
                : null
        };

        localStorage.setItem(
            key,
            JSON.stringify(item)
        );
    }

    get(key) {
        const item = JSON.parse(
            localStorage.getItem(key)
        );

        if (!item) return null;

        if (
            item.expiry &&
            Date.now() > item.expiry
        ) {
            localStorage.removeItem(key);
            return null;
        }

        return item.value;
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}


// Q42: Do counters banao

let localCount =
    Number(localStorage.getItem('localCount')) || 0;

let sessionCount =
    Number(sessionStorage.getItem('sessionCount')) || 0;

localCount++;
sessionCount++;

localStorage.setItem(
    'localCount',
    localCount
);

sessionStorage.setItem(
    'sessionCount',
    sessionCount
);

console.log('Local:', localCount);
console.log('Session:', sessionCount);


// Q43: MutationObserver

const observer = new MutationObserver(
    mutations => {
        mutations.forEach(m => {
            m.addedNodes.forEach(node => {
                if (
                    node.nodeType === 1 &&
                    node.hasAttribute('data-track')
                ) {
                    console.log('Tracked:', node);
                }
            });
        });
    }
);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Cleanup
observer.disconnect();


// Q44: Image gallery banao

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
];

let current = 0;

function show(index) {
    document.querySelector('#preview').src =
        images[index];
}

document.querySelector('#next')
.addEventListener('click', () => {
    current =
        (current + 1) % images.length;

    show(current);
});

document.querySelector('#prev')
.addEventListener('click', () => {
    current =
        (current - 1 + images.length)
        % images.length;

    show(current);
});

document.addEventListener(
    'keydown',
    e => {
        if (e.key === 'ArrowRight') {
            current =
                (current + 1) %
                images.length;
        }

        if (e.key === 'ArrowLeft') {
            current =
                (current - 1 + images.length)
                % images.length;
        }

        show(current);
    }
);


// Q45: PubSub module banao using closures

function createPubSub() {
    const events = {};

    return {
        subscribe(event, fn) {
            if (!events[event]) {
                events[event] = [];
            }

            events[event].push(fn);
        },

        publish(event, data) {
            (events[event] || [])
                .forEach(fn => fn(data));
        },

        unsubscribe(event, fn) {
            if (!events[event]) return;

            events[event] =
                events[event]
                .filter(x => x !== fn);
        }
    };
}


// Q46: DOM traversal utility banao

function getSiblings(el) {
    return [...el.parentElement.children]
        .filter(x => x !== el);
}

function getAncestors(el) {
    const result = [];

    while (el.parentElement) {
        result.push(el.parentElement);
        el = el.parentElement;
    }

    return result;
}

function getAllDescendants(el) {
    return [...el.querySelectorAll('*')];
}


// Q47: debounce aur throttle dono banao

function debounce(fn, ms) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, ms);
    };
}

function throttle(fn, ms) {
    let allowed = true;

    return (...args) => {
        if (!allowed) return;

        allowed = false;

        fn(...args);

        setTimeout(() => {
            allowed = true;
        }, ms);
    };
}

window.addEventListener(
    'resize',
    debounce(() => {
        console.log('resize');
    }, 300)
);

window.addEventListener(
    'mousemove',
    throttle(() => {
        console.log('move');
    }, 300)
);


// Q48: Keyboard shortcut system banao

const shortcuts = new Map();

shortcuts.set('Ctrl+s', () =>
    console.log('Saved!')
);

shortcuts.set('Ctrl+z', () =>
    console.log('Undo!')
);

shortcuts.set('Escape', () =>
    console.log('Cancelled')
);

document.addEventListener(
    'keydown',
    e => {
        const key =
            e.ctrlKey
                ? `Ctrl+${e.key}`
                : e.key;

        if (shortcuts.has(key)) {
            e.preventDefault();

            shortcuts.get(key)();
        }
    }
);


// Q49: Lazy image loader banao

const imageObserver =
    new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (
                    entry.isIntersecting
                ) {
                    const img =
                        entry.target;

                    img.src =
                        img.dataset.src;

                    imageObserver
                        .unobserve(img);
                }
            });
        }
    );

document
.querySelectorAll('img[data-src]')
.forEach(img => {
    imageObserver.observe(img);
});


// Q50: Dynamic table banao

const data = [
    {
        name: 'A',
        age: 20,
        city: 'Delhi'
    },
    {
        name: 'B',
        age: 25,
        city: 'Mumbai'
    }
];

const table =
    document.createElement('table');

const header =
    document.createElement('tr');

Object.keys(data[0])
.forEach(key => {
    const th =
        document.createElement('th');

    th.textContent = key;

    header.appendChild(th);
});

table.appendChild(header);

data.forEach(row => {
    const tr =
        document.createElement('tr');

    Object.values(row)
    .forEach(value => {
        const td =
            document.createElement('td');

        td.textContent = value;

        tr.appendChild(td);
    });

    table.appendChild(tr);
});

document.body.appendChild(table);

// Q56: Kya print hoga?

const div = document.createElement('div');
div.innerHTML = 'hi <scr' + 'ipt>alert(1)</scr' + 'ipt>';

console.log(div.textContent);

// Output:
// hi alert(1)


// Q57: Capturing vs Bubbling — exact order kya hoga?

// HTML
// <div id="parent">
//   <button id="child">Click</button>
// </div>

// JS

parent.addEventListener('click', () => {
    console.log('parent capture');
}, true);

child.addEventListener('click', () => {
    console.log('child capture');
}, true);

child.addEventListener('click', () => {
    console.log('child bubble');
});

parent.addEventListener('click', () => {
    console.log('parent bubble');
});

// Child click Output:
// parent capture
// child capture
// child bubble
// parent bubble


// Q58: cloneNode behavior batao

const cloneDeep = node.cloneNode(true);
const cloneShallow = node.cloneNode(false);

// cloneNode(true)
// Element + saare descendants clone

// cloneNode(false)
// Sirf current node clone

// Event listeners clone honge?
// NO


// Q59: DocumentFragment kyun use karte hain?

// Option A

for (let i = 0; i < 100; i++) {
    document.body.appendChild(
        document.createElement('div')
    );
}

// Multiple DOM updates
// More reflow/repaint


// Option B

const fragment =
    document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    fragment.appendChild(
        document.createElement('div')
    );
}

document.body.appendChild(fragment);

// Single DOM update
// Better performance


// Q60: Kab kaun best practice hai?

// Approach 1

el.style.color = 'red';

// Quick dynamic styling


// Approach 2

el.setAttribute(
    'style',
    'color:red'
);

// Entire inline style set karna ho


// Approach 3

el.classList.add('text-red');

// Recommended
// Reusable CSS
// Maintainable
// Separation of concerns


// Q66: Accordion component banao

document
.querySelectorAll('.accordion-header')
.forEach(header => {

    header.addEventListener(
        'click',
        () => {

            document
            .querySelectorAll(
                '.accordion-content'
            )
            .forEach(content => {

                if (
                    content !==
                    header.nextElementSibling
                ) {
                    content.style.maxHeight =
                        null;
                }
            });

            const content =
                header.nextElementSibling;

            content.style.maxHeight =
                content.style.maxHeight
                ? null
                : content.scrollHeight + 'px';
        }
    );
});


// CSS

/*
.accordion-content{
    overflow:hidden;
    max-height:0;
    transition:max-height .3s ease;
}
*/


// Q67: Modal class banao

class Modal {

    constructor({
        title,
        content,
        onClose
    }) {

        this.onClose = onClose;

        this.el =
        document.createElement('div');

        this.el.innerHTML = `
            <div class="backdrop">
                <div class="modal">
                    <button class="close">
                        ×
                    </button>

                    <h2>${title}</h2>
                    <div>${content}</div>
                </div>
            </div>
        `;

        document.body.appendChild(
            this.el
        );

        this.bindEvents();
    }

    bindEvents() {

        this.el
        .querySelector('.close')
        .addEventListener(
            'click',
            () => this.close()
        );

        this.el
        .querySelector('.backdrop')
        .addEventListener(
            'click',
            e => {

                if (
                    e.target.classList
                    .contains('backdrop')
                ) {
                    this.close();
                }
            }
        );

        document.addEventListener(
            'keydown',
            this.handleKey
        );
    }

    handleKey = e => {

        if (e.key === 'Escape') {
            this.close();
        }
    }

    close() {

        this.el.remove();

        document.removeEventListener(
            'keydown',
            this.handleKey
        );

        this.onClose?.();
    }
}


// Q68: Infinite scroll banao

const sentinel =
    document.querySelector(
        '#sentinel'
    );

const observer =
new IntersectionObserver(
    async entries => {

        if (
            entries[0].isIntersecting
        ) {

            document
            .querySelector('#loading')
            .style.display = 'block';

            await fetchMoreData();

            document
            .querySelector('#loading')
            .style.display = 'none';
        }
    },
    {
        rootMargin: '150px'
    }
);

observer.observe(sentinel);


// Q69: Client-side Router banao

class Router {

    constructor() {
        this.routes = [];

        window.addEventListener(
            'popstate',
            () => this.resolve()
        );
    }

    on(path, handler) {

        this.routes.push({
            path,
            handler
        });
    }

    navigate(path) {

        history.pushState(
            {},
            '',
            path
        );

        this.resolve();
    }

    back() {
        history.back();
    }

    resolve() {

        const url =
            location.pathname;

        this.routes.forEach(
            route => {

                const keys = [];

                const regex =
                    new RegExp(
                        '^' +
                        route.path
                        .replace(
                            /:([^/]+)/g,
                            (_, key) => {

                                keys.push(key);

                                return '([^/]+)';
                            }
                        ) +
                        '$'
                    );

                const match =
                    url.match(regex);

                if (match) {

                    const params = {};

                    keys.forEach(
                        (k, i) => {
                            params[k] =
                                match[i + 1];
                        }
                    );

                    route.handler(
                        params
                    );
                }
            }
        );
    }
}


// Q70: DOM diffing function banao

function diff(
    oldVNode,
    newVNode,
    parent
) {

    if (!oldVNode) {
        parent.appendChild(
            render(newVNode)
        );

        return;
    }

    if (!newVNode) {
        parent.removeChild(
            parent.firstChild
        );

        return;
    }

    if (
        oldVNode.tag !==
        newVNode.tag
    ) {

        parent.replaceChild(
            render(newVNode),
            parent.firstChild
        );

        return;
    }

    if (
        oldVNode.text !==
        newVNode.text
    ) {

        parent.firstChild.textContent =
            newVNode.text;
    }
}


// Q74: Kya hoga?

const a =
    document.createElement('a');

a.href = 'javascript:void(0)';

a.click();

console.log('after click');

// Output:
// after click


// Q75: Toast notification system banao

const toast = {

    show(
        message,
        type = 'success',
        duration = 3000
    ) {

        const el =
        document.createElement('div');

        el.className =
            `toast ${type}`;

        el.innerHTML = `
            ${message}
            <button>x</button>
        `;

        document.body.appendChild(
            el
        );

        const remove =
            () => el.remove();

        el.querySelector('button')
        .addEventListener(
            'click',
            remove
        );

        setTimeout(
            remove,
            duration
        );
    }
};


// Q78: Vanilla JS To-Do App

let todos =
JSON.parse(
    localStorage.getItem('todos')
) || [];

function saveTodos() {

    localStorage.setItem(
        'todos',
        JSON.stringify(todos)
    );
}

function addTodo(text) {

    todos.push({
        id: Date.now(),
        text,
        done: false
    });

    saveTodos();
}

function deleteTodo(id) {

    todos =
    todos.filter(
        t => t.id !== id
    );

    saveTodos();
}

function toggleTodo(id) {

    const todo =
    todos.find(
        t => t.id === id
    );

    if (todo) {
        todo.done =
            !todo.done;
    }

    saveTodos();
}


// Q79: Live DOM Inspector

const panel =
document.createElement('div');

document.body.appendChild(
    panel
);

document.addEventListener(
    'mouseover',
    e => {

        const el = e.target;

        el.style.outline =
            '2px solid red';

        panel.textContent = `
Tag: ${el.tagName}
Id: ${el.id}
Class: ${el.className}
Length: ${
    el.innerHTML.length
}
`;
    }
);

// Q81: Custom EventTarget polyfill banao

class CustomEventPolyfill {
    constructor(type, detail = null) {
        this.type = type;
        this.detail = detail;
    }
}

class EventTargetPolyfill {
    constructor() {
        this.events = {};
    }

    addEventListener(type, callback) {
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push(callback);
    }

    removeEventListener(type, callback) {
        if (!this.events[type]) return;

        this.events[type] = this.events[type]
            .filter(fn => fn !== callback);
    }

    dispatchEvent(event) {
        if (!this.events[event.type]) return;

        this.events[event.type]
            .forEach(fn => fn(event));
    }
}


// Q82: Live search with text highlight banao

function debounce(fn, ms) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(
            () => fn(...args),
            ms
        );
    };
}

const searchInput =
    document.querySelector('#search');

const items =
    [...document.querySelectorAll('li')];

searchInput.addEventListener(
    'input',
    debounce(e => {

        const q =
            e.target.value.toLowerCase();

        items.forEach(item => {

            const text =
                item.textContent;

            if (
                text.toLowerCase()
                .includes(q)
            ) {

                item.style.display = '';

                item.innerHTML =
                    text.replace(
                        new RegExp(
                            q,
                            'ig'
                        ),
                        match =>
                        `<mark>${match}</mark>`
                    );

            } else {
                item.style.display =
                    'none';
            }
        });

    }, 300)
);


// Q84: Kya print hoga?

const div =
    document.createElement('div');

div.addEventListener(
    'click',
    () => console.log(1)
);

const clone =
    div.cloneNode(true);

document.body.append(clone);

clone.click();

// Output:
// Nothing


// Q86: SortableTable class banao

class SortableTable {

    constructor(data, container) {

        this.data = data;
        this.container = container;

        this.sortKey = null;
        this.asc = true;

        this.render();
    }

    sort(key) {

        if (
            this.sortKey === key
        ) {
            this.asc = !this.asc;
        } else {
            this.asc = true;
        }

        this.sortKey = key;

        this.data.sort((a, b) => {

            if (a[key] > b[key]) {
                return this.asc ? 1 : -1;
            }

            if (a[key] < b[key]) {
                return this.asc ? -1 : 1;
            }

            return 0;
        });

        this.render();
    }

    render() {

        this.container.innerHTML = '';

        const table =
            document.createElement(
                'table'
            );

        const header =
            document.createElement(
                'tr'
            );

        Object.keys(
            this.data[0]
        ).forEach(key => {

            const th =
                document.createElement(
                    'th'
                );

            th.textContent =
                key +
                (
                    this.sortKey === key
                    ? (
                        this.asc
                        ? ' ↑'
                        : ' ↓'
                    )
                    : ''
                );

            th.onclick =
                () => this.sort(key);

            header.appendChild(th);
        });

        table.appendChild(header);

        this.data.forEach(row => {

            const tr =
                document.createElement(
                    'tr'
                );

            Object.values(row)
            .forEach(value => {

                const td =
                    document.createElement(
                        'td'
                    );

                td.textContent =
                    value;

                tr.appendChild(td);
            });

            table.appendChild(tr);
        });

        this.container.appendChild(
            table
        );
    }
}


// Q87: Clipboard copy button banao

const btn =
    document.querySelector(
        '#copyBtn'
    );

btn.addEventListener(
    'click',
    async () => {

        try {

            await navigator
            .clipboard
            .writeText(
                'Hello World'
            );

            btn.textContent =
                'Copied!';

            setTimeout(() => {
                btn.textContent =
                    'Copy';
            }, 2000);

        } catch {

            const textarea =
                document
                .createElement(
                    'textarea'
                );

            textarea.value =
                'Hello World';

            document.body
            .appendChild(
                textarea
            );

            textarea.select();

            document.execCommand(
                'copy'
            );

            textarea.remove();
        }
    }
);


// Q90: Form auto-save feature banao

const form =
    document.querySelector(
        '#note'
    );

const status =
    document.querySelector(
        '#status'
    );

form.value =
    localStorage.getItem(
        'draft'
    ) || '';

form.addEventListener(
    'input',
    debounce(() => {

        localStorage.setItem(
            'draft',
            form.value
        );

        const now =
            new Date();

        status.textContent =
            `Draft saved at ${
                now.getHours()
            }:${
                String(
                    now.getMinutes()
                )
                .padStart(2,'0')
            }`;

    }, 1000)
);


// Q92: Image Carousel — vanilla JS

const slides =
    document.querySelectorAll(
        '.slide'
    );

let current = Number(
    localStorage.getItem(
        'slide'
    )
) || 0;

function showSlide(index) {

    slides.forEach(
        s => s.style.display =
            'none'
    );

    slides[index]
        .style.display =
        'block';

    localStorage.setItem(
        'slide',
        index
    );

    current = index;
}

document
.querySelector('#next')
.addEventListener(
    'click',
    () => {

        showSlide(
            (
                current + 1
            ) % slides.length
        );
    }
);

document
.querySelector('#prev')
.addEventListener(
    'click',
    () => {

        showSlide(
            (
                current - 1 +
                slides.length
            ) %
            slides.length
        );
    }
);

document
.querySelectorAll('.dot')
.forEach((dot, i) => {

    dot.addEventListener(
        'click',
        () => showSlide(i)
    );
});

document.addEventListener(
    'keydown',
    e => {

        if (
            e.key ===
            'ArrowRight'
        ) {

            showSlide(
                (
                    current + 1
                ) %
                slides.length
            );
        }

        if (
            e.key ===
            'ArrowLeft'
        ) {

            showSlide(
                (
                    current - 1 +
                    slides.length
                ) %
                slides.length
            );
        }
    }
);

setInterval(() => {

    showSlide(
        (
            current + 1
        ) %
        slides.length
    );

}, 3000);


// Q93: Virtual Scroll — 10,000 items

const totalItems = 10000;
const itemHeight = 30;

const container =
    document.querySelector(
        '#list'
    );

const viewportHeight =
    500;

container.style.height =
    totalItems *
    itemHeight +
    'px';

window.addEventListener(
    'scroll',
    () => {

        const start =
            Math.floor(
                window.scrollY /
                itemHeight
            );

        const end =
            start + 20;

        const fragment =
            document
            .createDocumentFragment();

        for (
            let i = start;
            i < end;
            i++
        ) {

            const div =
                document
                .createElement(
                    'div'
                );

            div.textContent =
                'Item ' + i;

            div.style.position =
                'absolute';

            div.style.top =
                (
                    i *
                    itemHeight
                ) + 'px';

            fragment
            .appendChild(
                div
            );
        }

        container.innerHTML =
            '';

        container.appendChild(
            fragment
        );
    }
);


// Q95: DOM Time Machine

const snapshots = [];

setInterval(() => {

    snapshots.push(
        document.body.outerHTML
    );

    if (
        snapshots.length > 10
    ) {
        snapshots.shift();
    }

}, 5000);

document
.querySelector('#undo')
.addEventListener(
    'click',
    () => {

        if (
            snapshots.length
        ) {

            document.body.outerHTML =
                snapshots.pop();
        }
    }
);


// Q97: ResizeObserver se element monitor karo

const box =
    document.querySelector(
        '#box'
    );

const info =
    document.querySelector(
        '#info'
    );

const observer =
    new ResizeObserver(
        entries => {

            const rect =
                entries[0]
                .contentRect;

            info.textContent =
                `${rect.width} x ${rect.height}`;
        }
    );

observer.observe(box);

if (
    !document.body.contains(
        box
    )
) {
    observer.disconnect();
}


// Q98: Kya print hoga aur kyun?

document.body.innerHTML = '';
document.body.innerHTML = '<div id=x></div>';

const el =
    document.getElementById(
        'x'
    );

document.body.innerHTML =
    '<div id=x></div>';

el.textContent = 'hi';

console.log(
    document
    .getElementById('x')
    .textContent
);

// Output:
// ""


// Q100: FINAL BOSS — Vanilla JS Notes App

// modules/storage.js

export const storage = {

    getNotes() {

        return JSON.parse(
            localStorage.getItem(
                'notes'
            ) || '[]'
        );
    },

    saveNotes(notes) {

        localStorage.setItem(
            'notes',
            JSON.stringify(notes)
        );
    }
};


// modules/search.js

export function highlight(
    text,
    query
) {

    return text.replace(
        new RegExp(
            query,
            'ig'
        ),
        m =>
        `<mark>${m}</mark>`
    );
}


// modules/errors.js

window.onerror =
    (
        msg,
        src,
        line,
        col,
        err
    ) => {

        console.error({
            msg,
            err
        });
    };


// modules/tags.js

export function parseTags(
    str
) {

    return str
        .split(',')
        .map(
            t => t.trim()
        );
}


// modules/ui.js

export function renderNotes(
    notes
) {

    const root =
        document
        .querySelector(
            '#notes'
        );

    root.innerHTML = notes
        .map(note => `
            <div
                data-id="${note.id}"
            >
                <h3>
                    ${note.title}
                </h3>

                <p>
                    ${note.text}
                </p>

                <button
                    data-action="edit"
                >
                    Edit
                </button>

                <button
                    data-action="delete"
                >
                    Delete
                </button>
            </div>
        `)
        .join('');
}


// Event Delegation

document
.querySelector('#notes')
.addEventListener(
    'click',
    e => {

        const action =
            e.target.dataset
            .action;

        const id =
            e.target
            .closest('[data-id]')
            .dataset.id;

        if (
            action === 'delete'
        ) {

            console.log(
                'Delete',
                id
            );
        }

        if (
            action === 'edit'
        ) {

            console.log(
                'Edit',
                id
            );
        }
    }
);