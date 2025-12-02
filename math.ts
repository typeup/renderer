/// <reference types="./mathjax" />
let mathjax: any
async function loadMathJax() {
	return (mathjax ??= (await import("mathjax/tex-chtml.js")).mathjax)
}

export namespace math {
	export async function typeset(math: string): Promise<string> {
		const mj = await loadMathJax()
		const node = await mj.tex2chtmlPromise(math, { display: true })
		return node.outerHTML
	}
}
