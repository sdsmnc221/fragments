import React, { useRef, useEffect } from 'react';
import charming from 'charming';
import gsap from 'gsap';
import configs from '../../configs';

const { random } = gsap.utils;
const { WORDING } = configs.content;

const VariableFontPage = () => {
	const textRef = useRef(null);
	const tl = gsap.timeline({ yoyo: true, repeat: -1, delay: 0 });

	useEffect(() => {
		if (textRef.current) {
			charming(textRef.current, { setClassName: () => 'char' });
			tl.to('.char', {
				fontWeight: 100,
				fontStretch: '10%',
				fontVariationSettings: `'wght'900, 'wdth'100`,
				marginLeft: 10,
				color: 'red',
				ease: 'sine.inOut',
				duration: random(0.2, 0.8),
				stagger: {
					each: 0.08,
					from: 'center',
					// yoyo: true,
					// repeat: -1,
				},
			});
		}
	}, [textRef]);

	return (
		<div className="variable-font">
			<p ref={textRef}>{WORDING.join(' ')}</p>
		</div>
	);
};

export default VariableFontPage;
