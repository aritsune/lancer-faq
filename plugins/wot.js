module.exports = function (sourceText) {
  const regex = /&lt;wot:(\d+\/\d+)&gt;/g
  return sourceText.replace(regex, function (_, msglink) {
    return `<sup>[<a href="discord://discordapp.com/channels/426286410496999425/${msglink}" target="_blank">word of Tom</a>]</sup>`
  })

}