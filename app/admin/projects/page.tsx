import { SideNav } from "@/components/SideNav";




export default function ProjectPage() {

  // Table Columns
  const columns = [
    { header: "Id", key: "id" },
    { header: "Public", key: "public" },
    { header: "Title", key: "title" },
    { header: "Description", key: "des" },
    { header: "Image URL", key: "img" },
    { header: "Tech Icon URLs", key: "iconLists" },
    { header: "Project Link", key: "project-link" },
    { header: "Tech Stack", key: "tech-stack" },
  ];



  // Form Fields
  const formFields = [
    { name: "id", label: "Id", type: "text" },
    { name: "public", label: "Public", type: "text" },
    { name: "title", label: "Title", type: "text" },
    { name: "des", label: "Description", type: "textarea" },
    { name: "img", label: "Image URL", type: "text" },
    { name: "iconLists", label: "Tech Icon URLs (comma-separated)", type: "text" },
    { name: "project-link", label: "Project Link", type: "text" },
    { name: "tech-stack", label: "Tech Stack (comma-separated)", type: "text" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <SideNav />

      <div className="flex-1 p-4 overflow-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
            Projects Management
          </h1>

        </div>
        <div>
          all the projects will show here
        </div>
      </div>
    </div>
  );
}
