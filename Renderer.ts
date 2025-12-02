import { dom } from "@typeup/dom"
import { math } from "./math"
export type RenderFunction<N extends dom.Node = dom.Node> = (renderer: Renderer, node: N) => Promise<string>

export class Renderer {
	private constructor(private variables: { [name: string]: string } = {}) {}
	get(name: string): string | undefined {
		return this.variables[name]
	}
	set(name: string, value: string) {
		this.variables[name] = value
	}
	async render(node: dom.Node | dom.Node[]): Promise<string> {
		let result: string
		if (Array.isArray(node))
			result = (await Promise.all(node.map(n => this.render(n))))
				.reduce<string[]>((r, e) => (Array.isArray(e) ? [...r, ...e] : [...r, e]), [])
				.join("")
		else {
			const render = renderers[node.class]
			result = render ? await render(this, node) : ""
			if (node.class == "Document")
				result = await math.typeset(result)
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
const renderers: { [className: string]: RenderFunction } = {}
export function register<N extends dom.Node = dom.Node>(className: string, render: RenderFunction<N>) {
	renderers[className] = render as RenderFunction
}
