"use client"
import { ThemeProvider } from "next-themes";
import React from "react";

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
    )
}