declare module "mathjax-node" {
	function config(configuration: any): void
	function start(): void
	function typeset(options: {
		math: string,
		format: "TeX" | "inline-TeX" | "MathML"
		html?: boolean
		htmlNode?: boolean
		mml?: boolean
		mmlNode?: boolean
		svg?: boolean
		svgNode?: boolean
	}): Promise<{
		errors?: any[]
		mml?: string
		mmlNode?: HTMLElement
		html?: string
		htmlNode?: HTMLElement
		svg?: string
		svgNode?: HTMLElement
		style?: string
		height?: string
		width?: string
		speakText?: string
	}>
}
