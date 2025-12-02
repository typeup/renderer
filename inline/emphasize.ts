import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Inline.Emphasize): Promise<string> {
	return `<em>${await renderer.render(me.content)}</em>`
}
register("inline.emphasize", render)
