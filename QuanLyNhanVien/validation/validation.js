function checkEmptyValue(value, errorEle) {
    if (value == "") {
        errorEle.classList.add("d-block")
        errorEle.innerHTML = "Vui lòng không bỏ trống trường này";
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}

function checkLimitTk(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let regexTk = /^(?!.*\s)\S{4,6}$/;
    let isValid = regexTk.test(value);
    if (!isValid) {
        errorEle.innerHTML = "Vui lòng nhập chuỗi từ 4-6 ký tự và không có khoảng trắng";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}

function checkName(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let regexName = /^[^\d]+$/;
    let isValid = regexName.test(value);
    if (!isValid) {
        errorEle.innerHTML = "Vui lòng không nhập số";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}

function checkEmailValue(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let isValid = regexEmail.test(value);
    if (!isValid) {
        errorEle.innerHTML = "Vui lòng nhập đúng định dạng email";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}

function checkMK(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let regexMK = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).+.{6,8}$/
    let isValid = regexMK.test(value);
    if (!isValid) {
        errorEle.innerHTML = "Mật khẩu phải có 6 đến 8 ký tự và chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}
function checkDate(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let regexDate = /^(0[1-9]|1[0-2]|January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-/](0[1-9]|[12][0-9]|3[01])[-/]\d{4}$/
    let isValid = regexDate.test(value);
    if (!isValid) {
        errorEle.innerHTML = "Nhập đúng định dạng MM/DD/YYYY";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}

function checkLuongCB(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let checkNumber = value * 1
    if (!checkNumber) {
        errorEle.innerHTML = "Nhập số thôi";
        errorEle.classList.add("d-block")
        return false;
    } else {
        if (checkNumber < 1000000 || checkNumber > 20000000) {
            errorEle.innerHTML = "Lương từ 1000000 đến 20000000";
            errorEle.classList.add("d-block")
            return false;
        } else {
            errorEle.innerHTML = "";
            errorEle.classList.remove("d-block")
            return true;
        }
    }
}

function checkChucVu(value, errorEle) {
    if (!checkEmptyValue(value, errorEle)) {
        errorEle.innerHTML = "Chọn chức vụ của bạn";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
}

function checkGioLam(value, errorEle) {
    if(!checkEmptyValue(value, errorEle)){
        return false
    }
    let checkNumber = /^(\d{2}|1\d{2}|200)(\.\d+)?$/;
    let isValid = checkNumber.test(value);
    if (!isValid) {
        errorEle.innerHTML = "Thời gian làm phải từ 80 đến 200 giờ ";
        errorEle.classList.add("d-block")
        return false;
    } else {
        errorEle.innerHTML = "";
        errorEle.classList.remove("d-block")
        return true;
    }
    // if (!checkNumber) {
    //     errorEle.innerHTML = "Nhập số thôi";
    //     errorEle.classList.add("d-block")
    //     return false;
    // } else {
    //     if (checkNumber < 80 || checkNumber > 200) {
    //         errorEle.innerHTML = "Thời gian làm phải từ 80 đến 200 giờ ";
    //         errorEle.classList.add("d-block")
    //         return false;
    //     } else {
    //         errorEle.innerHTML = "";
    //         errorEle.classList.remove("d-block")
    //         return true;
    //     }
    // }
}
let x= 1
x+1
console.log(x)