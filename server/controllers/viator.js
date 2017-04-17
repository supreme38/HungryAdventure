const scrapeIt = require('scrape-it');

module.exports = {
  scrape(req, res) {
    const city = req.query.location || 'new york city';
    let results;
    scrapeIt(`https://www.viator.com/search/${city}/1?TOPX=1-15&section=ttd&sortBy=RELEVANCE`, {
      pages: {
        listItem: '.media',
        data: {
          title: '.product-title > a',
          price: '.price-amount',
          image: {
            selector: '.img-rounded',
            attr: 'src',
          },
          url: {
            selector: 'a',
            attr: 'href',
          },
        },
      },
    }).then((page1) => {
      results = page1.pages;
      scrapeIt(`https://www.viator.com/search/${city}/2?TOPX=16-30&section=ttd&sortBy=RELEVANCE`, {
        pages: {
          listItem: '.media',
          data: {
            title: '.product-title > a',
            price: '.price-amount',
            image: {
              selector: '.img-rounded',
              attr: 'src',
            },
            url: {
              selector: 'a',
              attr: 'href',
            },
          },
        },
      }).then((page2) => {
        results = results.concat(page2.pages);
        for (let i = 0; i < results.length; i += 1) {
          if (!results[i].price) {
            results[i] = '';
          } else {
            results[i].price = Number(results[i].price.replace(/[^\d.]/g, ''));
          }
        }
        results = results.filter(str => /\S/.test(str));
      }).then(() => res.send(results));
    });
  },
};
