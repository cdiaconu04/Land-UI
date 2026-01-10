"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { backdropMap } from "./constants/constants";

type DialogProps = {
    trigger: (open: () => void) => React.ReactNode;
    backdrop?: keyof typeof backdropMap;
    children: (close: () => void) => React.ReactNode;
    defaultOpen?: boolean;
};

export default function Dialog({
    trigger,
    backdrop = 1,
    children,
}: DialogProps) {
    const [open, setOpen] = useState(false);
    const id = useId();
    const contentRef = useRef<HTMLDivElement | null>(null);

    const openDialog = () => setOpen(true);
    const closeDialog = () => setOpen(false);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeDialog();
        };

        document.addEventListener("keydown", onKeyDown);

        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    useEffect(() => {
        if (open) contentRef.current?.focus();
    }, [open]);

    return (
        <div>
            {trigger(openDialog)}

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`${id}-dialog`}
                >
                    <div className={`absolute inset-0 ${backdropMap[backdrop]}`} onMouseDown={closeDialog} />

                    <div
                        id={`${id}-dialog`}
                        ref={contentRef}
                        tabIndex={-1}
                        className={`relative z-10 w-full max-w-lg outline-none`}
                    >
                        {children(closeDialog)}
                    </div>
                </div>
            )}
        </div>
    );
}
