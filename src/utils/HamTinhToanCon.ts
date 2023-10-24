import {
  BayBenh,
  HoTroKhiChuanDoanUngThu,
  HoTroNgayKhiNhapVien,
} from "../constans/HoTroKhiNhapVien";
import {
  MuoiNamCoBaBenhLon,
  MuoiNamKhongCoBaBenhLon,
  TronDoiCoBaBenh,
  TronDoiKhongCoBaBenh,
} from "../constans/MainData";

export const UngThuCo3BenhLon = (
  tuoi: number,
  tien: number,
  gioitinh: string,
  babenhlon: string
) => {
  let y = 0;
  let tronDoi = 0;
  let muoiNam = 0;

  if (gioitinh === "nam") {
    if (tien === HoTroKhiChuanDoanUngThu[0].id) {
      y = 8;
    } else if (tien === HoTroKhiChuanDoanUngThu[1].id) {
      y = 10;
    } else if (tien === HoTroKhiChuanDoanUngThu[2].id) {
      y = 12;
    } else {
      return { tronDoi, muoiNam };
    }
  } else if (gioitinh === "nu") {
    if (tien === HoTroKhiChuanDoanUngThu[0].id) {
      y = 9;
    } else if (tien === HoTroKhiChuanDoanUngThu[1].id) {
      y = 11;
    } else if (tien === HoTroKhiChuanDoanUngThu[2].id) {
      y = 13;
    } else {
      return { tronDoi, muoiNam };
    }
  }
  if (babenhlon === "co") {
    tronDoi = TronDoiCoBaBenh[tuoi][y];
    muoiNam = MuoiNamCoBaBenhLon[tuoi][y];
    return { tronDoi, muoiNam };
  } else {
    tronDoi = TronDoiKhongCoBaBenh[tuoi][y];
    muoiNam = MuoiNamKhongCoBaBenhLon[tuoi][y];
    return { tronDoi, muoiNam };
  }
};

export const TinhBayBenh = (
  tuoi: number,
  tien: number,
  gioitinh: string,
  babenhlon: string
) => {
  let y = 0;
  let tronDoi = 0;
  let muoiNam = 0;
  if (gioitinh === "nam") {
    if (tien === BayBenh[0].id) {
      y = 14;
    } else if (tien === BayBenh[1].id) {
      y = 16;
    } else if (tien === BayBenh[2].id) {
      y = 18;
    } else {
      return { tronDoi, muoiNam };
    }
  } else if (gioitinh === "nu") {
    if (tien === BayBenh[0].id) {
      y = 15;
    } else if (tien === BayBenh[1].id) {
      y = 17;
    } else if (tien === BayBenh[2].id) {
      y = 19;
    } else {
      return { tronDoi, muoiNam };
    }
  }

  if (babenhlon === "co") {
    tronDoi = TronDoiCoBaBenh[tuoi][y];
    muoiNam = MuoiNamCoBaBenhLon[tuoi][y];
    return { tronDoi, muoiNam };
  } else {
    tronDoi = TronDoiKhongCoBaBenh[tuoi][y];
    muoiNam = MuoiNamKhongCoBaBenhLon[tuoi][y];
    return { tronDoi, muoiNam };
  }
};

export const TinhNhanNgayKhiNhapVien = (
  tuoi: number,
  tien: string,
  gioitinh: string,
  babenhlon: string
) => {
  let y = 0;
  let tronDoi = 0;
  let muoiNam = 0;
  if (gioitinh === "nam") {
    if (tien === HoTroNgayKhiNhapVien[0].value) {
      y = 22;
    } else if (tien === HoTroNgayKhiNhapVien[1].value) {
      y = 24;
    } else if (tien === HoTroNgayKhiNhapVien[2].value) {
      y = 25;
    }
  } else if (gioitinh === "nu") {
    if (tien === HoTroNgayKhiNhapVien[0].value) {
      y = 23;
    } else if (tien === HoTroNgayKhiNhapVien[1].value) {
      y = 25;
    } else if (tien === HoTroNgayKhiNhapVien[2].value) {
      y = 27;
    } else {
      return { tronDoi, muoiNam };
    }
  }

  if (babenhlon === "co") {
    tronDoi = TronDoiCoBaBenh[tuoi][y];
    muoiNam = MuoiNamCoBaBenhLon[tuoi][y];
    return { tronDoi, muoiNam };
  } else {
    tronDoi = TronDoiKhongCoBaBenh[tuoi][y];
    muoiNam = MuoiNamKhongCoBaBenhLon[tuoi][y];
    return { tronDoi, muoiNam };
  }
};
