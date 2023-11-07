import {
  HoTroKhiNhapVien,
  HoTroKhiXuatVien,
} from "../constans/HoTroKhiNhapVien";
import {
  MuoiNamCoBaBenhLon,
  MuoiNamKhongCoBaBenhLon,
  TronDoiCoBaBenh,
  TronDoiKhongCoBaBenh,
} from "../constans/MainData";
import {
  TinhBayBenh,
  TinhNhanNgayKhiNhapVien,
  UngThuCo3BenhLon,
} from "./HamTinhToanCon";

export const TinhToanGoiBaoHiem = (value: any) => {
  let x = value.tuoi;
  let muoiNam = 0;
  let tronDoi = 0;
  let TienNhapVien5000TronDoi = 0;
  let HoTroKhiMacUngThuTronDoi = 0;
  let HoTroCho7BenhTronDoi = 0;
  let NhanNgayKhiNhapVienTronDoi = 0;
  let TienNhapVien5000MuoiNam = 0;
  let HoTroKhiMacUngThuMuoiNam = 0;
  let HoTroCho7BenhMuoiNam = 0;
  let NhanNgayKhiNhapVienMuoiNam = 0;
  let mienTriXa = 0;
  // Toạ độ của Khi nhập viện được hỗ trợ

  if (value.baoVeChoBaBenhLon === "co") {
    mienTriXa = 78;
  } else {
    mienTriXa = 50;
  }

  if (value.gioiTinh === "nam") {
    if (value.baoVeChoBaBenhLon === "co") {
      HoTroKhiMacUngThuTronDoi = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nam",
        "co"
      ).tronDoi;
      HoTroKhiMacUngThuMuoiNam = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nam",
        "co"
      ).muoiNam;
      HoTroCho7BenhTronDoi = TinhBayBenh(x, value.bayBenh, "nam", "co").tronDoi;

      HoTroCho7BenhMuoiNam = TinhBayBenh(x, value.bayBenh, "nam", "co").muoiNam;
      NhanNgayKhiNhapVienTronDoi = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nam",
        "co"
      ).tronDoi;
      NhanNgayKhiNhapVienMuoiNam = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nam",
        "co"
      ).muoiNam;

      //Tiền cố định
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][0];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][0];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][2];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][2];
        }
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][4];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][4];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][6];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][6];
        }
      }
    } else if (value.baoVeChoBaBenhLon === "khong") {
      //Không bảo vệ cho 3 bệnh lớn
      HoTroKhiMacUngThuTronDoi = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nam",
        "khong"
      ).tronDoi;
      HoTroKhiMacUngThuMuoiNam = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nam",
        "khong"
      ).muoiNam;
      HoTroCho7BenhTronDoi = TinhBayBenh(
        x,
        value.bayBenh,
        "nam",
        "khong"
      ).tronDoi;

      HoTroCho7BenhMuoiNam = TinhBayBenh(
        x,
        value.bayBenh,
        "nam",
        "khong"
      ).muoiNam;
      NhanNgayKhiNhapVienTronDoi = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nam",
        "khong"
      ).tronDoi;
      NhanNgayKhiNhapVienMuoiNam = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nam",
        "khong"
      ).muoiNam;
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][0];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][0];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][2];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][2];
        }
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][4];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][4];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][6];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][6];
        }
      }
    }
  } else if (value.gioiTinh === "nu") {
    if (value.baoVeChoBaBenhLon === "co") {
      HoTroKhiMacUngThuTronDoi = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nu",
        "co"
      ).tronDoi;
      HoTroKhiMacUngThuMuoiNam = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nu",
        "co"
      ).muoiNam;
      HoTroCho7BenhTronDoi = TinhBayBenh(x, value.bayBenh, "nu", "co").tronDoi;

      HoTroCho7BenhMuoiNam = TinhBayBenh(x, value.bayBenh, "nu", "co").muoiNam;
      NhanNgayKhiNhapVienTronDoi = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nu",
        "co"
      ).tronDoi;
      NhanNgayKhiNhapVienMuoiNam = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nu",
        "co"
      ).muoiNam;
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][1];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][1];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][3];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][3];
        }
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][5];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][5];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          TienNhapVien5000TronDoi = TronDoiCoBaBenh[x][7];
          TienNhapVien5000MuoiNam = MuoiNamCoBaBenhLon[x][7];
        }
      }
    } else if (value.baoVeChoBaBenhLon === "khong") {
      HoTroKhiMacUngThuTronDoi = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nu",
        "khong"
      ).tronDoi;
      HoTroKhiMacUngThuMuoiNam = UngThuCo3BenhLon(
        x,
        value.chuanDoanUngThu,
        "nu",
        "khong"
      ).muoiNam;
      HoTroCho7BenhTronDoi = TinhBayBenh(
        x,
        value.bayBenh,
        "nu",
        "khong"
      ).tronDoi;

      HoTroCho7BenhMuoiNam = TinhBayBenh(
        x,
        value.bayBenh,
        "nu",
        "khong"
      ).muoiNam;
      NhanNgayKhiNhapVienTronDoi = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nu",
        "khong"
      ).tronDoi;
      NhanNgayKhiNhapVienMuoiNam = TinhNhanNgayKhiNhapVien(
        x,
        value.nhanNgayKhiNhapVien,
        "nu",
        "khong"
      ).muoiNam;
      //Không bảo vệ cho 3 bệnh lớn
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][1];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][1];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][3];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][3];
        }
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][5];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][5];
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          TienNhapVien5000TronDoi = TronDoiKhongCoBaBenh[x][7];
          TienNhapVien5000MuoiNam = MuoiNamKhongCoBaBenhLon[x][7];
        }
      }
    }
  }

  muoiNam =
    TienNhapVien5000MuoiNam +
    HoTroKhiMacUngThuMuoiNam +
    HoTroCho7BenhMuoiNam +
    NhanNgayKhiNhapVienMuoiNam +
    mienTriXa;

  tronDoi =
    TienNhapVien5000TronDoi +
    HoTroKhiMacUngThuTronDoi +
    HoTroCho7BenhTronDoi +
    NhanNgayKhiNhapVienTronDoi +
    mienTriXa;

  return {
    muoiNam,
    tronDoi,
  };
};
