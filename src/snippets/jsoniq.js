define('ace/snippets/jsoniq', ['require', 'exports', 'module' ], function(require, exports, module) {


exports.snippetText = "snippet for\n\
guard ^(?!.*(\\$|\\/))\n\
	for $${1:item} in ${2:expr}\n\
\n\
snippet return\n\
guard ^(?!.*(\\$|\\/))\n\
	return ${1:expr}\n\
\n\
snippet import\n\
guard ^\n\
	import module namespace ${1:ns} = \"${2}\";\n\
\n\
snippet some\n\
guard ^(?!.*(\\$|\\/))\n\
	some $${1:varname} in ${2:expr} satisfies ${3:expr}\n\
\n\
snippet every\n\
guard ^(?!.*(\\$|\\/))\n\
	every $${1:varname} in ${2:expr} satisfies ${3:expr}\n\
\n\
snippet if\n\
guard ^(?!.*(\\$|\\/))\n\
	if(${1:true}) then ${2:expr} else ${3:true}\n\
\n\
snippet switch\n\
guard ^(?!.*(\\$|\\/))\n\
	switch(${1:\"foo\"})\n\
	case ${2:\"foo\"}\n\
	return ${3:true}\n\
	default return ${4:false}\n\
\n\
snippet try\n\
guard ^(?!.*(\\$|\\/))\n\
	try { ${1:expr} } catch ${2:*} { ${3:expr} }\n\
\n\
snippet tumbling\n\
guard ^(?!.*(\\$|\\/))\n\
	for tumbling window $${1:varname} in ${2:expr}\n\
	start at $${3:start} when ${4:expr}\n\
	end at $${5:end} when ${6:expr}\n\
	return ${7:expr}\n\
\n\
snippet sliding\n\
guard ^(?!.*(\\$|\\/))\n\
	for sliding window $${1:varname} in ${2:expr}\n\
	start at $${3:start} when ${4:expr}\n\
	end at $${5:end} when ${6:expr}\n\
	return ${7:expr}\n\
\n\
snippet let\n\
guard ^(?!.*(\\$|\\/))\n\
	let $${1:varname} := ${2:expr}\n\
\n\
snippet group\n\
guard ^(?!.*(\\$|\\/))\n\
	group by $${1:varname} := ${2:expr}\n\
\n\
snippet order\n\
guard ^(?!.*(\\$|\\/))\n\
	order by ${1:expr} ${2:descending}\n\
\n\
snippet stable\n\
guard ^(?!.*(\\$|\\/))\n\
	stable order by ${1:expr}\n\
\n\
snippet count\n\
guard ^(?!.*(\\$|\\/))\n\
	count $${1:varname}\n\
\n\
snippet ordered\n\
guard ^(?!.*(\\$|\\/))\n\
	ordered { ${1:expr} }\n\
\n\
snippet unordered\n\
	unordered { ${1:expr} }\n\
guard ^(?!.*(\\$|\\/))\n\
\n\
snippet treat\n\
guard ^(?!.*(\\$|\\/))\n\
	treat as ${1:expr}\n\
\n\
snippet castable\n\
guard ^(?!.*(\\$|\\/))\n\
	castable as ${1:atomicType}\n\
\n\
snippet cast\n\
guard ^(?!.*(\\$|\\/))\n\
	cast as ${1:atomicType}\n\
\n\
snippet typeswitch\n\
guard ^(?!.*(\\$|\\/))\n\
	typeswitch(${1:expr})\n\
	case ${2:type}  return ${3:expr}\n\
	default return ${4:expr}\n\
\n\
snippet var\n\
guard ^(?!.*(\\$|\\/))\n\
	declare variable $${1:varname} := ${2:expr};\n\
\n\
snippet fun\n\
guard ^(?!.*(\\$|\\/))\n\
	declare function ${1:ns}:${2:name}(${3:arguments}){\n\
	${4:expr}\n\
	};\n\
	$0\n\
snippet module\n\
guard ^\n\
	module namespace ${1:ns} = \"${2:http://www.example.com}\";\n\
";
exports.scope = "jsoniq";

});
