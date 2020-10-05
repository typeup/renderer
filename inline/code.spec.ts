import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./code"

jest.useFakeTimers()

const renderer = Renderer.create()
describe("Inline.Code", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.inline.Code("const pi = 3.1415"))).toMatchSnapshot()
	})
	it("html", async () => {
		expect(await renderer.render(new dom.inline.Code("<html></html>"))).toMatchSnapshot()
	})
})
