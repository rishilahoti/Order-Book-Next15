'use client';
import React, { useEffect, useState } from 'react';
import './globals.css';
import Header from './components/Header';
import OrderBook from './components/OrderBook/page';
import Footer from './components/Footer';
import StatusMessage from './components/StatusMessage';
import { clearOrdersState } from './components/OrderBook/orderbookSlice';
import { useAppDispatch } from './utils/hooks';

export const ProductIds = {
	XBTUSD: 'PI_XBTUSD',
	ETHUSD: 'PI_ETHUSD',
};

const options: { [key: string]: number[] } = {
	PI_XBTUSD: [0.5, 1, 2.5],
	PI_ETHUSD: [0.05, 0.1, 0.25],
};

export const ProductsMap: { [key: string]: string } = {
	PI_XBTUSD: 'PI_ETHUSD',
	PI_ETHUSD: 'PI_XBTUSD',
};

function App() {
	const [windowWidth, setWindowWidth] = useState(0);
	const [productId, setProductId] = useState(ProductIds.XBTUSD);
	const [isFeedKilled, setIsFeedKilled] = useState(false);
	const dispatch = useAppDispatch();
	useEffect(() => {
		window.onresize = () => {
			setWindowWidth(window.innerWidth);
		};
		setWindowWidth(() => window.innerWidth);
	}, []);


	const toggleProductId = (): void => {
		dispatch(clearOrdersState());
		setProductId(ProductsMap[productId]);
	};

	const toggleFeed = (): void => {
		setIsFeedKilled(!isFeedKilled);
	};

	return (
		<>
			
				<>
					<Header options={options[productId]} />
					<OrderBook
						windowWidth={windowWidth}
						productId={productId}
						isFeedKilled={isFeedKilled}
					/>
					<Footer
						toggleFeedCallback={toggleProductId}
						killFeedCallback={toggleFeed}
						isFeedKilled={isFeedKilled}
					/>
					<StatusMessage
						isFeedKilled={isFeedKilled}
						selectedMarket={productId}
					/>
				</>
			
		</>
	);
}

export default App;
