import React, { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { selectGrouping, setGrouping } from '../components/OrderBook/orderbookSlice';

interface GroupingSelectBoxProps {
    options: number[];
}

const GroupingSelectBox: FC<GroupingSelectBoxProps> = ({ options }) => {
    const groupingSize: number = useAppSelector(selectGrouping);
    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGrouping(Number(event.target.value)));
    };

    return (
        <div>
            <select
                data-testid="groupings"
                name="groupings"
                onChange={handleChange}
                defaultValue={groupingSize}
                className="rounded-md p-1 text-white border-none bg-[#303947] hover:cursor-pointer"
            >
                {options.map((option, idx) => (
                    <option key={idx} value={option}>
                        Group {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GroupingSelectBox;
