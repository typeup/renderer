import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Assignment): Promise<string> {
	renderer.set(me.name, me.value)
	return ""
}
register("block.assignment", render)
