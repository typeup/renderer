import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Video): Promise<string> {
	return `<figure>
	<video controls class='${ me.classes.join(" ")}'>
		<source src='${ me.source }' type='${ me.type }'>
	</video>
	<figcaption>${ renderer.render(me.content) }</figcaption>
</figure>
`
}
addRenderer("Block.Video", render)
