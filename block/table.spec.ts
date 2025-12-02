import "../inline"
import "./tableCell"
import "./tableRow"
import "./table"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Block.Table", () => {
	it("render", async () => {
		expect(
			await renderer.render(
				new dom.Block.Table(
					["", ""],
					[
						new dom.Block.Table.Row([
							new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header A")]),
							new dom.Block.Table.Cell(true, [new dom.Inline.Text("Header B")]),
						]),
						new dom.Block.Table.Row([
							new dom.Block.Table.Cell(false, [new dom.Inline.Text("value A")]),
							new dom.Block.Table.Cell(false, [new dom.Inline.Text("value B")]),
						]),
					],
					[new dom.Inline.Text("Table caption.")]
				)
			)
		).toMatchSnapshot()
	})
})
