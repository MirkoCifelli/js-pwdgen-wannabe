const firstName = prompt('Dimmi il tuo nome:');
console.log(typeof firstName);
console.log('Valore preso dal prompt:', firstName);

console.log(`
    L'utente ha inserito:
    ${firstName}
`);

const surname = prompt('Dimmi il tuo cognome:');
console.log(typeof surname);
console.log('Valore preso dal prompt:', surname);

console.log(`
    L'utente ha inserito:
    ${surname}
`);

const color = prompt('Dimmi il tuo colore preferito:');
console.log(typeof color);
console.log('Valore preso dal prompt:', color);

console.log(`
    L'utente ha inserito:
    ${color}
`);

const fissa = 114

const miaStringa = firstName + surname + color +  fissa
document.writeln(miaStringa);

