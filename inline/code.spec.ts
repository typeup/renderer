import "./code"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Inline.Code", () => {
	it("render", async () => expect(await renderer.render(new dom.Inline.Code("const pi = 3.1415"))).toMatchSnapshot())
	it("html", async () => expect(await renderer.render(new dom.Inline.Code("<html></html>"))).toMatchSnapshot())
})
