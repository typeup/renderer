import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.UnorderedList): Promise<string> {
	return `<ul>
	${ (await Promise.all(me.content.map(async item => renderer.render(item)))).join("") }
</ul>`
}
addRenderer("Block.UnorderedList", render)
