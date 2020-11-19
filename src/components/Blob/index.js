import React, { useRef, useEffect, useCallback } from 'react';
import configs from '../../configs';
import utils from '../../utils';

const { WORDING } = configs.content;
const { W, H } = configs.dimensions;
const { lerp } = utils;

class Cursor {
	constructor(node, w = 60, h = 60) {
		this.node = node;
		this.x = node.offsetWidth / 2;
		this.y = node.offsetHeight / 2;
		this.w = w;
		this.h = h;
		this.mouse = {
			x: W() / 2,
			y: H() / 2,
		};

		this.node.style.width = `${this.w}px`;
		this.node.style.height = `${this.h}px`;

		setInterval(this.move.bind(this), 1000 / 60);
	}

	update() {
		const l = this.x - this.w / 2;
		const t = this.y - this.h / 2;

		this.node.style.left = `${l}px`;
		this.node.style.top = `${t}px`;
	}

	move() {
		this.x = lerp(this.x, this.mouse.x, 0.1);
		this.y = lerp(this.y, this.mouse.y, 0.1);
		this.update();
	}

	mousemove(e) {
		const { clientX: posX, clientY: posY } = e;

		this.mouse.x = posX;
		this.mouse.y = posY;

		// this.node.style.top = `${posY - this.w / 2}px`;
		// this.node.style.left = `${posX - this.h / 2}px`;
	}
}

const Mouse = () => {
	const cursorRef = useRef(null);
	let cursor;

	const setCursorPos = useCallback((e) => cursor.mousemove(e), []);

	useEffect(() => {
		if (cursorRef.current !== null) {
			cursor = new Cursor(cursorRef.current);
			document.addEventListener('mousemove', setCursorPos);
		}

		return () => {
			document.removeEventListener('mousemove', setCursorPos);
		};
	}, [cursorRef]);

	return <div className="cursor" ref={cursorRef}></div>;
};

const BlobPage = () => {
	return (
		<div className="blob">
			<p>{WORDING.join(' ')}</p>
			<Mouse />
		</div>
	);
};

export default BlobPage;
