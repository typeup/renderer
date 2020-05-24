import * as MathJaxNode from "mathjax-node"

let initialized = false
export async function typeset(format: "inline-TeX" | "TeX", math: string): Promise<string> {
	if (!initialized) {
		MathJaxNode.config({
			MathJax: {
				format: "mml"
			},
		})
		MathJaxNode.start()
		initialized = true
	}
	const result = await MathJaxNode.typeset({
		format,
		math,
		mml: true,
	})
	return result.errors ? "error" :  result.mml || "empty formula"
}
