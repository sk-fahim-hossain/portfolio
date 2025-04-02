import { useEffect, useState } from "react";

export function FormModal({ 
    isOpen = false, 
    onClose = () => {}, 
    onSubmit = async () => {}, 
    title = '', 
    fields = [], 
    initialValues = {}, 
    isLoading = false,
    successMessage = '',
    errorMessage = ''
}) {
    const [formData, setFormData] = useState(initialValues);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        if (successMessage) {
            setMessage({ type: 'success', text: successMessage });
        } else if (errorMessage) {
            setMessage({ type: 'error', text: errorMessage });
        }
    }, [successMessage, errorMessage]);

    useEffect(() => {
        // Update formData when editingProject changes
        setFormData(initialValues);
    }, [initialValues]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white font-inter">
                            {title}
                        </h2>
                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    {message.text && (
                        <div className={`mb-4 p-3 rounded ${
                          message.type === 'success' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100' 
                            : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
                        }`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {fields.map((field) => (
                                <div key={field.name}>
                                    <label 
                                        htmlFor={field.name}
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 font-inter"
                                    >
                                        {field.label}
                                    </label>
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ''}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                            rows={4}
                                        />
                                    ) : field.type === 'select' ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ''}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                        >
                                            <option value="">Select {field.label}</option>
                                            {field.options?.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type || 'text'}
                                            id={field.name}
                                            name={field.name}
                                            value={formData[field.name] || ''}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-inter"
                                disabled={isLoading}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-inter disabled:opacity-50"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <><i className="fas fa-spinner fa-spin mr-2"></i>Saving...</>
                                ) : 'Save'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
