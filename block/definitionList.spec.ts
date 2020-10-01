import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "../index"

jest.useFakeTimers()

const renderer = Renderer.create()
describe("Block.DefinitionList", () => {
	it("render", async () => {
		const node = new dom.block.DefinitionList([
			new dom.block.DefinitionTerm([
				new dom.inline.Text("Alpha"),
			], [
				new dom.block.DefinitionData([
					new dom.inline.Text("Term A"),
				]),
				new dom.block.DefinitionData([
					new dom.inline.Text("First Term"),
				]),
			]),
			new dom.block.DefinitionTerm([
				new dom.inline.Text("Beta"),
			], [
				new dom.block.DefinitionData([
					new dom.inline.Text("Term B"),
				]),
				new dom.block.DefinitionData([
					new dom.inline.Text("Second Term"),
				]),
			]),
		])
		expect(await renderer.render(node)).toMatchSnapshot()
	})
})
