/// <reference types="./mathjax" />
//
// Import the needed TeX packages
//
import "@mathjax/src/js/input/tex/base/BaseConfiguration.js"
import "@mathjax/src/js/input/tex/ams/AmsConfiguration.js"
import "@mathjax/src/js/input/tex/newcommand/NewcommandConfiguration.js"
import "@mathjax/src/js/input/tex/noundefined/NoUndefinedConfiguration.js"
import { liteAdaptor } from "@mathjax/src/js/adaptors/liteAdaptor"
import { RegisterHTMLHandler } from "@mathjax/src/js/handlers/html"
import { TeX } from "@mathjax/src/js/input/tex"
import { mathjax } from "@mathjax/src/js/mathjax"
import { CHTML } from "@mathjax/src/js/output/chtml"

export namespace math {
	export async function typeset(document: string): Promise<string> {
		const adaptor = liteAdaptor()
		RegisterHTMLHandler(adaptor as any)
		const tex = new TeX({ packages: ["base", "ams", "newcommand", "noundefined"], inlineMath: [["$", "$"]] })
		const chtml = new CHTML({
			fontURL: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/output/chtml/fonts/woff-v2",
		})
		const html = mathjax.document(document, { InputJax: tex, OutputJax: chtml })
		html.render()
		return adaptor.outerHTML(adaptor.root(html.document))
	}
}
