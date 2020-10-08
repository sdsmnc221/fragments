import React, { useRef, useEffect } from 'react';
import charming from 'charming';
import gsap from 'gsap';

import InfiniteScroll from './components/InfiniteScroll';

// const { random } = gsap.utils;

// // // `rgb(${random(0, 255, 1)}, ${random(0, 255, 1)}, ${random(0,255,)})`

const WORDING = [
	'We',
	'take',
	'strange',
	'things',
	'to',
	'feel',
	'normal,',
	'to',
	'feel',
	'normal,',
	'to',
	'feel',
	'normal',
];

const App = () => {
	// const textRef = useRef(null);
	// const tl = gsap.timeline({ yoyo: true, repeat: -1, delay: 0 });

	// useEffect(() => {
	// if (textRef.current) {
	// charming(textRef.current, { setClassName: () => 'char' });
	// tl.to('.char', {
	// 	fontWeight: 100,
	// 	fontStretch: '10%',
	// 	fontVariationSettings: `'wght'900, 'wdth'100`,
	// 	marginLeft: 10,
	// 	color: 'red',
	// 	ease: 'sine.inOut',
	// 	duration: random(0.2, 0.8),
	// 	stagger: {
	// 		each: 0.08,
	// 		from: 'center',
	// 		// yoyo: true,
	// 		// repeat: -1,
	// 	},
	// });
	// }
	// }, [textRef]);

	useEffect(() => {
		new InfiniteScroll('.app', 'p');
	}, []);

	return (
		// <>
		// 	<p ref={textRef}>{WORDING.join(' )}</p>
		// </>
		<>
			{WORDING.map((w, i) => (
				<p key={i} data-text={w}>
					{w}
				</p>
			))}
		</>
	);
};

export default App;
