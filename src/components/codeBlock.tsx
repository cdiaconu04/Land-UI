"use client";

import React, { useEffect, useMemo, useState } from "react";
import { createHighlighter } from "shiki/bundle/web";

const highlighterPromise = createHighlighter({
    themes: ["github-dark"],
    langs: ["tsx"],
});

type CodeBlockProps = {
    code: string;
    lang?: string;
};

export default function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
    const [html, setHtml] = useState("");

    const key = useMemo(() => `${lang}::${code}`, [lang, code]);

    useEffect(() => {
        let cancelled = false;

        (async () => {
            const highlighter = await highlighterPromise;

            const safeLang = highlighter.getLoadedLanguages().includes(lang as any) ? lang : "tsx";

            const out = highlighter.codeToHtml(code, {
                lang: safeLang,
                theme: "github-dark",
            });

            if (!cancelled) setHtml(out);
        })();

        return () => {
            cancelled = true;
        };
    }, [key]);

    return (
        <div className="w-full min-w-0">
            <div
                className="
                    w-full max-w-full min-w-0
                    rounded-lg border border-gray-200 overflow-hidden
                    bg-[#0d1117]   /* github-dark background */
                "
            >
            <div
                className="
                    w-full max-w-full
                    overflow-x-auto
                    text-sm
                    [&_.shiki]:!bg-transparent
                    [&_.shiki]:!m-0
                    [&_.shiki]:!p-0
                    [&_.shiki]:w-full
                    [&_.shiki_code]:block
                    p-4
                "
                dangerouslySetInnerHTML={{ __html: html || `<pre class="shiki"><code></code></pre>` }}
            />
            </div>
        </div>
    );
}


