import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Figure): Promise<string> {
	return `<figure>
	<img src='${me.source}' class='${me.classes.join(" ")}' />
	<figcaption>${await renderer.render(me.content)}</figcaption>
</figure>
`
}
register("block.figure", render)
