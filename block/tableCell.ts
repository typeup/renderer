import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.TableCell): Promise<string> {
	return `<t${ me.header ? "h" : "d" }>
	${ await renderer.render(me.content) }
</t${ me.header ? "h" : "d" }>`
}
addRenderer("Block.TableCell", render)
