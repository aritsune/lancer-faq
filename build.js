const fs = require('fs');
const ncp = require('ncp').ncp;


const path = require('path');

const { Remarkable } = require('remarkable');
const toc = require('markdown-toc');

const SRC_DIR = 'src'
const OUT_DIR = 'dist'


const md = () => new Remarkable({
  html: true,
  typographer: true,

});


// FAQ
const faqInput = fs.readFileSync('./src/index.md', 'utf-8')
const faqTocMarkdown = md().use(toc.plugin({
  maxdepth: 2
})).render(faqInput)



let faqOutput = md()
  .use(function (remarkable) {
    remarkable.renderer.rules.heading_open = function (tokens, idx) {
      if (idx === 0) return '<h' + tokens[idx].hLevel + '>';
      return '<h' + tokens[idx].hLevel + ' id=' + toc.slugify(tokens[idx + 1].content) + '>'
    };
    remarkable.renderer.rules.heading_close = function (tokens, idx) {
      if (idx === 2) return '</h' + tokens[idx].hLevel + '>';
      return '<span class="permalink">[<a href="#' + toc.slugify(tokens[idx - 1].content) + '">link</a>]</span>' + '</h' + tokens[idx].hLevel + '>';
    };
  })
  .render(
    faqInput.replace('<!-- toc -->', faqTocMarkdown.content)
  )

faqOutput += '\n\n<link rel="stylesheet" href="./style.css">'

// Create dist directory if it doesn't exist & save output to it
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}


fs.copyFileSync('./src/style.css', path.join('.', OUT_DIR, 'style.css'))
ncp('./src/assets', './dist/assets')

const faqOutputPath = path.join('.', OUT_DIR, 'index.html');
fs.writeFileSync(faqOutputPath, faqOutput, 'utf-8');