import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.DefinitionTerm): Promise<string> {
	return `<dt>${ await renderer.render(me.content) }</dt>\n${ (await Promise.all(me.data.map(async d => renderer.render(d)))).join("\n") }`
}
addRenderer("Block.DefinitionTerm", render)
