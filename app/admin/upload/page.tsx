"use client"
import { Sidebar } from "@/components/Sidebar";


export default function UploadPage() {
    
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar />

            <div className="flex-1 p-8 overflow-auto ">
                <div className="mb-8 flex justify-between items-center ">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
                        Upload Media
                    </h1>
                </div>

              


            </div>
            
        </div>
    );
}


