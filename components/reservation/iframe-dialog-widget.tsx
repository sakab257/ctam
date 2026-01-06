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
        <div className="w-full min-h-125 bg-white rounded-lg overflow-hidden relative">
            {/* Loading state */}
            {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 mx-4">
                    <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                    <p className="text-gray-600 font-medium">Chargement du planning...</p>
                </div>
            )}
            <iframe
                src={src}
                className="w-full h-125 border-0"
                title={title}
                onLoad={() => setIsLoading(false)}
            />
        </div>
    )
}
