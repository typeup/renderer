import "./link"
import "./text"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Inline.Link", () => {
	it("render", async () => {
		expect(
			await renderer.render(new dom.Inline.Link("http://example.com", [new dom.Inline.Text("link")]))
		).toMatchSnapshot()
	})
})
