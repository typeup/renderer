import { dom } from "@typeup/dom"
import { Renderer } from "./Renderer"
export function render(document: dom.Document): Promise<string> {
	const renderer = Renderer.create()
	return renderer.render(document)
}

import "./document"
import "./file"
import "./block"
import "./inline"
