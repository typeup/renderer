import "./math"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Inline.Math", () => {
	it("render", async () => expect(await renderer.render(new dom.Inline.Math("a^2 + b^2 = c^2"))).toMatchSnapshot())
})
