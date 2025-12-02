import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Video): Promise<string> {
	return `<figure>
	<video controls class='${me.classes.join(" ")}'>
		<source src='${me.source}' type='${me.type}'>
	</video>
	<figcaption>${await renderer.render(me.content)}</figcaption>
</figure>
`
}
register("block.video", render)
