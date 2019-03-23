import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Paragraph): Promise<string> {
	return `<section class="section">
	${ renderer.render(me.content) }
</section>`
}
addRenderer("Block.Section", render)
