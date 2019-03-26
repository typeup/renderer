import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"
import * as MathJaxNode from "mathjax-node"

async function render(renderer: Renderer, me: dom.block.Math): Promise<string> {
	MathJaxNode.config({
		MathJax: {
		},
	})
	MathJaxNode.start()
	const result = await new Promise<string>((resolve, reject) => MathJaxNode.typeset({
		math: me.value,
		format: "inline-TeX",
		mml: true,
	}, data => {
		if (data.errors)
			reject(data.errors)
		else
			resolve(data.mml)
	}))
	return `<figure>
	${result}
	<figcaption>${ await renderer.render(me.content) }</figcaption>
</figure>
`
}
addRenderer("Block.Math", render)
