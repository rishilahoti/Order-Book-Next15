import React from 'react';
import { MOBILE_WIDTH } from '../../utils/constants';

interface TitleRowProps {
    reversedFieldsOrder?: boolean;
    windowWidth: number;
}

const TitleRow: React.FC<TitleRowProps> = ({
    reversedFieldsOrder = false,
    windowWidth,
}) => {
    return (
        <div className='flex justify-around text-[#98a6af] p-[.3em] bg-[#121723]' data-testid="title-row">
            {reversedFieldsOrder || windowWidth < MOBILE_WIDTH ? (
                <>
                    <span className="min-w-[5rem]">PRICE</span>
                    <span className="min-w-[5rem]">SIZE</span>
                    <span className="min-w-[5rem]">TOTAL</span>
                </>
            ) : (
                <>
                    <span className="min-w-[5rem]">TOTAL</span>
                    <span className="min-w-[5rem]">SIZE</span>
                    <span className="min-w-[5rem]">PRICE</span>
                </>
            )}
        </div>
    );
};

export default TitleRow;
