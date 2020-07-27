import * as dom from "@typeup/dom"
import { Renderer } from "../Renderer"
import "./math"

const renderer = Renderer.create()
describe("Inline.Math", () => {
	it("render", async () => {
		expect(await renderer.render(new dom.inline.Math("a^2 + b^2 = c^2"))).toEqual(
`<span class="mjx-chtml"><span class="mjx-math" aria-label="a^2 + b^2 = c^2"><span class="mjx-mrow" aria-hidden="true"><span class="mjx-msubsup"><span class="mjx-base"><span class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.225em; padding-bottom: 0.298em;">a</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.372em; padding-bottom: 0.372em;">2</span></span></span></span><span class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.298em; padding-bottom: 0.446em;">+</span></span><span class="mjx-msubsup MJXc-space2"><span class="mjx-base"><span class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.446em; padding-bottom: 0.298em;">b</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.372em; padding-bottom: 0.372em;">2</span></span></span></span><span class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.077em; padding-bottom: 0.298em;">=</span></span><span class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.225em; padding-bottom: 0.298em;">c</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.372em; padding-bottom: 0.372em;">2</span></span></span></span></span></span></span>`)
	})
})
