import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/16/solid'
import { BreadCrumbOption } from '@/types'
import Link from 'next/link'

type BreadCrumbProps = {
    crumbs: BreadCrumbOption[]
    homeIcon?: React.ElementType
}
const BreadCrumb = ({ crumbs, ...props }: BreadCrumbProps) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
                <li>
                    <Link
                        href="#"
                        className="text-gray-400 hover:text-gray-500"
                    >
                        {props.homeIcon ? (
                            <props.homeIcon
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                        ) : (
                            <HomeIcon
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                        )}

                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {crumbs.map((crumb) => (
                    <li key={crumb.name}>
                        <div className="flex items-center">
                            <ChevronRightIcon
                                className="h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                            />
                            <Link
                                href={crumb.href}
                                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                aria-current={
                                    crumb.current ? 'page' : undefined
                                }
                            >
                                {crumb.name}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default BreadCrumb
