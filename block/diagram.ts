import { dom } from "@typeup/dom"
import yuml2svg from "yuml2svg"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Diagram): Promise<string> {
	let value = me.value.trim()
	if (value.startsWith("// {type:"))
		value = (await yuml2svg(value)).replace(
			/<svg ([^>]*) width="(\d+(?:\.\d)*)\w*" height="(\d+(?:\.\d)*)\w*"/,
			`<svg $1 width="$2" height="$3" viewBox="0 0 $2 $3"`
		)
	return `<figure>
		${value}
		<figcaption>${await renderer.render(me.content)}</figcaption>
	</figure>
	`
}
register("block.diagram", render)
