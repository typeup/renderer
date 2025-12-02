import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.Math): Promise<string> {
	// return math.typeset("inline-TeX", "a^2 + b^2 = c^2" ?? me.value)
	return `<figure>$$${me.value}$$<figcaption>${await renderer.render(me.content)}</figcaption></figure>`
}
register("block.math", render)
