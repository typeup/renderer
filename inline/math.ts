import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Inline.Math): Promise<string> {
	return `$${me.value}$`
}
register("inline.math", render)
