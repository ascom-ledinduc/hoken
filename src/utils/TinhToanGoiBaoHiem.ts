import {
  HoTroKhiNhapVien,
  HoTroKhiXuatVien,
} from "../constans/HoTroKhiNhapVien";
import {
  MuoiNamCoBaBenh,
  MuoiNamKhongCoBaBenh,
  TronDoiBayBenhCoBaBenh,
  TronDoiCoBaBenh,
  TronDoiKhongCoBaBenh,
} from "../constans/MainData";

export const TinhToanGoiBaoHiem = (value: any) => {
  let x = value.tuoi;
  let y = 0;

  if (value.gioiTinh === "nam") {
    if (value.baoVeChoBaBenhLon === "co") {
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          y = 0;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 2;
        }
        const tronDoi = TronDoiCoBaBenh[x][y];
        const muoiNam = MuoiNamCoBaBenh[x][y];
        console.log("nam - có 3 bệnh lớn - nhập viện trả 5000");
        return {
          tronDoi,
          muoiNam,
        };
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        console.log("nam - có 3 bệnh lớn - nhập viện trả 10000");
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 4;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          y = 6;
        }
        const tronDoi = TronDoiCoBaBenh[x][y];
        const muoiNam = MuoiNamCoBaBenh[x][y];
        return {
          tronDoi,
          muoiNam,
        };
      }
    } else if (value.baoVeChoBaBenhLon === "khong") {
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        console.log("nam - ko có 3 bệnh lớn - nhập viện trả 5000");
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          y = 0;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 2;
        }
        const tronDoi = TronDoiKhongCoBaBenh[x][y];
        const muoiNam = MuoiNamKhongCoBaBenh[x][y];
        return {
          tronDoi,
          muoiNam,
        };
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        console.log("nam - ko có 3 bệnh lớn - nhập viện trả 10000");
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 4;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          y = 6;
        }
        return {
          tronDoi: TronDoiKhongCoBaBenh[x][y],
          muoiNam: MuoiNamKhongCoBaBenh[x][y],
        };
      }
    }
  } else if (value.gioiTinh === "nu") {
    if (value.baoVeChoBaBenhLon === "co") {
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          y = 1;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 3;
        }
        const tronDoi = TronDoiCoBaBenh[x][y];
        const muoiNam = MuoiNamCoBaBenh[x][y];
        console.log("nu - có 3 bệnh lớn - nhập viện trả 5000");
        return {
          tronDoi,
          muoiNam,
        };
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        console.log("nu - có 3 bệnh lớn - nhập viện trả 10000");
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 5;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          y = 7;
        }
        const tronDoi = TronDoiCoBaBenh[x][y];
        const muoiNam = MuoiNamCoBaBenh[x][y];
        return {
          tronDoi,
          muoiNam,
        };
      }
    } else if (value.baoVeChoBaBenhLon === "khong") {
      if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[0].value) {
        console.log("nu - ko có 3 bệnh lớn - nhập viện trả 5000");
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[0].value) {
          y = 1;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 3;
        }
        const tronDoi = TronDoiKhongCoBaBenh[x][y];
        const muoiNam = MuoiNamKhongCoBaBenh[x][y];
        return {
          tronDoi,
          muoiNam,
        };
      } else if (value.hoTroKhiNhapVien === HoTroKhiNhapVien[1].value) {
        console.log("nu - ko có 3 bệnh lớn - nhập viện trả 10000");
        if (value.nhanKhiXuatVien === HoTroKhiXuatVien[1].value) {
          y = 5;
        } else if (value.nhanKhiXuatVien === HoTroKhiXuatVien[2].value) {
          y = 7;
        }
        return {
          tronDoi: TronDoiKhongCoBaBenh[x][y],
          muoiNam: MuoiNamKhongCoBaBenh[x][y],
        };
      }
    }
  }
};
