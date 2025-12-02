import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.List.Ordered): Promise<string> {
	return `<ol>
	${(await Promise.all(me.content.map(async item => renderer.render(item)))).join("")}
</ol>`
}
register("block.list.ordered", render)
