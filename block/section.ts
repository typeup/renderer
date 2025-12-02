import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Section): Promise<string> {
	renderer = renderer.scope()
	const content = await renderer.render(me.content)
	return `<section class="section">
	${content}
</section>`
}
register("block.section", render)
