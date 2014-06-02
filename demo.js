var templates = require('./templates');

document.addEventListener('DOMContentLoaded', function () {
    var el = templates.foo({
        link: {
            style: '',
            url: 'andyet.com',
            greeting: 'Hello'
        }
    });

    document.body.appendChild(el);

    var red = true;
    setInterval(function () {
        //This function is added by domthing, you could hook it up to
        //your data bindings, or do more clever stuff
        el.update('link.greeting', "Hello at " + new Date().toString());
        el.update('link.style', red ? "color: red;" : "color: green;");
        red = !red;
    }, 1000);
});
