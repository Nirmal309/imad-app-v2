var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one':{
      title:'Article one | Tony Stark',
      heading:'Article one',
      content:`
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>
                
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>`
    },
    'article-two':{
        title:'Article Two | Tony Stark',
      heading:'Article Two',
      content:`
                    <p>
                        This is a content two. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>
                
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>`
    },
    'article-three':{
        title:'Article Three | Tony Stark',
      heading:'Article Three',
      content:`
                    <p>
                        This is a content three. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>
                
                    <p>
                        This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one. This is a content one.
                    </p>`
    },
};

function createTemplate(data){
        var title=data.title;
        var heading=data.heading;
        var content=data.content;
        var htmlTemplate=`
            <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                    <link href="/ui/style.css" rel="stylesheet"/>
                </head>
                <body>
                    <div class="container">
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <hr/>
                        <h3>
                            ${heading}
                        </h3>
                        <div>
                           ${content}
                        </div>
                    </div>
                </body>
            </html>
        `;
        return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function(req, res){
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/:articleName',function(req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
}
);



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
