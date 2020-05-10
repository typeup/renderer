import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "../index"

const renderer = Renderer.create()
describe("Block.Math", () => {
	it("render", async () => {
		const node = new dom.block.Math("a^2 + b^2 = c^2", [new dom.inline.Text("Pythagoras Theorem.")])
		expect(await renderer.render(node)).toEqual(
`<figure>
	<math xmlns="http://www.w3.org/1998/Math/MathML" alttext="a^2 + b^2 = c^2">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <msup>
    <mi>c</mi>
    <mn>2</mn>
  </msup>
</math>
\t<figcaption>Pythagoras Theorem.</figcaption>
</figure>
`)
	})
	it("render two", async () => {
		const node = new dom.block.Math("a^2 + b^2 = c^2", [new dom.inline.Text("Pythagoras Theorem.")])
		expect(await renderer.render([node, node])).toEqual(
`<figure>
	<math xmlns="http://www.w3.org/1998/Math/MathML" alttext="a^2 + b^2 = c^2">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <msup>
    <mi>c</mi>
    <mn>2</mn>
  </msup>
</math>
\t<figcaption>Pythagoras Theorem.</figcaption>
</figure>
`.repeat(2))
	})
})
