import { hello } from './ts/greet';

function showHello(divClass: string, name: string) {
    const el = document.querySelector('.' + divClass);
    el.innerHTML = hello(name);
}

showHello('greet', 'TypeScript');