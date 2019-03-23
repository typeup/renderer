import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Heading): Promise<string> {
	return `<ol>
	${ (await Promise.all(me.content.map(async item => renderer.render(item)))).join("") }
</ol>`
}
addRenderer("Block.OrderedList", render)
