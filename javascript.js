console.log("listo")

const quoteBank = [
    {
        quote:"The way to get started is to quit talking and begin doing",
        author:"Walt Disney"
    },
    {
        quote:"Life is what happens when you're busy making other plans",
        author:"John Lennon"
    },
    {
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"Franklin D. Roosevelt"
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author:"Benjamin Franklin"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light.",
        author:"Aristotle"
    },
    {
        quote:"In the end, it's not the years in your life that count. It's the life in your years.",
        author:"Abraham Lincoln"
    },

]



//adding someting when the page (window) is loaded
window.onload = firstLoad;
//definiendo la funcion "cargada"
function firstLoad(){
    generar();
}

//difiniendo la funcion "generar" que se activa al presionar el botón
function generar(){
    //generando número del index al azar
    let randomIndex = Math.floor(Math.random()* quoteBank.length)
    console.log("boton activado");
    let randomQuote = quoteBank[randomIndex].quote;
    document.getElementById("text").innerText = randomQuote
    let quoteAuthor = quoteBank[randomIndex].author;
    document.getElementById("author").innerText = quoteAuthor

    //generando link de twitter
    let link = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22"
    let tweetLinkTwo = "The%20person%20who%20says%20it%20cannot%20be%20done%20should%20not%20interrupt%20the%20person%20who%20is%20doing%20it.%22%20b"
    let quoteTweetLink = randomQuote.replace(/ /g, "%20");
    link += quoteTweetLink;
    let authorTweetLink = quoteAuthor.replace(/ /g, "%20");
    link += authorTweetLink;
    console.log(link);

    
    

    document.getElementById("tweet-quote").href = link;
}



{/* <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22If%20you%20want%20your%20children%20to%20turn%20out%20well%2C%20spend%20twice%20as%20much%20time%20with%20them%2C%20and%20half%20as%20much%20money.%22%20Abigail%20Van%20Buren" style="background-color: rgb(231, 76, 60);"></a> */}