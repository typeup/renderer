import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Paragraph): Promise<string> {
	return `<p>
	${await renderer.render(me.content)}
</p>`
}
register("block.paragraph", render)
