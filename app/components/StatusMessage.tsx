import React, { FunctionComponent } from 'react';

interface StatusMessageProps {
	selectedMarket: string;
	isFeedKilled: boolean;
}

const StatusMessage: FunctionComponent<StatusMessageProps> = ({
	selectedMarket = '',
	isFeedKilled,
}) => {
	return (
		<div className='text-white text-center w-full text-[1.2em]'>
			{isFeedKilled
				? 'Feed killed.'
				: `Selected market: ${selectedMarket}`}
		</div>
	);
};

export default StatusMessage;
