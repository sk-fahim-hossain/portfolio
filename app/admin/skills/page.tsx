"use client"
import { CrudTable } from "@/components/CrudTable";
import { FormModal } from "@/components/FormModal";
import { Sidebar } from "@/components/SIdebar";
import { useEffect, useState } from "react";

export default function SkillPage() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
  
    const columns = [
      { header: 'Title', key: 'title' },
      { header: 'Description', key: 'description' },
      { header: 'Image', key: 'image_url' }
    ];
  
    const formFields = [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'image_url', label: 'Image URL', type: 'text' }
    ];
  
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/project-operations', {
          method: 'POST',
          body: JSON.stringify({ method: 'GET' })
        });
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load projects');
      } finally {
        setIsLoading(false);
      }
    };
  
    // useEffect(() => {
    //   fetchProjects();
    // }, []);
  
    const handleSubmit = async (formData) => {
      try {
        const method = editingProject ? 'PUT' : 'POST';
        const params = editingProject ? { id: editingProject.id } : {};
        
        const response = await fetch('/api/project-operations', {
          method: 'POST',
          body: JSON.stringify({ method, body: formData, params })
        });
  
        if (!response.ok) {
          throw new Error('Failed to save project');
        }
  
        await fetchProjects();
        setSuccessMessage(editingProject ? 'Project updated successfully!' : 'Project created successfully!');
        setTimeout(() => {
          setIsModalOpen(false);
          setEditingProject(null);
          setSuccessMessage('');
        }, 1000);
      } catch (err) {
        console.error(err);
        setError('Failed to save project');
      }
    };
  
    const handleDelete = async (project) => {
      if (!window.confirm('Are you sure you want to delete this project?')) return;
  
      try {
        const response = await fetch('/api/project-operations', {
          method: 'POST',
          body: JSON.stringify({
            method: 'DELETE',
            params: { id: project.id }
          })
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete project');
        }
  
        await fetchProjects();
      } catch (err) {
        console.error(err);
        setError('Failed to delete project');
      }
    };
  
    const handleEdit = (project) => {
      setEditingProject(project);
      setIsModalOpen(true);
    };
  
    const handleAddNew = () => {
      setEditingProject(null);
      setIsModalOpen(true);
    };
  
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar activePage="skills" />
        
        <div className="flex-1 p-8 overflow-auto">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-inter">
              Skills Management
            </h1>
            
            <button
              onClick={handleAddNew}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-inter"
            >
              <i className="fas fa-plus mr-2"></i>
              Add New Project
            </button>
          </div>
  
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
  
          <CrudTable
            columns={columns}
            data={projects}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isLoading={isLoading}
            emptyMessage="No projects found"
          />
  
          <FormModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingProject(null);
              setError(null);
              setSuccessMessage('');
            }}
            onSubmit={handleSubmit}
            title={editingProject ? 'Edit Project' : 'Add New Project'}
            fields={formFields}
            initialValues={editingProject || {}}
            successMessage={successMessage}
            errorMessage={error}
          />
        </div>
      </div>
    );
  }
  
  
  