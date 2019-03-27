import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Paragraph): Promise<string> {
	renderer = renderer.scope()
	const content = await renderer.render(me.content)
	return `<section class="section">
	${ content }
</section>`
}
addRenderer("Block.Section", render)
