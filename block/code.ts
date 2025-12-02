import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Code): Promise<string> {
	return `<figure>
	<pre><code class="${me.language}">${me.value
		.replace(/&/gi, "&amp;")
		.replace(/</gi, "&lt;")
		.replace(/>/gi, "&gt;")}</code></pre>
	<figcaption>${await renderer.render(me.content)}</figcaption>
</figure>
`
}
register("block.code", render)
