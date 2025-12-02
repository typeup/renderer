import { dom } from "@typeup/dom"
import { register, Renderer } from "./Renderer"
function render(renderer: Renderer, file: dom.File): Promise<string> {
	return renderer.render(file.content)
}
register("file", render)
