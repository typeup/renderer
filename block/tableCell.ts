import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Table.Cell): Promise<string> {
	return `<t${me.header ? "h" : "d"}>
	${await renderer.render(me.content)}
</t${me.header ? "h" : "d"}>`
}
register("block.table.cell", render)
