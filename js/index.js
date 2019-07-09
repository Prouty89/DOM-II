// Your code goes here



















//DBLCLK
let wordIndex = 0


 const introParagraph = document.querySelector('.home p')
const introParagraphContent = introParagraph.innerHTML
introParagraph.addEventListener('wheel', () => {
  introParagraph.innerHTML = introParagraphContent
    .split(' ')
    .map(
      (element, i) =>
        i === wordIndex ? `<span class='red-word'>${element}</span>` : element
    )
    .join(' ')
  document.querySelector('.home p .red-word').style.fontWeight = 'bold'
  document.querySelector('.home p .red-word').style.fontSize = '2.4rem'
  wordIndex =
    wordIndex === introParagraphContent.split(' ').length - 1
      ? 0
      : wordIndex + 1
})
