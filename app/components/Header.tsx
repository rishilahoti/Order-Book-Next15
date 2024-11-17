import React from 'react';
import GroupingSelectBox from './SelectBox';

interface HeaderProps {
    options: number[];
}

const Header: React.FC<HeaderProps> = ({ options }) => {
    return (
        <div className='flex w-full mx-auto justify-between text-[#98a6af] p-[0.6em] bg-[#121723] border-b border-[#29303e] md:p-[0.7em]'>
            <h3 className='text-[#bfc1c8]'>Order Book</h3>
            <GroupingSelectBox options={options} />
        </div>
    );
};

export default Header;
