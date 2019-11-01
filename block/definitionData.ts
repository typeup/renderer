import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.DefinitionData): Promise<string> {
	return `<dd>${ (await renderer.render(me.content)).trim() }</dd>`
}
addRenderer("Block.DefinitionData", render)
