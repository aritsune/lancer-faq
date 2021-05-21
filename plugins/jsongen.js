
module.exports = function (markdownstr) {
  const regex = /^### (.+?\n+)([^#]+)/gm
  //^### for markdown header, group1 is the question and any number of newlines
  //group2 is the answer, defined by "anything, incl whitespace, that isn't a #"

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