const generator = (() => {
  const htmlEls = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
    reload: document.getElementById("reload"),
  };

  const getData = async () => {
    const url = `https://type.fit/api/quotes`;
    const proxyurl = `https://cors-anywhere.herokuapp.com/`;
    return fetch(proxyurl + url, (data = {}), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application / json, text / plain, */*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error.status);
      });
  };

  const randomNum = (max, min) => {
    // Math.random returns a floating point between 0 & 1
    let num = Math.round(Math.random() * (max - min) + min);
    return num;
  };

  const searchAuthor = (name, data) => {
    // let regex = new RegExp(name, "i");
    let quotes = [];
    data.forEach((quote) => {
      if (quote.author !== null && quote.author.indexOf(name) !== -1) {
        quotes.push(quote);
      }
    });
    return displayQuote(quotes[randomNum(quotes.length - 1, 0)], quotes);
  };

  const displayQuote = (quote, data) => {
    htmlEls.quote.textContent = quote.text;
    htmlEls.author.textContent = quote.author ? quote.author : "Unknown";
    htmlEls.author.addEventListener("click", () =>
      searchAuthor(quote.author, data)
    );
  };

  const randomQuote = async () => {
    const data = await getData();
    let max = data.length;
    let random = data[randomNum(max, 0)];
    displayQuote(random, data);
  };

  htmlEls.reload.addEventListener("click", randomQuote);
  randomQuote();
})();
