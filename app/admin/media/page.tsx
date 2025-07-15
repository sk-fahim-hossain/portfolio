"use client";
import { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import ClipboardPopup from "@/components/ClipboardPopup";

export default function MediaPage() {

    const [images, setImages] = useState([]);
    const [copiedUrl, setCopiedUrl] = useState("");
    const [isLoading, setIsloading] = useState(true);
    const [componentKey, setComponentKey] = useState(0);
    
    
    
      useEffect(() => {
        const handleKeyUp = (e) => {
          setComponentKey(prev => prev + 1)
        };
        window.addEventListener("keyup", handleKeyUp);
        return () => {
          window.removeEventListener("keyup", handleKeyUp);
        };
      }, []);

    useEffect(() => {
        // Replace with an actual API to fetch images
        const fetchImages = async () => {
            const response = await fetch("http://localhost:4000/api/images");
            const data = await response.json();
            const { imageUrls } = data;
            if (imageUrls) {
                setImages(imageUrls);
                setIsloading(false)
            }

        };
        fetchImages();
    }, []);

    const handleCopyClick = (url: string) => {
        navigator.clipboard.writeText(url);
        setCopiedUrl(url);
        setTimeout(() => {
            setCopiedUrl(""); // Clear the copied URL message after 2 seconds
        }, 2000);
    };

    const extractPublicId = (url: any) => {
        return url.split('/').slice(-1)[0].split('.')[0];
    };
    const handleDelete = async (image: any) => {
        if (!image) return;

        const publicId = extractPublicId(image);

        const confirmed = window.confirm("Are you sure you want to delete this image?");
        if (!confirmed) return;

        try {
            const response = await fetch("http://localhost:4000/api/delete-image", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ publicId }),
            });

            console.log(response)
            const data = await response.json();
            if (response.ok) {
                alert("Image deleted successfully!");
                // Optionally refresh the table data
                const restImage = images.filter(img => img !== image)
                setImages(restImage)
            } else {
                alert("Error deleting image: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to delete the image.");
        }
    };



    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar />

            <div className="flex-1 p-8 overflow-auto">
                <div className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                        Media Management
                    </h1>
                </div>
                <div className="min-h-screen  p-8">
                    <div className="flex justify-between"><h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
                        <h1 className="text-3xl font-bold  mb-8 "> <i>{images?.length? images.length:0} Images</i></h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {isLoading ? <p className="text-3xl">Loading..</p> : ""}
                        {images ? images?.map((image: any) => 
                        
                        
                        (
                            <div key={image.id} className="relative group">
                                {/* Image Card */}
                                <div className="relative aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={image}
                                        alt={image}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Floating Copy Icon */}
                                    <button
                                        onClick={() => handleCopyClick(image)}
                                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
                                    >
                                        <i className="fas fa-copy text-lg text-gray-700"></i>
                                    </button>

                                    {/* delete images */}
                                    <button
                                        onClick={() => handleDelete(image)}
                                        className="absolute top-2 right-10 p-2 bg-red-500 rounded-full shadow-lg hover:bg-gray-100 transition"
                                    >
                                        <i className="fas fa-trash text-lg text-gray-700"></i>
                                    </button>

                                    {/* Show Image URL on Hover */}
                                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        {image}
                                    </div>
                                </div>

                                {/* Confirmation of copied URL */}
                                {copiedUrl === image && (
                                    <div className="mt-2 text-green-500 text-xs text-center">
                                        Copied: {image}
                                    </div>
                                )}
                            </div>
                        ))
                            : <p>Something went wrong</p>
                        }
                    </div>
                </div>


 <ClipboardPopup startKey={componentKey} />
            </div>
        </div>
    );
}


