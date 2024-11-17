'use client';

import { FC } from 'react';

interface PriceLevelRowProps {
    total: string;
    size: string;
    price: string;
    reversedFieldsOrder: boolean;
    windowWidth: number;
}

const MOBILE_WIDTH = 800;

const PriceLevelRow: FC<PriceLevelRowProps> = ({
    total,
    size,
    price,
    reversedFieldsOrder = false,
    windowWidth,
}) => {
    const isMobile = windowWidth < MOBILE_WIDTH;

    return (
        <div
            className={`relative flex justify-around bg-[#121723] ${
                reversedFieldsOrder ? 'flex-row-reverse' : ''
            }`}
        >
            <div
                className={`absolute inset-0 ${
                    reversedFieldsOrder ? 'bg-[#113534]' : 'bg-[#3d1e28]'
                } ${
                    !isMobile
                        ? reversedFieldsOrder
                            ? 'left-auto right-0'
                            : 'right-auto left-0'
                        : ''
                }`}
                style={{ zIndex: 0 }}
            ></div>
            {reversedFieldsOrder || isMobile ? (
                <>
                    <span className="z-10 min-w-[54px] text-[#118860]">
                        {price}
                    </span>
                    <span className="z-10 min-w-[54px]">{size}</span>
                    <span className="z-10 min-w-[54px]">{total}</span>
                </>
            ) : (
                <>
                    <span className="z-10 min-w-[54px]">{total}</span>
                    <span className="z-10 min-w-[54px]">{size}</span>
                    <span className="z-10 min-w-[54px] text-[#bb3336]">
                        {price}
                    </span>
                </>
            )}
        </div>
    );
};

export default PriceLevelRow;
