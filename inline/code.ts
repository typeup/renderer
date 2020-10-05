import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.inline.Code): Promise<string> {
	return `<code>${me.value.replace(/\&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")}</code>`
}
addRenderer("Inline.Code", render)
