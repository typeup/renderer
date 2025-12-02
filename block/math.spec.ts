import "../inline"
import "./math"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Block.Math", () => {
	it("render", async () => {
		expect(
			await renderer.render(new dom.Block.Math("a^2 + b^2 = c^2", [new dom.Inline.Text("Pythagoras Theorem.")]))
		).toMatchSnapshot()
	})
	it("render two", async () => {
		const node = new dom.Block.Math("a^2 + b^2 = c^2", [new dom.Inline.Text("Pythagoras Theorem.")])
		expect(await renderer.render([node, node])).toMatchSnapshot()
	})
})
