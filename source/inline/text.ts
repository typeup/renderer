import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(_: Renderer, me: dom.inline.Text): Promise<string> {
	return me.value
}
addRenderer("Inline.Link", render)
