import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Heading): Promise<string> {
	return `<h${me.level}>${await renderer.render(me.content)}</h${me.level}>`
}
register("block.heading", render)
