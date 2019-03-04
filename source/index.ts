import * as dom from "@typeup/dom"
import { Renderer } from "./Renderer"
export function render(document: dom.Document) {
	const renderer = new Renderer()
	return renderer.render(document)
}

import "./document"
import "./file"
