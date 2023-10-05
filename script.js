document.getElementById('searchInput').addEventListener('keyup', function(){
	let input, filter, ul, li, txtValue;
	input = document.getElementById('searchInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById('ramaisList');
	li = ul.getElementsByTagName('li');
	for (let i = 0; i < li.length; i++) {
		txtValue = li[i].textContent || li[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1 ){
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
});