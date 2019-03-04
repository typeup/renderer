import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.inline.Link): Promise<string> {
	return `<a href='${me.target}'>${ await renderer.render(me.content) }</a>`
}
addRenderer("Inline.Link", render)
