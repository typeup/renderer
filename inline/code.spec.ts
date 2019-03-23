import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./code"

const renderer = new Renderer()
describe("Inline.Code", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.inline.Code("const pi = 3.1415"))).toEqual("<code>const pi = 3.1415</code>")
	})
})
