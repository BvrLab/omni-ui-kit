import React, { useState } from 'react';
import { clsx } from 'clsx';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AccordionSize } from '@/components/constant';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    maxSize?: AccordionSize;
    isOpen?: boolean;
}


const sizeClasses = {
    xs: 'max-w-xs text-xs',
    sm: 'max-w-sm text-sm',
    md: 'max-w-md text-base',
    lg: 'max-w-lg text-lg',
    xl: 'max-w-xl text-xl',
    'full-xs': 'max-w-full text-xs',
    'full-sm': 'max-w-full text-sm',
    'full-md': 'max-w-full text-md',
    'full-lg': 'max-w-full text-lg',
    'full-xl': 'max-w-full text-xl',
}

const padingClasses = {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
    xl: 'p-5',
    'full-xs': 'p-2',
    'full-sm': 'p-3',
    'full-md': 'p-4',
    'full-lg': 'p-5',
    'full-xl': 'p-6',
}

const iconClasses = {
    xs: 'w-2 h-2',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    'full-xs': 'w-2 h-2',
    'full-sm': 'w-3 h-3',
    'full-md': 'w-4 h-4',
    'full-lg': 'w-5 h-5',
    'full-xl': 'w-6 h-6',
}


const Accordion = ({
    title = 'Accordion Title',
    children,
    isOpen = false,
    maxSize = 'full-md',
}: AccordionProps) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <div className={clsx(
                'border-y border-gray-300',
                sizeClasses[maxSize]
            )}
        >
            <div
                className={clsx(
                    'flex items-center justify-between', 
                    padingClasses[maxSize]
                )}
                onClick={toggleAccordion}
            >
                <h2 className="font-medium">
                    {title}
                </h2>
                <ChevronDownIcon className={clsx(isAccordionOpen && 'rotate-180', iconClasses[maxSize])} />
            </div>
            
            {isAccordionOpen && (
                <div className={clsx(padingClasses[maxSize])}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
