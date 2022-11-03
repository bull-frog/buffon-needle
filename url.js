const url_list = [
	"https://script.google.com/macros/s/AKfycbxiYcmCaSo0zjkcTf7TVGdABWDHoDZiuDDluwq0O7NTvrelJzHRb86Bb4ZglPyzLdVa/exec"
];

const getUrl = function() {
	return url_list[Math.floor(Math.random() * url_list.length)];
}