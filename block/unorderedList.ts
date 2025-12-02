import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.List.Unordered): Promise<string> {
	return `<ul>
	${(await Promise.all(me.content.map(async item => renderer.render(item)))).join("")}
</ul>`
}
register("block.list.unordered", render)
