function kiemtra(){
    var tieuDe=f.tieude.value;
    var chuyenMuc=f.chuyenmuc.value;
    var tomTat=f.tomtat.value;
    var noiDung=f.noidung.value;

    if(tieuDe==""){
        alert("Tiêu đề không được bỏ trống");
        return false;
    }
    if(chuyenMuc==""){
        alert("Chuyên mục không được bỏ trống");
        return false;
    }
    if(tomTat==""){
        alert("Tóm tắt không được bỏ trống");
        return false;
    }
    if(noiDung==""){
        alert("Nội dung không được bỏ trống");
        return false;
    }
    return true;
}