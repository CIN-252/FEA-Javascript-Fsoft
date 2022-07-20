const students = [
  {
    name: "Thuan",
    age: 26,
    gender: "male",
    address: "HCM",
  },
  {
    name: "Quyen",
    age: 25,
    gender: "female",
    address: "HCM",
  },
];

// const gioiThieu =
//   "Xin chao toi ten la Thuan toi nam nay 26 tuoi, toi la nam, toi song o HCM toi rat vui khi duoc lam quen";
// console.log(gioiThieu);

students.forEach((student) => {
  const { name, age, gender, address } = student; // Destructuring
  const gioiThieu = `Xin chao toi ten la ${name} toi nam nay ${
    student.age
  } tuoi, toi la ${
    gender == "male" ? "nam" : "nu"
  }, toi song o ${address} toi rat vui khi duoc lam quen`;
  console.log(gioiThieu);
});

// Spread operator:
const s1 = {
  name: "Thuan",
  age: 26,
  gender: "male",
};

const s2 = { ...s1, name: "Cin" };
console.log(JSON.stringify(s2, null, 2));

// setTimeout():
function con_tho_an_co(hanhDongSauKhiAn) {
  setTimeout(() => {
    console.log("con tho an co");
    hanhDongSauKhiAn();
  }, 3000);
}

function di_hotel() {
  console.log("di hotel");
}

function di_xem_phim(hanhDongSauKhiXemPhim) {
  setTimeout(() => {
    console.log("di xem phim");
    hanhDongSauKhiXemPhim();
  }, 2000);
}

// con_tho_an_co(() => {
//   di_xem_phim(() => {
//     di_hotel();
//   });
// });

function di_an_vat(hanhDongSauKhiAnVat) {
  setTimeout(() => {
    console.log("di an vat");
    hanhDongSauKhiAnVat();
  }, 1000);
}

function di_cafe(hanhDongSauKhiCafe) {
  setTimeout(() => {
    console.log("di cafe");
    hanhDongSauKhiCafe();
  }, 500);
}

// an -> coi phim -> an vat -> cafe -> hotel:
// C1:
// con_tho_an_co(() => {
//   di_xem_phim(() => {
//     di_an_vat(() => {
//       di_cafe(() => {
//         di_hotel();
//       });
//     });
//   });
// });

// C2:
con_tho_an_co(() => di_xem_phim(() => di_an_vat(() => di_cafe(di_hotel))));
