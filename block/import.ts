import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Import): Promise<string> {
	return `<!-- begin import from ${ me.source.toString() } -->
					${ await renderer.render(me.content) }
					<!-- end import from ${ me.source.toString() } -->`
}
addRenderer("Block.Import", render)
