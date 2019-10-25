import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./diagram"

const renderer = Renderer.create()
describe("Block.Diagram", () => {
	it("render", async () => {
		const node = new dom.block.Diagram("sequenceDiagram\nAlice->>:Bob\n", [new dom.inline.Text("Alice to Bob.")])
		expect(await renderer.render(node)).toEqual(`<figure>
		<div class="mermaid">
sequenceDiagram
Alice->>:Bob\t\t
</div>
		<figcaption></figcaption>
	</figure>
	`)
	})
})
