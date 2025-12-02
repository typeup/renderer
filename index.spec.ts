import "./block"
import "./inline"
import { dom } from "@typeup/dom"
import { renderer } from "./index"

describe("renderer", () => {
	it.each([
		() => new dom.Document([new dom.Block.Paragraph([new dom.Inline.Text("Hello, world!")])]),
		() => new dom.Document([new dom.Block.Paragraph([new dom.Inline.Text("Test content")])]),
		() =>
			new dom.Document([
				new dom.Block.Paragraph([new dom.Inline.Text("First paragraph")]),
				new dom.Block.Paragraph([new dom.Inline.Text("Second paragraph")]),
			]),
		() =>
			new dom.Document([
				new dom.Block.Heading(1, [new dom.Inline.Text("Main Title")]),
				new dom.Block.Paragraph([new dom.Inline.Text("Content under title")]),
			]),
		() =>
			new dom.Document([
				new dom.Block.Paragraph([
					new dom.Inline.Text("This is "),
					new dom.Inline.Emphasize([new dom.Inline.Text("emphasized")]),
					new dom.Inline.Text(" text."),
				]),
			]),
		() => new dom.Document([new dom.Block.Math("x^2 + y^2 = z^2", [new dom.Inline.Text("Pythagorean theorem")])]),
	])("render(%s)", async document => expect(await renderer.render(document())).toMatchSnapshot())
})
