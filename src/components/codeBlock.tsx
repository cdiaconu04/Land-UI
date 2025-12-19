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
        <div className="">
            <div
                className="rounded-lg border border-gray-200 text-sm [&_.shiki]:p-4 [&_.shiki]:overflow-x-auto overflow-hidden"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}
