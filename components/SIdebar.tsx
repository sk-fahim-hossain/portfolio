import Link from "next/link";
import { usePathname } from 'next/navigation';

export function Sidebar({ activePage }) {
    const pathname = usePathname();
    return (
        <nav className="h-screen w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 flex flex-col">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white font-inter">Admin Dashboard</h1>
            </div>

            <div className="flex flex-col space-y-2">
                <Link
                    href="/admin/projects"
                    className={`px-4 py-2 rounded-md font-inter text-sm transition-colors ${pathname.includes("projects")
                            ? 'bg-gray-900 text-white dark:bg-gray-700'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                >
                    <i className="fas fa-project-diagram mr-2"></i>
                    Projects
                </Link>

                <Link
                    href="/admin/reviews"
                    className={`px-4 py-2 rounded-md font-inter text-sm transition-colors ${pathname.includes("reviews")
                            ? 'bg-gray-900 text-white dark:bg-gray-700'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                >
                    <i className="fas fa-star mr-2"></i>
                    Reviews
                </Link>

                <Link
                    href="/admin/skills"
                    className={`px-4 py-2 rounded-md font-inter text-sm transition-colors ${pathname.includes("skills")
                            ? 'bg-gray-900 text-white dark:bg-gray-700'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                >
                    <i className="fas fa-code mr-2"></i>
                    Skills
                </Link>

                <Link
                    href="/admin/upload"
                    className={`px-4 py-2 rounded-md font-inter text-sm transition-colors ${pathname.includes("upload")
                            ? 'bg-gray-900 text-white dark:bg-gray-700'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                >

                    <i className="fa-solid fa-upload mr-2"></i>
                    Upload
                </Link>

                <Link
                    href="/admin/media"
                    className={`px-4 py-2 rounded-md font-inter text-sm transition-colors ${pathname.includes("media")
                            ? 'bg-gray-900 text-white dark:bg-gray-700'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                >

                    <i className="fa-solid fa-photo-film mr-2"></i>
                    Media
                </Link>
            </div>
        </nav>
    );
}