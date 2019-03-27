import * as dom from "@typeup/dom"
export type renderFunction = (renderer: Renderer, node: dom.Node) => Promise<string>

export class Renderer {
	private constructor(private variables: { [name: string]: string } = {}) {
	}
	getVariable(name: string): string {
		return this.variables[name]
	}
	setVariable(name: string, value: string) {
		this.variables[name] = value
	}
	async render(node: dom.Node | dom.Node[]): Promise<string> {
		let result: string
		if (Array.isArray(node))
			result = (await Promise.all(node.map(n => this.render(n)))).reduce<string[]>((r, e) => Array.isArray(e) ? [...r, ...e] : [...r, e], []).join("")
		else {
			const render = renderers[node.class]
			result = render ? await render(this, node) : ""
		}
		return result
	}
	scope(): Renderer {
		return new Renderer({ ...this.variables })
	}
	static create(): Renderer {
		return new Renderer({})
	}
}
const renderers: { [className: string]: renderFunction } = {}
export function addRenderer(className: string, render: renderFunction) {
	renderers[className] = render
}
