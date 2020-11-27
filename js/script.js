//event pada saat link di klik
$('.page-scroll').on('click',function(){

	//ambil isi href
	var href = $(this).attr('href');
	//tangkap elemen ybs
	var elemenhref = $(href);
	
	console.log(elemenhref.offset().top)


	e.preventDefault();
	
	

});