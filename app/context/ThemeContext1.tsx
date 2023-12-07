"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext<any>({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState("light");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={mode === "light" ? `` : `dark`}>
                <div className=' bg-white text-[#111] dark:bg-[#111] dark:text-[#bbb] transition-all ease duration-1000'>
                    {children}
                </div>
            </div>
        </ThemeContext.Provider>
    );
};