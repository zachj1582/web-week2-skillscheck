//DO NOT EDIT CODE BELOW
//DO NOT EDIT CODE BELOW
//DO NOT EDIT CODE BELOW
const poemGreeting = document.getElementById('poem-greeting')
const poemContentOne = document.getElementById('poem-content-one')
const poemContentTwo = document.getElementById('poem-content-two')
const poemContentThree = document.getElementById('poem-content-three')

if (lovesCode === true) {
  document.body.style.backgroundColor = '#ceffef'
} else {
  document.body.style.backgroundColor = '#ffb9ac'
}

poemGreeting.innerText = `Hello, ${name}!`
poemContentOne.innerText = `Today is the day, it's unlike any other. You are learning to code at the ripe age of ${age}, the perfect time to start! Now is the time to buckle down to make your mark.`
poemContentTwo.innerText = `"${phrase}," you whisper to yourself ${!lovesCode ? 'but fear not as the journey is just beginning. With some hard work and dedication you will find yourself winning' : 'as you create something great'}!`
poemContentThree.innerText = `Project One is complete ✅ and now your knowledge is taking off like a rocket 🚀`
//DO NOT EDIT CODE ABOVE
//DO NOT EDIT CODE ABOVE
//DO NOT EDIT CODE ABOVE