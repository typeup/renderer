import { dom } from "@typeup/dom"
import { register, Renderer } from "../Renderer"

async function render(renderer: Renderer, me: dom.Block.List.Definition.Term): Promise<string> {
	return `<dt>${(await renderer.render(me.content)).trim()}</dt>\n\t${(
		await Promise.all(me.data.map(async d => renderer.render(d)))
	).join("\n\t")}`
}
register("block.list.definition.term", render)
