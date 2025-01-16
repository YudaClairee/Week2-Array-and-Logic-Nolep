let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
  // Membuat console yang pertama, yaitu menambahkan beberapa index array baru ke dalam array input
  input.splice(
    1,
    2,
    "Roman Alamsyah Elsharawy",
    "Provinsi Bandar Lampung"
  );
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(input);
  // BATAS CONSOLE PERTAMA

  // Membuat console yang kedua, yaitu mengambil bulan lahir dari array input
  let tempatLahir = input[3].split("/");
  let bulan = tempatLahir[1];
  switch (bulan) {
    case "01":
      bulan = "Januari";
      break;
    case "02":
      bulan = "Februari";
      break;
    case "03":
      bulan = "Maret";
      break;
    case "04":
      bulan = "April";
      break;
    case "05":
      bulan = "Mei";
      break;
    case "06":
      bulan = "Juni";
      break;
    case "07":
      bulan = "Juli";
      break;
    case "08":
      bulan = "Agustus";
      break;
    case "09":
      bulan = "September";
      break;
    case "10":
      bulan = "Oktober";
      break;
    case "11":
      bulan = "November";
      break;
    case "12":
      bulan = "Desember";
      break;
  }
  console.log(bulan);
  // BATAS CONSOLE KEDUA

  // Membuat console yang ketiga, yaitu mengurutkan tanggal lahir jadi kebalik yaitu tahun, bulan, tanggal dari array input
  let tempatLahir2 = input[3].split("/");
  tempatLahir2.sort(function (a, b) {
    return b - a;
  });
  console.log(tempatLahir2);
  // BATAS CONSOLE KETIGA

  // Membuat console yang keempat, yaitu menggabungkan tanggal lahir yang sudah di split sebelumnya
  let tempatLahir3 = input[3].split("/");
  let fix = tempatLahir3.join("-");
  console.log(fix);
  // BATAS CONSOLE KEEMPAT

  // Membuat console yang kelima, yaitu membatasi jumlah karakter dari array input
  let batasNama = input[1];
  if (batasNama.length > 15) {
    console.log(batasNama.slice(0, 15));
  }
}

dataHandling(input);