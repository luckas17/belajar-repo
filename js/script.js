//event saat navbar diklik
$('.page-scroll').on('click', function(e){

    //ambil href
    var tujuan = $(this).attr('href');
    //tagkap elemen
    var elementujuan = $(tujuan);
    $('html,body').animate({
        scrollTop: elementujuan.offset().top -80
    },1000,'easeInOutExpo');

    e.preventDefault();
});