import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "../index"

const renderer = Renderer.create()
describe("Block.Code", () => {
	it("render", async () => {
		const node = new dom.block.Code("c", `void main() {\n\tprintf("Hello World!")\n}`, [new dom.inline.Text("Hello World in C.")])
		expect(await renderer.render(node)).toMatchSnapshot()
	})
	it("html", async () => {
		const node = new dom.block.Code("html", `<html>\n\t<head>\n\t<title>Title</title>\n\t</head>\n\t<body>\n\t</body>\n</html>`, [new dom.inline.Text("Some HTML.")])
		expect(await renderer.render(node)).toMatchSnapshot()
	})
})
