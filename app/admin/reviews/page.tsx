"use client"

export default function SkillPage() {


  const columns = [
    { header: 'Id', key: 'id' },
    { header: 'User Name', key: 'userName' },
    { header: 'Reviewer Image', key: 'userImg' },
    { header: 'Description', key: 'description' },
    { header: 'Rating', key: 'rating' }
  ];

  const formFields = [
    { name: 'id', label: 'Id', type: 'text' },
    { name: 'userName', label: 'User Name', type: 'text' },
    { name: 'userImg', label: 'Reviewer Image', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'rating', label: 'Rating (out of 5)', type: 'text' },
  ];



  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 p-8 overflow-auto">
      </div>
    </div>
  )
}


