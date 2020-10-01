import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./math"

const renderer = Renderer.create()
describe("Inline.Math", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.inline.Math("a^2 + b^2 = c^2"))).toMatchSnapshot()
	})
})
