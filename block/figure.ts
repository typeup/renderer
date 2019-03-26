import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Figure): Promise<string> {
	return `<figure>
	<img src='${ me.source }' class='${ me.classes.join(" ")}' />
	<figcaption>${ await renderer.render(me.content) }</figcaption>
</figure>
`
}
addRenderer("Block.Figure", render)
