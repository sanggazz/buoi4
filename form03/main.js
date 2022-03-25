function kiemtra(){
    var hoTen =f.hoten.value;
    var eM =f.email.value;
    var diaChi=f.diachi.value;
    var Loai=f.loai.value;
    var cauHoi=f.cauhoi.value;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(hoTen==""){
        alert("Họ tên không được bỏ trống");
        return false;
    }
    if(eM==""){
        alert("Email không được bỏ trống");
        return false;
    }
    if(diaChi==""){
        alert("Địa chỉ không được bỏ trống");
        return false;
    }
    if(Loai==""){
        alert("loại không được bỏ trống");
        return false;
    }
    if(cauHoi==""){
        alert("Câu hỏi không được bỏ trống");
        return false;
    }
    if(!emailPattern.test(eM)){
        alert("Địa chỉ email không hợp lệ");
        return false;
    }
    return true;
}