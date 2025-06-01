let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  // Output Console Pertama
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(input.length - 1, 1, "Pria", "SMA Internasional Metro");
  console.log(input);

  // OUTPUT CONSOLE KEDUA
  // let bulanLahir = input[3];
  let kelahiran = input[3].split("/");
  let bulanLahir = kelahiran[1];
  switch (bulanLahir) {
    case "01":
      bulanLahir = "Januari";
      break;
    case "02":
      bulanLahir = "Februari";
      break;
    case "03":
      bulanLahir = "Maret";
      break;
    case "04":
      bulanLahir = "April";
      break;
    case "05":
      bulanLahir = "Mei";
      break;
    case "06":
      bulanLahir = "Juni";
      break;
    case "07":
      bulanLahir = "Juli";
      break;
    case "08":
      bulanLahir = "Agustus";
      break;
    case "09":
      bulanLahir = "September";
      break;
    case "10":
      bulanLahir = "Oktober";
      break;
    case "11":
      bulanLahir = "November";
      break;
    case "12":
      bulanLahir = "Desember";
      break;
  }
  console.log(bulanLahir);

  // OUTPUT CONSOLE KETIGA
  let kelahiranDibalik = input[3].split("/");
  kelahiranDibalik.sort((a, b) => {
    return b - a;
  });
  console.log(kelahiranDibalik);

  // OUTPUT CONSOLE KEEMPAT
  let newFormatKel = input[3].split("/").join("-");
  console.log(newFormatKel);

  // OUTPUT CONSOLE KELIMA
  let arrayKelima = input[1].slice(0, 15);
  console.log(arrayKelima);
}

dataHandling(input);
