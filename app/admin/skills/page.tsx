import { SideNav } from "@/components/SideNav";


export default function SkillPage() {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <SideNav />
        
        <div className="flex-1 p-8 overflow-auto">
          <h2>This is the skills table body part</h2>
        </div>
       
      </div>
    );
  }
  
  
  