import MathJax from "@mathjax/src"

await MathJax.init({loader: {load: ['input/tex', 'output/chtml']}})
const mml = (await MathJax.tex2chtmlPromise('x+y'))
const adaptor = MathJax.startup.adaptor
console.log(adaptor.outerHTML(mml))
