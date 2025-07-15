"use client";
import { useEffect, useState } from "react";

export default function ClipboardPopup(startKey) {
    const [clipboardItems, setClipboardItems] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    // Load clipboard data from localStorage on component mount
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("clipboardItems"));
        if(savedItems){
            setClipboardItems(savedItems);
        }else{
            setClipboardItems([])
        }
    }, [startKey]);

    
    // Listen for clipboard changes and store the copied text
    useEffect(() => {
        const handleCopy = async () => {
            try {
                const text = await navigator.clipboard.readText();
                const trimmedText = text.trim();
    
                if (trimmedText) {
                    setClipboardItems((prev) => {
                        // Prevent duplicates
                        const alreadyExists = prev.some(item => item.text === trimmedText);
                        if (alreadyExists) return prev;
    
                        const newItem = {
                            id: prev.length + 1,
                            text: trimmedText,
                        };
    
                        const updatedItems = [newItem, ...prev];
                        localStorage.setItem("clipboardItems", JSON.stringify(updatedItems));
                        return updatedItems;
                    });
                }
            } catch (error) {
                console.error("Clipboard read failed:", error);
            }
        };
    
        document.addEventListener("copy", handleCopy);
        return () => {
            document.removeEventListener("copy", handleCopy);
        };
    }, []); // 👈 Empty dependency array to avoid re-runs
    
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
    console.log() 

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
        <div className="fixed bottom-4 right-4 max-h-[50vh] w-80 space-y-3 z-50 overflow-y-auto">
            {clipboardItems.length === 0 && (
                <>
                   
                </>
            )}
            {clipboardItems.map((item, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-3 flex flex-col justify-between items-center border dark:bg-cyan-900"
                >
                    {/* Check if the text is an image URL */}
                    {isValidImageUrl(item.text) ? (
                        <>
                            <div className="w-[50px]">
                                <img
                                    src={item.text}
                                    alt="Copied Image"
                                    className="w-full object-cover mb-2"
                                />
                            </div>
                            <p className="w-full text-sm text-gray-900 dark:text-gray-200 break-words mb-2">
                                {item.text}
                            </p>
                        </>
                    ) : (
                        <p className="w-full text-sm text-gray-900 dark:text-gray-200 break-words mb-2">
                            {item.text}
                        </p>
                    )}

                    <div className="inline-flex ml-auto">
                        <button
                            onClick={() => handleCopyClick(item.text, index)}
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
