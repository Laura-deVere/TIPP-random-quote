const generator = (() => {
    const htmlEls = {
        quote: document.getElementById('quote'),
        author: document.getElementById('author')
    }

    const getData = async () => {
        const url = `https://type.fit/api/quotes`;
        const proxyurl = `https://cors-anywhere.herokuapp.com/`;
        return fetch(proxyurl + url, data = {}, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application / json, text / plain, */*',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error.status);
        });
    }

    const displayQuote = async () => {
        const data = await getData();
        console.log(data)
        let max = data.length;
        let min = 0;
        // Math.random returns a floating point between 0 & 1
        let random = data[Math.round(Math.random() * (max - min) + min)];
        console.log(random);
        htmlEls.quote.textContent = random.text;
        htmlEls.author.textContent = random.author;
    }

    displayQuote();
})();