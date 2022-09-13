const questions = [
  "Qual seu nome?",
  "O que aprendeu hoje?",
  "O que te deixou aborrecido? E o que poderia fazer para melhorar?",
  "O que te deixou feliz hoje?",
  "Quantas pessoas ajudou hoje?",
]


const ask = (index = 0) => {
  process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()
const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  }
  else {
    console.log(answers)
    process.exit()
  }
})

process.on("exit", () => {
  console.log(`
  Bacana ${answers[0]}!

  O que você aprendeu hoje foi: ${answers[1]}

  O que te deixou aborrecido e o que você poderia melhorar: ${answers[2]}

  O que me deixou feliz hoje: ${answers[3]}

  Você ajudou ${answers[4]} pessoas hoje!!
  `)
})