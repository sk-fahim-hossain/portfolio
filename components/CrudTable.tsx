export function CrudTable({ 
    columns = [],
    data = [],
    onEdit = () => { },
    onDelete = () => { },
    isLoading = false,
    emptyMessage = "No data available"
}) {
    return (
        <div className="w-full overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider font-inter"
                            >
                                {column.header}
                            </th>
                        ))}
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider font-inter">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {isLoading ? (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400 font-inter"
                            >
                                <div className="flex items-center justify-center">
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Loading...
                                </div>
                            </td>
                        </tr>
                    ) : data.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400 font-inter"
                            >
                                {emptyMessage}
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300 font-inter"
                                    >
                                        {column.key === 'img' || column.key === 'iconLists' ? (
                                            <div className="flex space-x-2">
                                                {(row[column.key] ? row[column.key].split(',') : []).map((imgSrc, index) => (
                                                    <img key={index} src={imgSrc.trim()} alt="Image" className="w-16 h-16 object-cover rounded" />
                                                ))}
                                            </div>
                                        ) : column.key === 'project-link' ? (
                                            <a href={row[column.key]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                {row[column.key]}
                                            </a>
                                        ) : column.key === 'tech-stack' ? (
                                            row[column.key].split(',').map((tech, index) => (
                                                <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded mr-1 text-xs">
                                                    {tech.trim()}
                                                </span>
                                            ))
                                        ) : (
                                            row[column.key]
                                        )}
                                    </td>
                                ))}
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => onEdit(row)}
                                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-200 mr-4"
                                    >
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                        onClick={() => onDelete(row)}
                                        className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200"
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
