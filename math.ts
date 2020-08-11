// tslint:disable: no-submodule-imports
import { mathjax } from "mathjax-full/js/mathjax"
import { TeX } from "mathjax-full/js/input/tex"
import { CHTML } from "mathjax-full/js/output/chtml"
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor"
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html"
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages"

export async function typeset(document: string): Promise<string> {
	const adaptor = liteAdaptor()
	RegisterHTMLHandler(adaptor as any)
	const tex = new TeX({ packages: AllPackages, inlineMath: [["$", "$"]] })
	const chtml = new CHTML({ fontURL: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/output/chtml/fonts/woff-v2" })
	const html = mathjax.document(document, { InputJax: tex, OutputJax: chtml, })
	html.render()
	return adaptor.outerHTML(adaptor.root(html.document))
}
