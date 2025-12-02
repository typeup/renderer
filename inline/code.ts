import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Inline.Code): Promise<string> {
	return `<code>${me.value.replace(/&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;")}</code>`
}
register("inline.code", render)
