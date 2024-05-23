// Bài 1: Tính tiền lương nhân viên
// Mô hình 3 khối:
// 1. Đầu vào:
// - Lương 1 ngày = 100000
// - Số ngày người nhân viên làm việc

// 2. Các bước xử lí:
// - Thực hiện sử dụng công thức lấy số ngày làm * số lương 1 ngày ==> tổng tiền lương 

// 3. Đầu ra:
// - Số tiền lương nhân viên dựa trên số lương và số ngày làm

function tinhTongLuong () {
    let soNgayLam = +document.getElementById("soNgayLam").value;
    let tongLuong = 0;
    tongLuong = soNgayLam * 100000;
    document.getElementById("tongLuong").innerHTML = tongLuong;
}

// Bài 2: Tính giá trị trung bình
// 1. Input: Nhập 5 số thực.
// 2. Progress: Lấy tổng 5 số chia cho 5.
// 3. Output: Giá trị trung bình của 5 số.
function tinhTongTrungBinh () {
    let soThuc1 = +document.getElementById("soThuc1").value;
    let soThuc2 = +document.getElementById("soThuc2").value;
    let soThuc3 = +document.getElementById("soThuc3").value;
    let soThuc4 = +document.getElementById("soThuc4").value;
    let soThuc5 = +document.getElementById("soThuc5").value;
    let tongTrungBinh = 0;
    tongTrungBinh = (soThuc1+soThuc2+soThuc3+soThuc4+soThuc5)/5;
    document.getElementById("tongTrungBinh").innerHTML = tongTrungBinh;
}

// Bài 3: Quy đổi tiền
// 1. Input: Nhập số tiền USD.
// 2. Progress: Lấy số tiền USD được nhập * 23.500  
// 3. Output: Xuất ra số tiền bằng VNĐ.
function quyDoiTien () {
    let soTienUSD = +document.getElementById("soTienUSD").value;
    let tongTienVND = 0;
    tongTienVND = soTienUSD * 23500;
    document.getElementById("tongTienVND").innerHTML = tongTienVND.toLocaleString('vi', {
        style: 'currency',
        currency: 'VND',
      });
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật  
// 1. Input: Nhập số chiều dài và chiều rộng.
// 2. Progress: 
// Diện tích: Dài * Rộng
// Chu vi: (Dài + Rộng) * 2 
// 3. Output: Xuất ra diện tích và chu vi HCN. 

function tinhDienTich () {
    let soChieuDai = +document.getElementById("soChieuDai").value;
    let soChieuRong = +document.getElementById("soChieuRong").value;
    let tongDienTich = 0;
    tongDienTich = soChieuDai * soChieuRong;
    document.getElementById("tongDienTich").innerHTML = tongDienTich;
}

function tinhChuVi () {
    let soChieuDai = +document.getElementById("soChieuDai").value;
    let soChieuRong = +document.getElementById("soChieuRong").value;
    let tinhChuVi = 0;
    tongChuVi = (soChieuDai + soChieuRong)*2;
    document.getElementById("tongChuVi").innerHTML = tongChuVi;
}

// Bài 5: Tính tổng 2 ký số 
// 1. Input: Nhập vào 1 số có 2 chữ số.
// 2. Progress: Tính tổng 2 chữ số vừa nhập.
// 3. Output: Xuất ra số tổng.
function tinhTong () {
    let soHangDonVi = +document.getElementById("nhapHaiSo").value % 10;
    let soHangChuc = Math.floor(+document.getElementById("nhapHaiSo").value / 10);
    let tongKySo = 0;
    tongKySo = soHangChuc + soHangDonVi;
    document.getElementById("tongKySo").innerHTML = tongKySo;
}
