import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.List.Item): Promise<string> {
	return `<li>${await renderer.render(me.content)}</li>`
}
register("block.list.item", render)
