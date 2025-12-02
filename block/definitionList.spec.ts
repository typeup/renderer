import "../index"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Block.DefinitionList", () => {
	it("render", async () => {
		const node = new dom.Block.List.Definition([
			new dom.Block.List.Definition.Term(
				[new dom.Inline.Text("Alpha")],
				[
					new dom.Block.List.Definition.Data([new dom.Inline.Text("Term A")]),
					new dom.Block.List.Definition.Data([new dom.Inline.Text("First Term")]),
				]
			),
			new dom.Block.List.Definition.Term(
				[new dom.Inline.Text("Beta")],
				[
					new dom.Block.List.Definition.Data([new dom.Inline.Text("Term B")]),
					new dom.Block.List.Definition.Data([new dom.Inline.Text("Second Term")]),
				]
			),
		])
		expect(await renderer.render(node)).toMatchSnapshot()
	})
})
