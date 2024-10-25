import Container, { ContainerProps } from '@/components/containers/Container'
import { clsx } from 'clsx'

type GridItemProps = {
    rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    rowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    rowEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    fullRowSpan?: boolean
    colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    colEnd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
    fullColSpan?: boolean
} & ContainerProps

const GridItem = ({
    rowSpan,
    rowStart,
    rowEnd,
    fullRowSpan,
    colSpan,
    colStart,
    colEnd,
    fullColSpan,
    contentPlacement = 'center',
    className,
    ...props
}: GridItemProps) => {
    return (
        <Container
            {...props}
            type={'grid'}
            contentPlacement={contentPlacement}
            className={clsx(className, {
                // for controlling how elements are sized and placed across grid columns.
                'col-span-1': colSpan === 1,
                'col-span-2': colSpan === 2,
                'col-span-3': colSpan === 3,
                'col-span-4': colSpan === 4,
                'col-span-5': colSpan === 5,
                'col-span-6': colSpan === 6,
                'col-span-7': colSpan === 7,
                'col-span-8': colSpan === 8,
                'col-span-9': colSpan === 9,
                'col-span-10': colSpan === 10,
                'col-span-11': colSpan === 11,
                'col-span-12': colSpan === 12,
                'col-span-full': fullColSpan,

                'col-start-1': colStart === 1,
                'col-start-2': colStart === 2,
                'col-start-3': colStart === 3,
                'col-start-4': colStart === 4,
                'col-start-5': colStart === 5,
                'col-start-6': colStart === 6,
                'col-start-7': colStart === 7,
                'col-start-8': colStart === 8,
                'col-start-9': colStart === 9,
                'col-start-10': colStart === 10,
                'col-start-11': colStart === 11,
                'col-start-12': colStart === 12,
                'col-start-13': colStart === 13,

                'col-end-1': colEnd === 1,
                'col-end-2': colEnd === 2,
                'col-end-3': colEnd === 3,
                'col-end-4': colEnd === 4,
                'col-end-5': colEnd === 5,
                'col-end-6': colEnd === 6,
                'col-end-7': colEnd === 7,
                'col-end-8': colEnd === 8,
                'col-end-9': colEnd === 9,
                'col-end-10': colEnd === 10,
                'col-end-11': colEnd === 11,
                'col-end-12': colEnd === 12,
                'col-end-13': colEnd === 13,

                //for controlling how elements are sized and placed across grid rows.
                'row-span-1': rowSpan === 1,
                'row-span-2': rowSpan === 2,
                'row-span-3': rowSpan === 3,
                'row-span-4': rowSpan === 4,
                'row-span-5': rowSpan === 5,
                'row-span-6': rowSpan === 6,
                'row-span-7': rowSpan === 7,
                'row-span-8': rowSpan === 8,
                'row-span-9': rowSpan === 9,
                'row-span-10': rowSpan === 10,
                'row-span-11': rowSpan === 11,
                'row-span-12': rowSpan === 12,
                'row-span-full': fullColSpan,

                'row-start-1': colStart === 1,
                'row-start-2': colStart === 2,
                'row-start-3': colStart === 3,
                'row-start-4': colStart === 4,
                'row-start-5': colStart === 5,
                'row-start-6': colStart === 6,
                'row-start-7': colStart === 7,
                'row-start-8': colStart === 8,
                'row-start-9': colStart === 9,
                'row-start-10': colStart === 10,
                'row-start-11': colStart === 11,
                'row-start-12': colStart === 12,
                'row-start-13': colStart === 13,

                'row-end-1': colEnd === 1,
                'row-end-2': colEnd === 2,
                'row-end-3': colEnd === 3,
                'row-end-4': colEnd === 4,
                'row-end-5': colEnd === 5,
                'row-end-6': colEnd === 6,
                'row-end-7': colEnd === 7,
                'row-end-8': colEnd === 8,
                'row-end-9': colEnd === 9,
                'row-end-10': colEnd === 10,
                'row-end-11': colEnd === 11,
                'row-end-12': colEnd === 12,
                'row-end-13': colEnd === 13,
            })}
        ></Container>
    )
}

export default GridItem
