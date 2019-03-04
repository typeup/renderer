import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Paragraph): Promise<string> {
	return `<p>
	${ renderer.render(me.content) }
</p>`
}
addRenderer("Block.Paragraph", render)
