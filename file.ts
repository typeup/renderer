import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "./Renderer"
function render(renderer: Renderer, file: dom.File): Promise<string> {
	return renderer.render(file.content)
}
addRenderer("File", render)
