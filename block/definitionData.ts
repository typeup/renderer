import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.List.Definition.Data): Promise<string> {
	return `<dd>${(await renderer.render(me.content)).trim()}</dd>`
}
register("block.list.definition.data", render)
