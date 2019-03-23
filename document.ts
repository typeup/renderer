import * as dom from "@typeup/dom"
import { Renderer, addRenderer } from "./Renderer"
async function render(renderer: Renderer, document: dom.Document): Promise<string> {
	return (
`<html>
	<head>
		<meta charset="UTF-8" />
		<title>${ renderer.getVariable("title") }</title>
		<meta name="author" content=${ renderer.getVariable("author") } />
		<meta name="date" content=${ renderer.getVariable("date") || new Date().toLocaleDateString() } />
		<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/styles/default.min.css" />
		<script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight.min.js"></script>
		<script>hljs.initHighlightingOnLoad();</script>
		<link rel="stylesheet" type="text/css" href=${ renderer.getVariable("class") + ".css" } />
	</head>
	<body>
		<header><h1>${ renderer.getVariable("title") }</h1></header>
		${ await renderer.render(document.content) }
	</body>
</html>
`)
}
addRenderer("Document", render)
