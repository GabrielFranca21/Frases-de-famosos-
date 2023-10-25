// const arrayTest = ['dog','cat','horse','unicorn','komodo dragon','rhino'];
// console.log(arrayTest)
// console.log(arrayTest.length)

// const randomIndexPosition = Math.floor(Math.random() * arrayTest.length)
// console.log(randomIndexPosition)

// console.log(arrayTest.innerText = arrayTest[randomIndexPosition])


const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person =document.querySelector('.person');

// console.log(btn)
// console.log(person)
// console.log(quote)

// arrays
const quotes = [
    {
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn." `,
        person: `Benjamin Franklin `
    },
    {
        quote: `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." `,
        person: `Helen Keller `
    },
    {
        quote: `"It is during our darkest moments that we must focus to see the light." `,
        person: `Aristotle `

    },
    {
        quote: ` "Whoever is happy will make others happy too." `,
        person: `Anne Frank `

    },
    
    {
        quote: ` "Do not go where the path may lead, go instead where there is no path and leave a trail." `,
        person: `Ralph Waldo Emerson `

    },
    {
        quote: ` "If life were predictable it would cease to be life and be without flavor." `,
        person: `Eleanor Roosevelt `


    },
    {
        quote: ` "In the end, it's not the years in your life that count. It's the life in your years." `,
        person: `Abraham Lincoln `

    },
    {
        quote: ` "Life is a succession of lessons which must be lived to be understood."        `,
        person: `Ralph Waldo Emerson `

    },
    
];

btn.addEventListener('click',function(){
    const random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});