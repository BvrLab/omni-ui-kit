import NotificationContainer, {
    NotificationContent,
} from '@/components/notifications/NotificationContainer'
import React from 'react'
import Flexbox from '@/components/containers/flexbox/Flexbox'
import IconButton from '@/components/buttons/IconButton'
import { clsx } from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/outline'

type BasicNotificationProps = {
    title: string
    description?: string
    show: boolean
    setShow: (show: boolean) => void
    icon?: React.ReactNode
    children?: React.ReactNode
}

const Notifications = ({
    title,
    description,
    show,
    setShow,
    icon,
    children,
}: BasicNotificationProps) => {
    return (
        <>
            <NotificationContainer show={show}>
                <NotificationContent>
                    <Flexbox alignItems={'start'}>
                        {icon && (
                            <div className="mt-1 flex-shrink-0">{icon}</div>
                        )}

                        <div
                            className={clsx(
                                { 'ml-3': !icon },
                                'w-0 flex-1 pt-0.5'
                            )}
                        >
                            <p className="text-sm font-medium text-gray-900">
                                {title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                {description}
                            </p>

                            {children}
                        </div>

                        <div className="ml-4 flex flex-shrink-0">
                            <IconButton
                                icon={XMarkIcon}
                                onClick={() => {
                                    setShow(false)
                                }}
                            ></IconButton>
                        </div>
                    </Flexbox>
                </NotificationContent>
            </NotificationContainer>
        </>
    )
}

type ActionPanelProps = {
    children?: React.ReactNode
}

export const NotificationActionPanel = ({ children }: ActionPanelProps) => {
    return (
        <div className="mt-4">
            <span className="flex justify-start gap-2">{children}</span>
        </div>
    )
}

export default Notifications
