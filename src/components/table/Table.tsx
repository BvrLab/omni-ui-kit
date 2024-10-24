import React from 'react'
import { clsx } from 'clsx'

export type ColumnProps = {
    heading: string
    key: string
    className?: string
    render?: (cellData: any, rowData?: any) => React.ReactNode
}

type TableProps = {
    columns: ColumnProps[]
    data: Record<string, any>[]
    onRowClick?: (cellData: any, rowData?: any) => void
}

const Table = ({ data, columns, onRowClick }: TableProps) => {
    const tableHeading = columns.map((column, index) => (
        <th
            key={column.heading}
            scope="col"
            className={clsx(
                'px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
            )}
        >
            {column.heading}
        </th>
    ))

    const tableBody = data.map((rowData) => (
        <tr
            key={rowData.email}
            className={clsx({
                'pointer-events-none': !onRowClick,
                'hover:bg-gray-50': onRowClick,
                'hover:cursor-pointer': onRowClick,
            })}
        >
            {columns.map((column, index) => (
                <td
                    onClick={() =>
                        onRowClick && onRowClick(rowData[column.key], rowData)
                    }
                    key={column.key}
                    className={clsx(
                        'whitespace-nowrap px-3 py-4',
                        {
                            'text-sm text-gray-500': !column.className,
                        },
                        column.className
                    )}
                >
                    {column.render
                        ? column.render(rowData[column.key], rowData)
                        : rowData[column.key]}
                </td>
            ))}
        </tr>
    ))

    return (
        <div className="mt-8 flow-root">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>{tableHeading}</tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
