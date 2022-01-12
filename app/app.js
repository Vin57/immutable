// mutability
console.log('# mutability');

let z = {
    b:'hello',
    c:'bonjour'
};

let y = z;
z.b = 'hi !';

console.log(z);
console.log(y);

// immutability
console.log('# immutability');

let a = {
    b:'hello',
    c:'bonjour',
    assign: (data)=>{
        return {
            ...data // Spread operator to extract each properties value
        }
    }
};

let b = a.assign(a);
a.b = 'hi !';

console.log(a);
console.log(b);