"use client";
import React from "react";

type InputProps = React.PropsWithChildren<{
    className?: string;
}>

export default function NavSection({ children }: InputProps) {
    return (
        <div className="flex flex-row justify-center items-center gap-6">
            {children}
        </div>
    )
}
