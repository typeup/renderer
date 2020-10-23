import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./link"
import "./text"

const renderer = Renderer.create()
describe("Inline.Link", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.inline.Link("http://example.com", [new dom.inline.Text("link")]))).toMatchSnapshot()
	})
})
