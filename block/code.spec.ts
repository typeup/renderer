import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "../index"

const renderer = Renderer.create()
describe("Block.Code", () => {
	it("render", async () => {
		const node = new dom.block.Code("c", `void main() {\n\tprintf("Hello World!")\n}`, [new dom.inline.Text("Hello World in C.")])
		expect(await renderer.render(node)).toEqual(
`<figure>
	<pre><code class="c">
void main() {
	printf("Hello World!")
}
	</code></pre>
	<figcaption>Hello World in C.</figcaption>
</figure>
`)
	})
})
