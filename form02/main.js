function kiemtra(){
    var hT=f.hoten.value;
    var dC=f.diachi.value;
    var eM=f.email.value;
    var dT=f.dienthoai.value;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(hT==""){
        alert("Họ tên không được bỏ trống");
        return false;
    }
    if(dC==""){
        alert("Địa chỉ không được bỏ trống");
        return false;
    }
    if(eM==""){
        alert("Email không được bỏ trống");
        return false;
    }
    if(dT==""){
        alert("Điện thoại không được bỏ trống");
        return false;
    }
    if(!emailPattern.test(eM)){
        alert("Địa chỉ email không hợp lệ");
        return false;
    }
    return true;
}