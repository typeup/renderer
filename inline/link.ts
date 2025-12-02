import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Inline.Link): Promise<string> {
	return `<a href='${me.target}'>${await renderer.render(me.content)}</a>`
}
register("inline.link", render)
