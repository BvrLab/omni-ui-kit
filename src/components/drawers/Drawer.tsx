import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from '@/components/buttons/Button'
import Flexbox from '@/components/containers/flexbox/Flexbox'
import IconButton from '@/components/buttons/IconButton'

type DrawerProps = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    children?: React.ReactNode
    title?: string
    description?: string
}

const Drawer = ({
    isOpen,
    setIsOpen,
    children,
    title,
    description,
}: DrawerProps) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-300"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-300"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <Flexbox
                                        direction={'column'}
                                        className={
                                            'h-full overflow-y-scroll bg-white py-6 shadow-xl'
                                        }
                                    >
                                        <div className="px-4 sm:px-6">
                                            <Flexbox justifyContent={'between'}>
                                                <Dialog.Title className="text-lg font-semibold leading-6 text-gray-900">
                                                    {title}
                                                </Dialog.Title>
                                                <Flexbox
                                                    alignItems={'center'}
                                                    className={'h-7'}
                                                >
                                                    <IconButton
                                                        icon={XMarkIcon}
                                                        size="xl"
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                    ></IconButton>
                                                </Flexbox>
                                            </Flexbox>
                                        </div>
                                        {children}
                                    </Flexbox>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

type DrawerHeaderProps = {
    children?: React.ReactNode
}

export const DrawerContent = ({ children }: DrawerHeaderProps) => {
    return <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
}

export default Drawer
