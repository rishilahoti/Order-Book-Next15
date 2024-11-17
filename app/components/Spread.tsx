import React from 'react';
import { formatNumber } from '../utils/helper';

interface SpreadProps {
	bids: number[][];
	asks: number[][];
}

const Spread: React.FC<SpreadProps> = ({ bids, asks }) => {
	const getHighestBid = (bids: number[][]): number => {
		const prices: number[] = bids.map((bid) => bid[0]);
		return Math.max(...prices);
	};

	const getLowestAsk = (asks: number[][]): number => {
		const prices: number[] = asks.map((ask) => ask[0]);
		return Math.min(...prices);
	};

	const getSpreadAmount = (bids: number[][], asks: number[][]): number =>
		Math.abs(getHighestBid(bids) - getLowestAsk(asks));

	const getSpreadPercentage = (spread: number, highestBid: number): string =>
		`(${((spread * 100) / highestBid).toFixed(2)}%)`;

	return (
		<div className="text-[#98a6af] bg-[#121723] w-1/2 text-center py-2.5 md:absolute">
			Spread: {formatNumber(getSpreadAmount(bids, asks))}{' '}
			{getSpreadPercentage(
				getSpreadAmount(bids, asks),
				getHighestBid(bids)
			)}
		</div>
	);
};

export default Spread;
