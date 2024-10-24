import Toggle, { ToggleProps } from '@/components/toggles/Toggle'
import { Description, Label, Switch } from '@headlessui/react'
import Flexbox from '@/components/containers/flexbox/Flexbox'

type ToggleGroupProps = {
    label: string
    description?: string
    labelPlacement: 'left' | 'right'
} & ToggleProps

const ToggleGroup = ({
    label,
    description,
    labelPlacement,
    ...props
}: ToggleGroupProps) => {
    return (
        <Switch.Group>
            <Flexbox
                justifyContent={
                    labelPlacement === 'left' ? 'between' : 'center'
                }
                alignItems={'center'}
            >
                {labelPlacement === 'right' && <Toggle {...props} />}
                <Flexbox direction={'column'} gap={'xs'}>
                    <Label className="text-sm font-medium leading-6 text-gray-900">
                        {label}
                    </Label>
                    <Description className={'text-sm text-gray-500'}>
                        {description ?? ''}
                    </Description>
                </Flexbox>
                {labelPlacement === 'left' && <Toggle {...props} />}
            </Flexbox>
        </Switch.Group>
    )
}

export default ToggleGroup
