
module.exports = function (markdownstr) {
  const regex = /^### (.*\?)\n+((?:(?!\n##)[\s\S])*)/gm

  const output = []
  let match

  while (match = regex.exec(markdownstr)) {
    const sources = []
    let answer = match[2]

    const wotRegex = /<wot:(\d+\/\d+)>/g
    answer = answer.replace(wotRegex, function (_, msglink) {
      sources.push(`http://discordapp.com/channels/426286410496999425/${msglink}`)
      return ''
    })

    output.push({
      question: match[1],
      answer: answer.trim(),
      sources
    })
  }

  return output

}