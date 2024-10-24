import React, { Fragment } from 'react'
import { Transition } from '@headlessui/react'

type EaseInAndOutProps = {
    enterFrom?: string
    enterTo?: string
    leaveFrom?: string
    leaveTo?: string
} & React.ComponentPropsWithoutRef<'div'>

const EaseInAndOutTransitionChild = ({
    children,
    enterFrom,
    enterTo,
    leaveFrom,
    leaveTo,
}: EaseInAndOutProps) => {
    return (
        <Transition.Child
            as={Fragment}
            enter={`ease-out duration-300`}
            enterFrom={`opacity-0 ${enterFrom}`}
            enterTo={`opacity-100 ${enterTo}`}
            leave={`ease-in duration-200`}
            leaveFrom={`opacity-100 ${leaveFrom}`}
            leaveTo={`opacity-0 ${leaveTo}`}
        >
            {children}
        </Transition.Child>
    )
}

export default EaseInAndOutTransitionChild
