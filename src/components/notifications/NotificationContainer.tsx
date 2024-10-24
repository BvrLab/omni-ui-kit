import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

type NotificationProps = {
    show: boolean
    children?: React.ReactNode
}

const NotificationContainer = ({ show, children }: NotificationProps) => {
    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* NotificationContainer panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-0 opacity-0 sm:translate-y-0 sm:translate-x-20"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transform duration-200 transition ease-in duration-100"
                        leaveFrom="opacity-100 sm:translate-x-0"
                        leaveTo="opacity-0 sm:translate-x-20"
                    >
                        <div
                            className={clsx(
                                'pointer-events-auto',
                                'min-h-6 w-full max-w-sm overflow-hidden',
                                'rounded-lg bg-white shadow-lg',
                                'ring-1 ring-black ring-opacity-5'
                            )}
                        >
                            {children}
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}

type NotificationContentProps = {
    children?: React.ReactNode
}

export const NotificationContent = ({ children }: NotificationContentProps) => {
    return <div className="p-4">{children}</div>
}

export default NotificationContainer
