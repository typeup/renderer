import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.inline.Math): Promise<string> {
	return `$${ me.value }$`
}
addRenderer("Inline.Math", render)
