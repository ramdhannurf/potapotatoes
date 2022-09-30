document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        type: "loop",
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: false,
    });
    splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
    var dua = new Splide(".dua", {
        type: "loop",
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,
    });
    dua.mount();
});

$("#navMenuOpen").click(function () {
    $("#openNav").css("display", "block");
});

$("#navMenuClose").click(function () {
    $(".nav-menu").css("display", "none");
});

$(".nav-menu-list").click(function () {
    $(".nav-menu").css("display", "none");
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 500,
    });
});

function send() {
    var name = $("#nama").val();
    var jenisid = $("#jenis-id").val();
    var noid = $("#noid").val();
    var aktp = $("#alamat-ktp").val();
    var kktp = $("#kota-ktp").val();
    var an = $("#alamat-now").val();
    var kn = $("#kota-now").val();
    var job = $("#pekerjaan").val();
    var nhp = $("#no-hp").val();
    var email = $("#email").val();
    var lmitra = $("#lokasi-mitra").val();
    var amitra = $("#alamat-mitra").val();
    var kmitra = $("#kota-mitra").val();
    var ppilih = $("#paket-dipilih").val();
    var know = $("#knowing").val();
    window.location.href =
        "mailto:ramdhannurf@gmail.com?subject=Pendaftaran - " +
        name +
        " (" +
        email +
        ")" +
        "&body=" +
        "Nama : " +
        name +
        "%0D%0A" +
        "Jenis ID : " +
        jenisid +
        "%0D%0A" +
        "Nomor ID : " +
        noid +
        "%0D%0A" +
        "Alamat Sesuai ID : " +
        aktp +
        "%0D%0A" +
        "Kota Sesuai ID : " +
        kktp +
        "%0D%0A" +
        "Alamat Sekarang : " +
        an +
        "%0D%0A" +
        "Kota Sekarang : " +
        kn +
        "%0D%0A" +
        "Pekerjaan : " +
        job +
        "%0D%0A" +
        "Nomor HP : " +
        nhp +
        "%0D%0A" +
        "Email : " +
        email +
        "%0D%0A" +
        "Lokasi Mitra : " +
        lmitra +
        "%0D%0A" +
        "Alamat Mitra : " +
        amitra +
        "%0D%0A" +
        "Kota Mitra : " +
        kmitra +
        "%0D%0A" +
        "Paket Yang Dipilih : " +
        ppilih +
        "%0D%0A" +
        "Mengetahui Pota Potatoes Indonesia Dari : " +
        know;
}
