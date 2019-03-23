import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Assignment): Promise<string> {
	renderer.setVariable(me.name, me.value)
	return ""
}
addRenderer("Block.Assignment", render)
