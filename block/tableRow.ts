import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Table.Row): Promise<string> {
	return `<tr>
	${(await Promise.all(me.content.map(async row => renderer.render(row)))).join("")}
</tr>`
}
register("block.table.row", render)
