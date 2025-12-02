declare module "mathjax/tex-chtml.js" {
	interface MathJaxNode {
		outerHTML: string
		[key: string]: any
	}

	interface MathJaxOptions {
		display?: boolean
		[key: string]: any
	}

	interface MathJaxStatic {
		tex2chtmlPromise(tex: string, options?: MathJaxOptions): Promise<MathJaxNode>
		[key: string]: any
	}

	export const mathjax: MathJaxStatic
}
