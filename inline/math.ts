import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"
import * as math from "../math"

async function render(renderer: Renderer, me: dom.inline.Math): Promise<string> {
	return math.typeset("inline-TeX", me.value)
}
addRenderer("Inline.Math", render)
