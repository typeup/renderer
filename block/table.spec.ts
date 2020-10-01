import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "../inline"
import "./tableCell"
import "./tableRow"
import "./table"

const renderer = Renderer.create()
describe("Block.Table", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.block.Table(["", ""], [
			new dom.block.TableRow([
				new dom.block.TableCell(true, [new dom.inline.Text("Header A")]),
				new dom.block.TableCell(true, [new dom.inline.Text("Header B")]),
			]),
			new dom.block.TableRow([
				new dom.block.TableCell(false, [new dom.inline.Text("value A")]),
				new dom.block.TableCell(false, [new dom.inline.Text("value B")]),
			]),
		], 
		[
			new dom.inline.Text("Table caption.")
		]))).toMatchSnapshot()
	})
})
