declare module "@mathjax/src/js/mathjax" {
	interface DocumentOptions {
		InputJax?: any
		OutputJax?: any
		[key: string]: any
	}

	interface MathDocument {
		render(): void
		document: any
		[key: string]: any
	}

	export const mathjax: {
		document(content: string, options: DocumentOptions): MathDocument
		[key: string]: any
	}
}

declare module "@mathjax/src/js/input/tex" {
	interface TeXOptions {
		packages?: string[]
		inlineMath?: [string, string][]
		[key: string]: any
	}

	export class TeX {
		constructor(options?: TeXOptions)
		[key: string]: any
	}
}

declare module "@mathjax/src/js/output/chtml" {
	interface CHtmlOptions {
		fontURL?: string
		[key: string]: any
	}

	export class CHTML {
		constructor(options?: CHtmlOptions)
		[key: string]: any
	}
}

declare module "@mathjax/src/js/adaptors/liteAdaptor" {
	interface LiteAdaptor {
		outerHTML(element: any): string
		root(document: any): any
		[key: string]: any
	}

	export function liteAdaptor(): LiteAdaptor
}

declare module "@mathjax/src/js/handlers/html" {
	export function RegisterHTMLHandler(adaptor: any): void
}

declare module "@mathjax/src/js/input/tex/AllPackages" {
	export const AllPackages: string[]
}
