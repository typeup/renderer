import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.List.Definition): Promise<string> {
	return `<dl>
	${(await Promise.all(me.content.map(async term => renderer.render(term)))).join("\n\t")}
</dl>`
}
register("block.list.definition", render)
