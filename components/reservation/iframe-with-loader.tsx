"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface IframeWithLoaderProps {
    src: string
    title: string
    className?: string
}

export const IframeWithLoader = ({ src, title, className = "" }: IframeWithLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="relative w-full h-full">
            {/* Loading state */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                    <p className="text-gray-600 font-medium">Chargement du planning...</p>
                </div>
            )}
            <iframe
                src={src}
                className={className}
                title={title}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}
