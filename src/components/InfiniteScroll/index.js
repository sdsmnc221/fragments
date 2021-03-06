import React, { useEffect } from 'react';

import InfiniteScroll from './';

import configs from '../../configs';

const { WORDING } = configs.content;

const InfiniteScrollPage = () => {
	useEffect(() => {
		new InfiniteScroll('main', 'p');
	}, []);

	return (
		<>
			{WORDING.map((w, i) => (
				<p key={i} data-text={w}>
					{w}
				</p>
			))}
		</>
	);
};

export default InfiniteScrollPage;
