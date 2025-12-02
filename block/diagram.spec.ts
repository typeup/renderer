import "./diagram"
import { dom } from "@typeup/dom"
import { Renderer } from "../Renderer"

const renderer = Renderer.create()
describe("renderer.Block.Diagram", () => {
	it("render", async () => {
		const node = new dom.Block.Diagram(
			`// {type:sequence}\n[:Computer]sendUnsentEmail>[:Server]\n[:Computer]newEmail>[:Server]\n[:Server]reponse.>[:Computer]\n[:Computer]downloadEmail>[:Server]\n[:Computer]deleteOldEmail>[:Server]\n`,
			[new dom.Inline.Text("Alice to Bob.")]
		)
		expect(await renderer.render(node)).toMatchSnapshot()
	})
})
