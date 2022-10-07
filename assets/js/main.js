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

$("#admin-login").click(function () {
    Swal.fire("Berhasil !!", "Article Berhasil Ditambahkan", "success");
});

$("#btn-tambah-article").click(function () {
    Swal.fire("Berhasil !!", "Article Berhasil Ditambahkan", "success");
});

$("#btn-tambah-gallery").click(function () {
    Swal.fire("Berhasil !!", "Foto Berhasil Ditambahkan", "success");
});

$("#btn-tambah-admin").click(function () {
    Swal.fire("Berhasil !!", "'Nama Admin' Berhasil Ditambahkan", "success");
});

$("#btn-hapus-article").click(function () {
    Swal.fire({
        title: "Apakah kamu yakin ingin menghapus article ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Yakin",
        cancelButtonText: "Tidak, Batalkan",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Berhasil !", "Article Berhasil Dihapus", "success");
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
});

$("#btn-hapus-gallery").click(function () {
    Swal.fire({
        title: "Apakah kamu yakin ingin menghapus foto ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Yakin",
        cancelButtonText: "Tidak, Batalkan",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Berhasil !", "Foto Berhasil Dihapus", "success");
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
});

$("#btn-hapus-admin").click(function () {
    Swal.fire({
        title: "Apakah kamu yakin ingin menghapus 'Nama Admin' ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Yakin",
        cancelButtonText: "Tidak, Batalkan",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Berhasil !", "'Nama Admin' Berhasil Dihapus", "success");
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
});

$("#btn-edit-terapkan").click(function () {
    Swal.fire({
        title: "Apakah kamu yakin ingin mengubah article ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Yakin",
        cancelButtonText: "Tidak, Batalkan",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Berhasil !", "Article Berhasil Diubah", "success");
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
});

$("#btn-edit-terapkan-gallery").click(function () {
    Swal.fire({
        title: "Apakah kamu yakin ingin mengubah foto ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Yakin",
        cancelButtonText: "Tidak, Batalkan",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Berhasil !", "Foto Berhasil Diubah", "success");
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
});

$("#btn-edit-admin").click(function () {
    Swal.fire({
        title: "Apakah kamu yakin ingin mengubah informasi 'Nama Admin' ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Yakin",
        cancelButtonText: "Tidak, Batalkan",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Berhasil !", "Informasi 'Nama Admin' Berhasil Diubah", "success");
        } else if (result.isDenied) {
            Swal.fire("Perubahan Tidak Disimpan", "", "info");
        }
    });
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
    let editor = new TextEditor("#editor", "#editor-view-raw", "#editor-element");

    editor.start();
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
