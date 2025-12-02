import "../index"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Block.Code", () => {
	it("render", async () => {
		const node = new dom.Block.Code("c", `void main() {\n\tprintf("Hello World!")\n}`, [
			new dom.Inline.Text("Hello World in C."),
		])
		expect(await renderer.render(node)).toMatchSnapshot()
	})
	it("html", async () => {
		const node = new dom.Block.Code(
			"html",
			`<html>\n\t<head>\n\t<title>Title</title>\n\t</head>\n\t<body>\n\t</body>\n</html>`,
			[new dom.Inline.Text("Some HTML.")]
		)
		expect(await renderer.render(node)).toMatchSnapshot()
	})
})
