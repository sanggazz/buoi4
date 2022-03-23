function kiemtra(){
    var tdn =f.tendangnhap.value;
    var mk =f.matkhau.value;
    if(tdn==""){
        alert("Tên đăng nhập không được bỏ trống")
        return false;
    }
    if(mk==""){
        alert("Mật khẩu không được bỏ trống")
        return false;
    }
    return true;
}