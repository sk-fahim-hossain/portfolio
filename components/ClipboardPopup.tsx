"use client";
import { useEffect, useState } from "react";

export default function ClipboardPopup() {
    const [clipboardItems, setClipboardItems] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    // Load clipboard data from localStorage on component mount
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("clipboardItems") || "[]");
        setClipboardItems(savedItems);
    }, []);

    // Update localStorage when clipboardItems change
    useEffect(() => {
        localStorage.setItem("clipboardItems", JSON.stringify(clipboardItems));
    }, [clipboardItems]);

    // Listen for clipboard changes and store the copied text
    useEffect(() => {
        const handleCopy = async () => {
            try {
                const text = await navigator.clipboard.readText();
                if (text && !clipboardItems.includes(text.trim())) {
                    setClipboardItems((prev) => {
                        const updatedItems = [text.trim(), ...prev];
                        localStorage.setItem("clipboardItems", JSON.stringify(updatedItems));
                        return updatedItems;
                    });
                }
            } catch (error) {
                console.error("Clipboard read failed:", error);
            }
        };

        document.addEventListener("copy", handleCopy);
        return () => document.removeEventListener("copy", handleCopy);
    }, [clipboardItems]);

    // Handle clicking copy button
    const handleCopyClick = async (text: string, index: number) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 1500);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    // Handle deleting a clipboard item
    const handleDelete = (index: number) => {
        const updatedItems = clipboardItems.filter((_, i) => i !== index);
        setClipboardItems(updatedItems);
        localStorage.setItem("clipboardItems", JSON.stringify(updatedItems));
    };

    const isValidImageUrl = (url) => {
        return /\.(jpeg|jpg|gif|png|webp|svg)$/.test(url);
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 space-y-3 z-50 overflow-y-auto">
            {clipboardItems.length === 0 && (
                <div className="text-center text-gray-400 bg-white shadow-md rounded-lg p-3">
                    Nothing copied yet
                </div>
            )}
            {clipboardItems.map((text, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-3 flex flex-col justify-between items-center border dark:bg-cyan-900"
                >
                    {/* Check if the text is an image URL */}
                    {isValidImageUrl(text) ? (
                        <>
                            <div className="w-[50px]">
                                <img
                                    src={text}
                                    alt="Copied Image"
                                    className="w-full object-cover mb-2"
                                />
                            </div>
                            <p className="w-full text-sm text-gray-900 dark:text-gray-200 break-words mb-2">
                                {text}
                            </p>
                        </>
                    ) : (
                        <p className="w-full text-sm text-gray-900 dark:text-gray-200 break-words mb-2">
                            {text}
                        </p>
                    )}

                    <div className="inline-flex ml-auto">
                        <button
                            onClick={() => handleCopyClick(text, index)}
                            className={`px-2 py-1 rounded-md transition ${copiedIndex === index
                                ? "bg-green-500 text-white text-[10px]"
                                : "bg-gray-200 text-gray-700 text-[10px] hover:bg-gray-300"
                                }`}
                        >
                            {copiedIndex === index ? "Copied!" : "Copy"}
                        </button>
                        <button
                            onClick={() => handleDelete(index)}
                            className="ml-2 px-[5px] py-1 bg-red-500 text-white text-[10px] rounded-md hover:bg-red-600"
                        >
                            ✖
                        </button>
                    </div>
                </div>
            ))}
        </div>


    );
}
