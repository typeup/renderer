import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(_: Renderer, me: dom.Inline.Text): Promise<string> {
	return me.value
}
register("inline.text", render)
