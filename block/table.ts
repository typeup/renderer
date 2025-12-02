import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

function getClasses(me: dom.Block.Table): string {
	return me.alignments
		.map((value, index) => {
			let result: string
			switch (value) {
				case "center":
					result = "tc" + (index + 1)
					break
				case "right":
					result = "tr" + (index + 1)
					break
				default:
					result = ""
					break
			}
			return result
		})
		.filter(value => value != "")
		.join(" ")
}

async function render(renderer: Renderer, me: dom.Block.Table): Promise<string> {
	return `<table class="${getClasses(me)}">
	${(await Promise.all(me.rows.map(async row => renderer.render(row)))).join("")}
	<caption>${await renderer.render(me.content)}</caption>
</table>`
}
register("block.table", render)
