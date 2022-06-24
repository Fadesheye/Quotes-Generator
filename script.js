const simpleQuotes = [
    {
        name:'Duchess Meghan',
        quote:'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.'
    },
    
    {
        name:'Winston Churchill',
        quote:'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
    
    {
        name:'Morgan Freeman',
        quote:'Learning how to be still, to really be still and let life happen—that stillness becomes a radiance.'
    },
    
    {
        name:'Albert Einstein',
        quote:'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },

    {
        name:'Zig Ziglar',
        quote:'What you get by achieving your goals is not as important as what you become by achieving your goals.'
    },

    {
        name:'C.S. Lewis',
        quote:'You are never too old to set another goal or to dream a new dream.'
    },

    {
        name:'Tina Turner',
        quote:'I believe that if you’ll just stand up and go, life will open up for you. Something just motivates you to keep moving.'
    },

    {
        name:'George Harrison',
        quote:'When you’ve seen beyond yourself, then you may find, peace of mind is waiting there.'
    },

    {
        name:' Alexander the Great',
        quote:'There is nothing impossible to they who will try.'
    },

    {
        name:'Franklin Delano Roosevelt',
        quote:'The only limit to our realization of tomorrow will be our doubts today.'
    },
    
    {
        name:'Lady Gaga',
        quote:'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.'
    },
    
    {
        name:'Mother Teresa',
        quote:'Spread love everywhere you go.'
    },
    
    
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');
const curColour = document.body.style.backgroundColor;
//const color = document.body.style.backgroundColor;


quoteBtn.addEventListener('click', function onClick(event){
    displayQuote();
    document.body.style.backgroundColor = curColour === 'FFED66' ? 'blue' : 'FFED66';
});


function displayQuote(){
    let randonNum = Math.floor(Math.random()*simpleQuotes.length);
    quote.innerHTML= simpleQuotes[randonNum].quote;
    quoteAuthor.innerHTML= simpleQuotes[randonNum].name;
}
