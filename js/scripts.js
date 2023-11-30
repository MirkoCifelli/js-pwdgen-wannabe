const text = prompt('Dimmi il tuo nome:');
console.log(typeof text);
console.log('Valore preso dal prompt:', text);

console.log(`
    L'utente ha inserito:
    ${text}
`);

const surname = prompt('Dimmi il tuo cognome:');
console.log(typeof text);
console.log('Valore preso dal prompt:', text);

console.log(`
    L'utente ha inserito:
    ${surname}
`);

const color = prompt('Dimmi il tuo colore preferito:');
console.log(typeof text);
console.log('Valore preso dal prompt:', text);

console.log(`
    L'utente ha inserito:
    ${color}
`);

const fissa = 114

const miaStringa = text + surname + color +  fissa
document.writeln(miaStringa);

