"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "@/components/SIdebar";
import ClipboardPopup from "@/components/ClipboardPopup";


export default function UploadPage() {
    const [images, setImages] = useState([]);
    const [uploadingImages, setUploadingImages] = useState([]);
    const [clipboardItems, setClipboardItems] = useState<string[]>([]);


    const handleUpload = async (event) => {
        const files = Array.from(event.target.files);
        if (!files.length) return;

        const newUploads = files.map(file => ({ file, preview: URL.createObjectURL(file), link: null }));
        setUploadingImages(prev => [...prev, ...newUploads]);

        const formData = new FormData();
        files.forEach(file => formData.append("images", file));

        try {
            const response = await axios.post("http://localhost:4000/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            setUploadingImages(prev => prev.map((img, index) => ({ ...img, link: response.data.imageUrls[index] })));
        } catch (error) {
            console.error("Upload failed", error);
        }
    };


        const handleCopyEvent = (event: ClipboardEvent) => {
          const selection = document.getSelection()?.toString();
          const elements = document.querySelectorAll(".cloudinaryLink");
          
          if (selection || elements) {
            console.log("User copied:", selection);
          } else {
            // Modify clipboard data when nothing is selected
            event.preventDefault();
            const clipboardData = event.clipboardData || window.clipboardData;
            const customText = "Custom text copied instead!";
            clipboardData?.setData("text/plain", customText);
            console.log("Modified clipboard data:", customText);
          }
        };
      
        


    const handleCopy = async () => {
        try {
          // Get all elements with class "cloudinaryLink"
          const elements = document.querySelectorAll(".cloudinaryLink");
      
          if (!elements.length) {
            console.warn("No elements with class 'cloudinaryLink' found!");
            return;
          }
      
          // Extract text content from all elements
          const links = Array.from(elements).map((el) => el.textContent?.trim() || "").filter(Boolean);
      
          if (links.length === 0) {
            console.warn("No valid text found to copy!");
            return;
          }
      
          // Join links into a single string (newline-separated)
          const textToCopy = links.join("\n");
      
          // Copy to clipboard
          await navigator.clipboard.writeText(textToCopy);
          console.log("Copied to clipboard:", textToCopy);
          
          // Optionally show a confirmation
          alert("Copied links:\n" + textToCopy);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      };
      
      
      

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar activePage="projects" />

            <div className="flex-1 p-8 overflow-auto ">
                <div className="mb-8 flex justify-between items-center ">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                        Upload Media
                    </h1>
                </div>



                <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
                   <div className="bg-stone-600 rounded-md "> <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleUpload}
                        className="mb-4 block w-full py-4 px-3  rounded"
                    />
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {uploadingImages.map((img, index) => (
                            <div key={index} className="relative flex items-center gap-2">
                                <img src={img} alt="Uploading" className="w-32 h-32 object-cover rounded" />
                                {img ? (
                                    <div className="flex flex-row gap-3 items-center ">
                                        <p className="text-xs break-all cloudinaryLink">{img}</p>
                                        <button
                                            onClick={() => handleCopyEvent()}
                                            className="bg-gray-700 text-white px-2 py-1 rounded text-xs mt-1"
                                        >
                                            Copy
                                        </button>
                                    </div>
                                ) : (
                                    <div className="text-blue-500 text-sm">Uploading...</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>



            </div>
            
        </div>
    );
}


