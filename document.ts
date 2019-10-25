import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "./Renderer"
async function render(renderer: Renderer, document: dom.Document): Promise<string> {
	const content = await renderer.render(document.content)
	return (
`<!doctype html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>${ renderer.getVariable("title") }</title>
		<meta name="author" content="${ renderer.getVariable("author") }" />
		<meta name="date" content="${ renderer.getVariable("date") || new Date().toLocaleDateString() }" />
		<meta name='identification' content="${ renderer.getVariable("identification") }"/>
		<meta name='classification' content="${ renderer.getVariable("classification")}"/>
		<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/styles/default.min.css" />
		<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight.min.js"></script>
		<script>hljs.initHighlightingOnLoad();</script>
		<script defer src="https://unpkg.com/mermaid@8.4.0/dist/mermaid.min.js" />
		<script defer>var config = { startOnLoad: true, flowchart: { htmlLabels: false }, sequence: { mirrorActors: false } }; mermaid.initialize(config); </script>		<link rel="stylesheet" type="text/css" href="${ renderer.getVariable("template") + "/" + renderer.getVariable("class") + ".css" }" />
	</head>
	<body>
		<header><h1>${ renderer.getVariable("title") }</h1></header>
		${ content }
	</body>
</html>
`)
}
addRenderer("Document", render)
