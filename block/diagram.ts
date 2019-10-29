import yuml2svg from "yuml2svg"
import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Diagram): Promise<string> {
	let value = me.value.trim()
	if (value.startsWith("//"))
		value = await yuml2svg(value)
	return `<figure>
		${ value }
		<figcaption>${ await renderer.render(me.content) }</figcaption>
	</figure>
	`
}
addRenderer("Block.Diagram", render)
