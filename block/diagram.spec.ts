import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./diagram"

jest.useFakeTimers()

const renderer = Renderer.create()
describe("Block.Diagram", () => {
	it("render", async () => {
		const node = new dom.block.Diagram(`// {type:sequence}\n[:Computer]sendUnsentEmail>[:Server]\n[:Computer]newEmail>[:Server]\n[:Server]reponse.>[:Computer]\n[:Computer]downloadEmail>[:Server]\n[:Computer]deleteOldEmail>[:Server]\n`, [new dom.inline.Text("Alice to Bob.")])
		expect(await renderer.render(node)).toMatchSnapshot()
	})
})
