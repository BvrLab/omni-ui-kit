import React from 'react'

export interface SelectOption {
    id: string
    name: string
    value: string
    avatar?: React.ReactNode
}

export interface RadioGroupOption {
    id: string
    name: string
    description?: string
    value: string
}

export interface CheckboxGroupOption {
    id: string
    name: string
    description?: string
    value: string
    isSelected: boolean
}

export interface BreadCrumbOption {
    name: string
    href: string
    current?: boolean
}
export interface TabListOption {
    name: string
    icon?: React.ElementType
    current?: boolean
}
