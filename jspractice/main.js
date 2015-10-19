var title = $('h1');

console.log(title);

// title.text('Hello Class');
// title.css('background', '#D0ECEA');

var text = $('.showme');
var readMoreLink = $('#read-more-link');

function director() {
	text.css('display', 'block');
}

readMoreLink.on('click', director);

var like = $('.like');
var numLikes = 0;

function onButtonClick() {
	numLikes = numLikes + 1;
	
	if(numLikes === 1) {
		like.text(numLikes + ' LIKE! LIKE IT AGAIN!');
	}
	else{
		like.text(numLikes + ' LIKES!');
	}
}

like.on('click', onButtonClick)