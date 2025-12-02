import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Chapter): Promise<string> {
	renderer = renderer.scope()
	const content = await renderer.render(me.content)
	return `<section class="chapter">
	${content}
</section>`
}
register("block.chapter", render)
