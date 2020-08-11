import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "../inline"
import "./math"

const renderer = Renderer.create()
describe("Block.Math", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.block.Math("a^2 + b^2 = c^2", [new dom.inline.Text("Pythagoras Theorem.")]))).toEqual("<figure>$$a^2 + b^2 = c^2$$<figcaption>Pythagoras Theorem.</figcaption></figure>")
	})
	it("render two", async () => {
		const node = new dom.block.Math("a^2 + b^2 = c^2", [new dom.inline.Text("Pythagoras Theorem.")])
		expect(await renderer.render([node, node])).toEqual("<figure>$$a^2 + b^2 = c^2$$<figcaption>Pythagoras Theorem.</figcaption></figure>".repeat(2))
	})
})
