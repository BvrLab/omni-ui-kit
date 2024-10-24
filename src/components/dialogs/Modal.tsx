import { Description, Dialog, Transition } from '@headlessui/react'
import { ComponentPropsWithoutRef, Fragment, ReactNode } from 'react'
import Button from '@/components/buttons/Button'
import EaseInAndOutTransitionChild from '@/components/transitions/EaseInAndOutTransitionChild'
import { clsx } from 'clsx'

type ModalProps = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    title: string
    description?: string
    icon?: ReactNode
    titlePlacement?: 'center' | 'left'
    children?: ReactNode
}

type ModalButtonGroupProps = {} & ComponentPropsWithoutRef<'div'>

const Modal = ({
    isOpen,
    setIsOpen,
    title,
    description,
    icon,
    children,
    titlePlacement = 'left',
}: ModalProps) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                <EaseInAndOutTransitionChild>
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </EaseInAndOutTransitionChild>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <EaseInAndOutTransitionChild
                            enterFrom="translate-y-5 md:translate-y-10 sm:scale-95"
                            enterTo="translate-y-0 sm:scale-100"
                            leaveFrom="translate-y-0 sm:scale-100"
                            leaveTo="translate-y-10 sm:translate-y-4 sm:scale-95"
                        >
                            <Dialog.Panel
                                className={clsx(
                                    'relative transform overflow-hidden rounded-lg bg-white p-4 text-left shadow-xl transition-all',
                                    'sm:my-8 sm:w-full sm:max-w-sm sm:p-6'
                                )}
                            >
                                <>
                                    {icon && (
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            {icon}
                                        </div>
                                    )}
                                    <div
                                        className={clsx(
                                            {
                                                'text-center':
                                                    titlePlacement === 'center',
                                            },
                                            {
                                                'text-left':
                                                    titlePlacement === 'left',
                                            },
                                            {
                                                'mt-3 sm:mt-5': icon,
                                            }
                                        )}
                                    >
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            {title}
                                        </Dialog.Title>

                                        <Description
                                            className={
                                                'mt-2 text-left text-sm text-gray-500'
                                            }
                                        >
                                            {description}
                                        </Description>
                                    </div>
                                </>

                                {children}
                            </Dialog.Panel>
                        </EaseInAndOutTransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export const ModalButtonGroup = ({
    children,
    className,
}: ModalButtonGroupProps) => {
    return (
        <div
            className={clsx(
                'mt-5 flex flex-col gap-3',
                'sm:mt-6 sm:flex-row-reverse',
                className
            )}
        >
            {children}
        </div>
    )
}

export default Modal
