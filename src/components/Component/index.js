import React from 'react';
import gsap from 'gsap';
import configs from '../../configs';

const { WORDING } = configs.content;

const ComponentPage = () => {
	return (
		<div className="component">
			<p>{WORDING.join(' ')}</p>
		</div>
	);
};

export default ComponentPage;
