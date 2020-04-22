const { Remarkable } = require('remarkable');
const fs = require('fs')
const path = require('path')

const OUT_DIR = 'dist'

const md = new Remarkable({
  html: true
});


// FAQ
const faqInput = fs.readFileSync('./index.md', 'utf-8')
const faqOutput = md.render(faqInput)

// Create dist directory if it doesn't exist & save output to it
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}

const faqOutputPath = path.join('.', OUT_DIR, 'index.html')
fs.writeFileSync(faqOutputPath, faqOutput, 'utf-8')