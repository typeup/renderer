import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Paragraph): Promise<string> {
	renderer.setVariable(this.name, this.value)
	return ""
}
addRenderer("Block.Assignment", render)
