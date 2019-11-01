import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.DefinitionList): Promise<string> {
	return `<dl>
	${ (await Promise.all(me.content.map(async term => renderer.render(term)))).join("") }
</dl>`
}
addRenderer("Block.DefinitionList", render)
