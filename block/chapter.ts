import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Paragraph): Promise<string> {
	return `<section class="chapter">
	${ renderer.render(me.content) }
</section>`
}
addRenderer("Block.Chapter", render)
