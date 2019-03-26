import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Heading): Promise<string> {
	return `<h${me.level}>${ await renderer.render(me.content) }</h${me.level}>`
}
addRenderer("Block.Heading", render)
