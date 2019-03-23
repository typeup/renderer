import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.Code): Promise<string> {
	return `<figure>
	<pre><code class=${me.language}
	${ me.value }
	</code></pre>
	<figcaption>${ renderer.render(me.content) }</figcaption>
</figure>
`
}
addRenderer("Block.Code", render)
