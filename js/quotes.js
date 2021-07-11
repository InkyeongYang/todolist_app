const quotes = [
    {
        quote: "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
        author: "Jimi Hendrix"
    },
    {
        quote: "Don't think or judge, just listen.",
        author: "Sarah Dessen"
    },
    {
        quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennet"
    },
    {
        quote: "One day, in retrospect, the years of struggle will strike you as the most beautiful.",
        author: "Sigmund Freud"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: "The only way out of the labyrinth of suffering is to forgive.",
        author: "John Green"
    },
    {
        quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        author: "Isaac Asimov"
    },
    {
        quote: "If you don't know where you're going, any road'll take you there",
        author: "George Harrison"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "All the world is made of faith, and trust, and pixie dust.",
        author: "J.M. Barrie"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/**
 * Math.random() 을 사용하면, 0에서 1 사이의 float 수가 표시된다.
 * 랜덤한 정수를 구하기 위해서 10을 곱하고 소수점 이하의 수를 제거하기 위해 다음과 같은 세가지 방법을 활용할 수 있다. 
 * 1. Math.round() : 소수점 이하 첫번째 수를 반올림 해서 정수 표현. 1.8일 경우 2.
 * 2. Math.ceil() : 소수점 이하 수 올림. 
 * 3. Math.floor() : 소수점 이하 수 버림.
 */
function getQuotes() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
    quote.innerText = todaysQuote.quote;
    author.innerText = `- ${todaysQuote.author}`;
}
getQuotes();