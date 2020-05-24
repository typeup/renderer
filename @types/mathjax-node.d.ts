declare module "mathjax-node" {
	function config(configuration: any): void
	function start(): void
	function typeset(options: {
		math: string,
		format: "TeX" | "inline-TeX" | "MathML"
		mml: true
	}): Promise<{
		errors?: any[],
		mml?: string
	}>
}
