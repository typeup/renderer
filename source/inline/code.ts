import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.inline.Code): Promise<string> {
	return `<code>${me.value}</code>`
}
addRenderer("Inline.Code", render)
