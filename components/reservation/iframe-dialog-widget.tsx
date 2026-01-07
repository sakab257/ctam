"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

interface IframeDialogWidgetProps {
    src: string
    title: string
}

export const IframeDialogWidget = ({ src, title }: IframeDialogWidgetProps) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="w-full h-[60vh] min-h-80 bg-white overflow-hidden relative">
            {/* Loading state */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <Loader2 className="h-8 w-8 text-primary animate-spin mb-3" />
                    <p className="text-gray-600 text-sm">Chargement...</p>
                </div>
            )}
            <iframe
                src={src}
                className="w-full h-full border-0"
                title={title}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}
