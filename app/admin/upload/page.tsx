"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "@/components/Sidebar";
import ClipboardPopup from "@/components/ClipboardPopup";


export default function UploadPage() {
    const [images, setImages] = useState([]);
    const [uploadingImages, setUploadingImages] = useState([]);
    const [clipboardItems, setClipboardItems] = useState<string[]>([]);


    useEffect(() => {
        return () => {
            uploadingImages.forEach(img => URL.revokeObjectURL(img.preview));
        };
    }, [uploadingImages]);



    const handleUpload = async (event) => {
        const files = Array.from(event.target.files);
        console.log(files)
        if (!files.length){
            alert('a single image')
            return;
        };

        const newUploads = files.map(file => ({ file, preview: URL.createObjectURL(file), link: null }));
        setUploadingImages(prev => [...prev,newUploads]);

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


    
      


    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar />

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
                        {uploadingImages?.map((img, index) => (
                            <div key={index} className="relative flex items-center gap-2">
                                <img src={img?.link} alt="Uploading" className="w-32 h-32 object-cover rounded" />
                                {img ? (
                                    <div className="flex flex-row gap-3 items-center ">
                                        <p className="text-xs break-all cloudinaryLink">{img?.link}</p>
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


