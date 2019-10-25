import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Diagram): Promise<string> {
	let value = me.value.trim()
	if (value.startsWith("sequenceDiagram") || value.startsWith("gantt") || value.startsWith("graph") || value.startsWith("classDiagram") || value.startsWith("gitGraph"))
		value = `<div class="mermaid">\n${ value }\t\t\n</div>`
	return `<figure>
		${ value }
		<figcaption>${ await renderer.render(me.content) }</figcaption>
	</figure>
	`
}
addRenderer("Block.Diagram", render)
