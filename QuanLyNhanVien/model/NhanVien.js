class NhanVien {
    tknv = "";
    name = "";
    email = "";
    password = "";
    datepicker = "";
    luongCB = "";
    chucVu = "";
    gioLam = "";

    heSoLuong = function () {
        switch (this.chucVu) {
            case "Sếp":
                return 3;
            case "Trưởng phòng":
                return 2;
            case "Nhân viên":
                return 1;
        }
    };

    tongLuong = function () {
        return `${(this.luongCB * this.gioLam* this.heSoLuong()).toLocaleString("vi")} VND`;
    };
    xepLoai = function () {
        if (this.gioLam >= 192) {
            return ("Nhân viên Xuất sắc");
        }
        else if (this.gioLam >= 176){
            return "Nhân viên Giỏi"
        }
        else if (this.gioLam >= 160){
            return "Nhân viên Khá"
        }
        else {
            return ("Nhân viên Trung Bình");
        }
    };
}