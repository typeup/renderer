import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Import): Promise<string> {
	return `<!-- begin import from ${me.source.toString()} -->
					${await renderer.render(me.content)}
					<!-- end import from ${me.source.toString()} -->`
}
register("block.import", render)
