//react element is an object not a HTML tag
const reactElement = [
    React.createElement(
        'header', { key: 1 }, React.createElement(
            'nav', null, React.createElement(
                'ul', null,
                [
                    React.createElement('li', { key: 11 }, 'home'),
                    React.createElement('li', { key: 12 }, 'about'),
                    React.createElement('li', { key: 13 }, 'contact')
                ]
            )
        )
    ),
    React.createElement(
        'main', { key: 2 },
        [
            React.createElement('article', { key: 21 }, 'article1'),
            React.createElement('article', { key: 22 }, 'article2'),
            React.createElement('article', { key: 23 }, 'article3')
        ]
    ),
    React.createElement(
        'footer', { key: 3 },
        [
            React.createElement('span', { key: 31 }, 'copyright© '),
            React.createElement('span', { key: 32 }, 'about us '),
            React.createElement('span', { key: 33 }, 'contact us ')
        ]
    )
]

//<header>
//  <nav>
//      <ul>
//          <li>home</li>
//          <li>about</li>
//          <li>contact</li>
//      </ul>
//  </nav>
//</header>
// 
//<main>
//  <article>article1</article>
//  <article>article2</article>
//  <article>article3</article>
//</main>
// 
//<footer>
//  <span>copyright©</span>
//  <span>about us</span>
//  <span>contact us</span>
//</footer>
// 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactElement);