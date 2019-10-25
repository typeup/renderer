import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Math): Promise<string> {
	const result = ""
	return `<figure>
	${ result }
	<figcaption>${ await renderer.render(me.content) }</figcaption>
</figure>
`
}
addRenderer("Block.Diagram", render)
