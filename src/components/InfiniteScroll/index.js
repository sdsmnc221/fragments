import configs from '../../configs';

const { dimensions } = configs;

export default class InfiniteScroll {
	constructor(contextSelector, itemSelector) {
		const context = document.querySelector(contextSelector);
		this.DOM = {
			context,
		};

		this.DOM.items = [...context.querySelectorAll(itemSelector)];

		this.cloneItems();
		this.initScroll();

		this.bindit();
	}

	bindit() {
		window.addEventListener('resize', () => this.resize());
		window.addEventListener('scroll', () => this.init());

		console.log(this);
	}

	getScrollPos() {
		return (
			(this.DOM.context.pageYOffset ||
				this.DOM.context.scrollTop ||
				document.documentElement.scrollTop) - (this.DOM.context.clientTop || 0)
		);
	}

	setScrollPos(y) {
		this.DOM.context.scrollTop = y;
		window.scrollTo(0, y);
	}

	cloneItems() {
		// Get item height
		const itemH = this.DOM.items[0].offsetHeight;
		// Get number of items fit in viewport
		const fitCount = Math.ceil(dimensions.W() / itemH);

		// Remove all previously cloned items
		this.DOM.context
			.querySelectorAll('.cloned')
			.forEach((clonedItem) => this.DOM.context.removeChild(clonedItem));

		// Add  newly cloned items
		let totalClones = 0;
		this.DOM.items.forEach((cloneTarget) => {
			const clone = cloneTarget.cloneNode(true);
			clone.classList.add('cloned');
			this.DOM.context.appendChild(clone);
			totalClones++;
		});

		this.clonesH = totalClones * itemH - 30;
		this.scrollH = this.DOM.context.scrollHeight;
	}

	initScroll() {
		this.scrollPos = this.getScrollPos();

		if (this.scrollPos <= 0) {
			this.setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
		}
	}

	updateScroll() {
		this.scrollPos = this.getScrollPos();

		if (this.scrollPos >= this.clonesH) {
			this.setScrollPos(1);
		}
	}

	highlight() {
		[...this.DOM.context.children].forEach((e) => {
			e.classList.remove('highlighted');
			if (Math.random() <= 0.4) e.classList.add('highlighted');
		});
	}

	init() {
		this.updateScroll();
		this.highlight();
	}

	resize() {
		this.cloneItems();
		this.initScroll();
	}
}
