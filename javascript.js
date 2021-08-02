//  planing for an array with author and book if applicable
var quotes = [
  'Simplicity, patience, compassion. These three are your greatest treasures. Simple in actions and thoughts, you return to the source of being. Patient with both friends and enemies, you accord with the way things are. Compassionate toward yourself ,you reconcile all beings in the world.',
  'Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.',
  'Those who know do not speak. Those who speak do not know.',
  'When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.',
  'A man with outward courage dares to die; a man with inner courage dares to live.',
  'Do you have the patience to wait until your mud settles and the water is clear?',
  'The flame that burns twice as bright burns half as long.',
  'If you try to change it, you will ruin it. Try to hold it, and you will lose it.',
  'The wise man is one who knows what he does not know.',
  'To understand the limitation of things, desire them.',
  'Give evil nothing to oppose and it will disappear by itself.',
  'If you realize that all things change, there is nothing you will try to hold on to. If you are not afraid of dying, there is nothing you cannot achieve.',
  'The further one goes, the less one knows.',
  'When there is no desire, all things are at peace.',
  'He who conquers others is strong; he who conquers himself is mighty.',
  'Success is as dangerous as failure. Hope is as hollow as fear.'
]

//  simple random number function to inject text string
function newQuote () {
  var randomNumber = Math.floor(Math.random() * (quotes.length))
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}

//  calling for a new quote on page reload, both new user or reload button
window.onload = (event) => {
  newQuote()
}

//  colors and function to randomize the presentation pallate
const colors = [
  'tomato',
  'thistle',
  'seagreen',
  'wheat',
  'linen',
  'peru',
  'honeydew',
  'plum',
  'darkseagreen',
  'sandybrown',
  'cadetblue']
const randomColor = Math.floor(Math.random() * colors.length)

function changeBackground (color) {
  document.body.style.background = color
}

window.addEventListener('load',function () { changeBackground(colors[randomColor]) })
