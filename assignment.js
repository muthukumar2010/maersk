(() => {
	window.addEventListener('DOMContentLoaded', () => {
		drawBoxes('sort');
		document.querySelector('.button_shuffle').addEventListener('click', () => {
			drawBoxes('shuffle');
		});
		document.querySelector('.button_sort').addEventListener('click', () => {
			drawBoxes('sort');
		});		
	});
	
	const drawBoxes = (mode) => {
		let boxElem = '',
			tempArray = [],
			boxCount = 9,
			num = 0;
		
		while(tempArray.length < boxCount){
			(mode === 'shuffle') ? num = (Math.floor(Math.random() * boxCount) + 1)  : num = tempArray.length + 1;
			if(tempArray.indexOf(num) === -1 ) {
				boxElem = `${boxElem}<div class='box box_${num}'>${num}</div>`;
				tempArray.push(num);
			}
		}
		document.querySelector('#boxes').innerHTML = boxElem;
	}
})();