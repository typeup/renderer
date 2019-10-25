import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./math"

const renderer = Renderer.create()
describe("Inline.Math", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.inline.Math("a^2 + b^2 = c^2"))).toEqual(
`<math xmlns="http://www.w3.org/1998/Math/MathML" alttext="a^2 + b^2 = c^2">
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
</math>`)
	})
})
