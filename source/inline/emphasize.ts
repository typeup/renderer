import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.inline.Emphasize): Promise<string> {
	return `<em>${ await renderer.render(me.content) }</em>`
}
addRenderer("Inline.Emphasize", render)
