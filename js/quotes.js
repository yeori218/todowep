const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",        
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",        
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",        
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author: "Dr. Seuss",        
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",        
    },
    {
        quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        author: "Mother Teresa",        
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",        
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",        
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",        
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author: "Dr. Seuss",        
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// 1. Math.random()으로 랜덤 수를 호출(0~1), 거기에 * quotes.length를 곱해 배열 수 만큼 호출, .random()은 소수점이기 때문에 Math.floor를 통해 내림
const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length )]);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;