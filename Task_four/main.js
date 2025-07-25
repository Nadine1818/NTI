
const fs = require('fs');
const http = require('http');
const url = require('url');
const nunjucks = require('nunjucks');


const dataBase = fs.readFileSync('dataBase.json', 'utf-8');
const posts = JSON.parse(dataBase);
const cardTemp = fs.readFileSync('card.html', 'utf-8');
const cardTemp2 = fs.readFileSync('card2.html', 'utf-8');
const fullPage = fs.readFileSync('fullPage.html', 'utf-8')

const server = http.createServer((request, response) => {
    const { query, pathname } = url.parse(request.url, true);
    if (pathname === '/' || pathname === '/home') {
        response.writeHead(200, {
            'content-type': 'text/html'
        });
        const cardsHtml = posts.map(p => nunjucks.renderString(cardTemp, p)).join('\n');
        const fullHtml = nunjucks.renderString(fullPage, { content: cardsHtml })
        response.end(fullHtml);
    }

    else if (pathname === '/post') {
        response.writeHead(200, {
            "content-type": 'text/html'
        });

        const post = posts.find(p => p.id == query.id)
        if (!post) {
            response.writeHead(404, {
                "content-type": 'text/html'
            });
            return response.end('<h1>Post not available</h1>');
        }

        const postHtml = nunjucks.renderString(cardTemp2, post);
       
        const fullHtml = nunjucks.renderString(fullPage, { content: postHtml });

        response.end(fullHtml);

    }

    else if (pathname === '/api') {
        response.writeHead(200, {
            "content-type": 'application/json'
        });

        response.end(dataBase);
    }

    else {
        response.writeHead(404, {
            "content-type": 'text/html'
        });
        // const htmlError = fs.readFileSync('error.html','utf-8');
        // response.end(htmlError);
        response.end('<h1>ERROR 404<h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("listening to requests on port 8000");
});