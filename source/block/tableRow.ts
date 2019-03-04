import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.block.TableRow): Promise<string> {
	return `<tr>
	${ (await Promise.all(me.content.map(async row => renderer.render(row)))).join("") }
</tr>`
}
addRenderer("Block.TableRow", render)
