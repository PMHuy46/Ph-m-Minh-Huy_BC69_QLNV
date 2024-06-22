let arrNhanVien = []
document.querySelector("#btnThem").onclick = function(){
    document.querySelector("#btnThemNV").disabled = false
    document.querySelector("#btnCapNhat").disabled = true
}

function getInfoAndCheckValidation() {
    let arrIdInput = document.querySelectorAll("#myModal input, #myModal select")
    let nhanVien = new NhanVien();
    let isValid = true;
    for (info of arrIdInput) {
        let { id, value, name } = info;
        nhanVien[id] = value
        let parentEle = info.parentElement.parentElement;
        let errorEle = parentEle.querySelector(".sp-thongbao");

        if (name == "tk") {
            isValid &= checkLimitTk(value, errorEle);
        }
        if (name == "name") {
            isValid &= checkName(value, errorEle);
        }
        if (name == "email") {
            isValid &= checkEmailValue(value, errorEle);
        }
        if (name == "password") {
            isValid &= checkMK(value, errorEle);
        }
        if (name == "ngaylam") {
            isValid &= checkDate(value, errorEle);
        }
        if (name == "luongCB") {
            isValid &= checkLuongCB(value, errorEle);
        }
        if (info.tagName == "SELECT") {
            isValid &= checkChucVu(value, errorEle);
        }
        if (name == "gioLam") {
            isValid &= checkGioLam(value, errorEle);
        }
    }
    if (isValid) {
        return nhanVien
    }
}

function resetForm() {
    let arrIdInput = document.querySelectorAll("#myModal input, #myModal select")
    for (item of arrIdInput) {
        item.value = "";
    }
}

document.getElementById("btnThemNV").onclick = function () {
    if (getInfoAndCheckValidation()) {
        arrNhanVien.push(getInfoAndCheckValidation());
        resetForm();
    }
    saveLocalStorage();
    renderDSNV();
}

function renderDSNV(arr = arrNhanVien) {
    content = ""
    arr.forEach((item, index) => {
       
        let {
            tknv,
            name,
            email,
            datepicker,
            chucVu,
        } = item

        content += `
        <tr>
            <td>${tknv}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${datepicker}</td>
            <td>${chucVu}</td>
            <td>${item.tongLuong()}</td>
            <td>${item.xepLoai()}</td>
            <td>
            <button onclick="getInfoNV('${tknv}')" data-toggle="modal" data-target="#myModal" class="btn btn-warning">Sửa</button>
            <button onclick="deleteNV('${tknv}')"  class="btn btn-danger">Xoá</button>
            </td>
        </tr>
        `
    })
    document.getElementById("tableDanhSach").innerHTML = content;
}

function saveLocalStorage(key = "arrNhanVien", value = arrNhanVien) {
    let stringJson = JSON.stringify(value);
    localStorage.setItem(key, stringJson);
}

function getLocalStorage(key = "arrNhanVien") {
    let dataLocal = localStorage.getItem(key);
    if (dataLocal) {
        let reverData = JSON.parse(dataLocal);
        for (item of reverData){
            let nhanVien = new NhanVien()
            Object.assign(nhanVien,item)
            arrNhanVien.push(nhanVien)
        }
        renderDSNV();
    }
}
getLocalStorage();

function deleteNV(tk) {
    let index = arrNhanVien.findIndex((item, index) => item.tknv == tk);
    if (index != -1) {
        arrNhanVien.splice(index, 1);
        renderDSNV();
        saveLocalStorage();
    }
}

function getInfoNV(tk) {
    let nhanVien = arrNhanVien.find((item, index) => {
        return item.tknv == tk;
    });
    if (nhanVien) {
        let arrIdInput = document.querySelectorAll("#myModal input, #myModal select")

        for (let item of arrIdInput) {
            let id = item.id;
            item.value = nhanVien[id];
            if (id == "tknv") {
                item.readOnly = true;
            }
        }
    }
    document.querySelector("#btnCapNhat").setAttribute("data-dismiss","modal")
    document.querySelector("#btnThemNV").disabled = true
    document.querySelector("#btnCapNhat").disabled = false
}
//update
function updateNV () {
    let nhanVien = getInfoAndCheckValidation();
    if (!nhanVien) {
        return
    }

    let index = arrNhanVien.findIndex((item, index) => {
        return item.tknv == nhanVien.tknv
    })

    if (index != -1) {
        arrNhanVien[index] = nhanVien
        resetForm();
    }
    saveLocalStorage();
    renderDSNV();
}
document.querySelector("#btnCapNhat").onclick= updateNV;


function searchNhanVien(event) {
    let newKeyWord = removeVietnameseTones(
        event.target.value.toLowerCase().trim()
    );
    let arrSearchNhanVien = arrNhanVien.filter((item, index) => {
        let infoXepLoai = removeVietnameseTones(
            item.xepLoai().toLowerCase().trim()
        );
        return infoXepLoai.includes(newKeyWord);
    });
    renderDSNV(arrSearchNhanVien);
}
document.getElementById("searchName").oninput = searchNhanVien;

