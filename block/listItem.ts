import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.ListItem): Promise<string> {
	return `<li>${ await renderer.render(me.content) }</li>`
}
addRenderer("Block.ListItem", render)
