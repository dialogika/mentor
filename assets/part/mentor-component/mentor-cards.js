// Data-data mentor yang ditampilkan di index. /mentor homepage
const mentorData = [
  // {
  //   name: "Putri Amanda",
  //   image: "assets/img/mentor/putri-amanda.jpeg",
  //   alt: "Gambar kak Putri Amanda",
  //   role: "Online & Offline Mentor",
  //   url: "https://www.dialogika.co/mentor/putri-amanda.html",
  //   statusAktif: false,
  // },
  {
    name: "Daniel Ari Setiawan",
    image: "assets/img/mentor/daniel-ari-setiawan.jpg",
    alt: "Gambar kak Daniel Ari Setiawan",
    role: "Online",
    url: "https://www.dialogika.co/mentor/daniel-ari-setiawan.html",
    statusAktif: true,
  },
  {
    name: "M. Rendra Hidayaturahman",
    image: "assets/img/mentor/rendra-hidayaturahman.webp",
    alt: "Gambar kak M. Rendra Hidayaturahman",
    role: "Online",
    url: "https://www.dialogika.co/mentor/rendra-hidayaturahman.html",
    statusAktif: true,
  },
  {
    name: "Herna Prissella Purba",
    image: "assets/img/mentor/herna-prissella-purba.webp",
    alt: "Gambar kak Herna Prissella Purba",
    role: "Online",
    url: "https://www.dialogika.co/mentor/herna-prissella-purba.html",
    statusAktif: false,
  },
  {
    name: "Nicho Finsya Prananda",
    image: "assets/img/mentor/nicho-finsya-prananda.webp",
    alt: "Gambar kak Nicho Finsya Prananda",
    role: "Online",
    url: "https://www.dialogika.co/mentor/nicho-finsya-prananda.html",
    statusAktif: true,
  },
  {
    name: "Rafellino Ovaldo",
    image: "assets/img/mentor/rafellino-ovaldo.webp",
    alt: "Gambar kak Rafellino Ovaldo",
    role: "Online",
    url: "https://www.dialogika.co/mentor/rafellino-ovaldo.html",
    statusAktif: true,
  },
  {
    name: "Bondan Prasetyo",
    image: "assets/img/mentor/bondan-prasetyo.webp",
    alt: "Gambar kak Bondan Prasetyo",
    role: "Online",
    url: "https://www.dialogika.co/mentor/bondan-prasetyo.html",
    statusAktif: true,
  },
  {
    name: "Dyah Niken Rahmawati",
    image: "assets/img/mentor/dyah-niken-rahmawati.webp",
    alt: "Gambar kak Dyah Niken Rahmawati",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/dyah-niken-rahmawati.html",
    statusAktif: true,
  },
  {
    name: "Ariani Suryaningsih",
    image: "assets/img/mentor/ariani-suryaningsih.webp",
    alt: "Gambar kak Ariani Suryaningsih",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/ariani-suryaningsih.html",
    statusAktif: true,
  },
  {
    name: "I Nyoman Indra Kusuma S P",
    image: "assets/img/mentor/nyoman-indra-kusuma.webp",
    alt: "Gambar kak I Nyoman Indra Kusuma S P",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/nyoman-indra-kusuma.html",
    statusAktif: true,
  },
  {
    name: "Josephine Alvina Prasetyo",
    image: "assets/img/mentor/josephineAlvinaPrasetyo.webp",
    alt: "Gambar kak Josephine Alvina Prasetyo",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/josephine-alvina-prasetyo.html",
    statusAktif: false,
  },
  // {
  //   name: "Pawestri Kusumo Arum",
  //   image: "assets/img/mentor/pawestri-kusumo-Arum.webp",
  //   alt: "Gambar kak Pawestri Kusumo Arum",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/pawestri-kusumo-arum.html",
  //   statusAktif: true,
  // },
  {
    name: "Muhammad Naufal Dzaky",
    image: "assets/img/mentor/muhammad-naufal-dzaky.webp",
    alt: "Gambar kak Muhammad Naufal Dzaky",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/Muhammad-naufal-dzaky.html",
    statusAktif: true,
  },
  // {
  //   name: "Dhanifa Aldeana Maheswari",
  //   image: "assets/img/mentor/DhanifaAldeanaMaheswari.webp",
  //   alt: "Gambar kak Dhanifa Aldeana Maheswari",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/dhanifa-aldeana-maheswari.html",
  //   statusAktif: true,
  // },
  {
    name: "Vika Safitri",
    image: "assets/img/mentor/VikaSafitriNew2.webp",
    alt: "Gambar kak Vika Safitri",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/vika-safitri.html",
    statusAktif: true,
  },
  {
    name: "Rismalla Ma'im Olam",
    image: "assets/img/mentor/rismalla.jpg",
    alt: "Gambar kak Rismallah Ma'im Olam",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/rismalla.html",
    statusAktif: true,
  },
  {
    name: "Salsabilla Astari Putri",
    image: "assets/img/mentor/SalsabilaAstariaNew2.webp",
    alt: "Gambar kak Salsabilla Astari Putri",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/salsabilla.html",
    statusAktif: true,
  },
  {
    name: "Ihlasul Akmal",
    image: "assets/img/mentor/Akmal.webp",
    alt: "Gambar kak Ihlasaul Akmal",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/ihlasaul-akmal.html",
    statusAktif: true,
  },
  // {
  //   name: "Novelia Qothrunnad",
  //   image: "assets/img/mentor/NoveliaQothrunnadNew.webp",
  //   alt: "Gambar kak Novelia Qothrunnad",
  //   role: "Online & Offline Mentor",
  //   url: "https://www.dialogika.co/mentor/novelia.html",
  //   statusAktif: false,
  // },
  {
    name: "Syifa Nabilah",
    image: "assets/img/mentor/SyifaNabilah.jpg",
    alt: "Gambar kak Syifa Nabilah",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/syifa-nabilah.html",
    statusAktif: true,
  },
  {
    name: "Pauline Tricia",
    image: "assets/img/mentor/cia.jpg",
    alt: "Gambar kak Pauline Tricia",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/cia.html",
    statusAktif: true,
  },
  // { Inactive
  //   name: "Zulfatun Ni'mah",
  //   image: "assets/img/mentor/ZulfatunNi'mah.webp",
  //   alt: "Gambar kak Zulfatun Ni'mah",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/zulfatun.html",
  //   statusAktif: false,
  // },
  {
    name: "Septyani Dwi Hastati",
    image: "assets/img/mentor/septyani.webp",
    alt: "Gambar kak Septyani Dwi Hastati",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/septyani.html",
    statusAktif: true,
  },
  // {Inactive
  //   name: "Achmad Sofari",
  //   image: "assets/img/mentor/sofari.jpg",
  //   alt: "Gambar kak Achmad Sofari",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/sofari.html",
  //   statusAktif: false,
  // },
  // { Inactive
  //   name: "Bayu Victory",
  //   image: "assets/img/mentor/bayu.jpg",
  //   alt: "Gambar kak Bayu Victory",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/bayu.html",
  //   statusAktif: false,
  // },
  {
    name: "Ricardo Jacob",
    image: "assets/img/mentor/bang-jacob.webp",
    alt: "Gambar Kak Bang Jacob",
    role: "Offline Mentor",
    url: "https://www.dialogika.co/mentor/bang-jacob.html",
    statusAktif: true,
  },
  {
    name: "Giomelando Eurichi Elaman",
    image: "assets/img/mentor/giomelando.webp",
    alt: "Gambar Kak Giomelando Eurichi Elaman",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/giomelando-eurichi-elaman.html",
    statusAktif: true,
  },
  {
    name: "Ghassani Salsabila",
    image: "assets/img/mentor/ghassani.webp",
    alt: "Gambar Kak Ghassani Salsabila",
    role: "Offline Mentor",
    url: "https://www.dialogika.co/mentor/ghassani-salsabila.html",
    statusAktif: true,
  },
  {
    name: "Bani Firdaus",
    image: "assets/img/mentor/bani-firdaus.webp",
    alt: "Gambar Kak Bani Firdaus",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/bani-firdaus.html",
    statusAktif: true,
  },
  {
    name: "Ivan Kurnia",
    image: "assets/img/mentor/ivankur.webp",
    alt: "Gambar Kak Ivan Kurnia",
    role: "Offline Mentor",
    url: "https://www.dialogika.co/mentor/ivan-kurnia.html",
    statusAktif: true,
  },
  {
    name: "Melati Octavia",
    image: "assets/img/mentor/melati-octavia.webp",
    alt: "Gambar Kak Melati Octavia",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/melati-octavia.html",
    statusAktif: false,
  },
  {
    name: "Sandra Nova Raharjo",
    image: "assets/img/mentor/sandra-nova.webp",
    alt: "Gambar Kak Sandra Nova",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/sandra-nova-raharjo.html",
    statusAktif: true,
  },
  // {
  //   name: "Ayu Pratiwi Muyasyaroh",
  //   image: "assets/img/mentor/ayu-pratiwi-muyasyaroh.webp",
  //   alt: "Gambar Kak Ayu Pratiwi Muyasyaroh",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/ayu-pratiwi-muyasyaroh.html",
  //   statusAktif: true,
  // },
  {
    name: "Fanny Carolina",
    image: "assets/img/mentor/fanny.jpg",
    alt: "Gambar Kak Fanny Carolina",
    role: "Offline Mentor",
    url: "https://www.dialogika.co/mentor/fanny.html",
    statusAktif: true,
  },
  // { Inactive
  //   name: "Aditya Diah",
  //   image: "assets/img/mentor/aditya-diah.jpg",
  //   alt: "Gambar Kak Aditya Diah",
  //   role: "Online & Offline Mentor",
  //   url: "https://www.dialogika.co/mentor/aditya.html",
  //   statusAktif: false,
  // },
  {
    name: "Husnul Fatiya",
    image: "assets/img/mentor/tiya.jpg",
    alt: "Gambar Kak Husnul Fatiya",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/tiya.html",
    statusAktif: true,
  },
  // { Inactive
  //   name: "Muhammad Fajar",
  //   image: "assets/img/mentor/fajar.jpg",
  //   alt: "Gambar Kak Muhammad Fajar",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/fajar.html",
  //   statusAktif: false,
  // },
  {
    name: "Panji Putra",
    image: "assets/img/mentor/panji.jpg",
    alt: "Gambar Kak Panji Putra",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/panji.html",
    statusAktif: true,
  },
  {
    name: "Pitta Sekar Wangi",
    image: "assets/img/mentor/pitta.jpg",
    alt: "Gambar Kak Pitta Sekar Wangi",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/pitta.html",
    statusAktif: true,
  },
  {
    name: "Muhammad Rio Fariza",
    image: "assets/img/mentor/rio.jpg",
    alt: "Gambar Kak Muhammad Rio Fariza",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/rio.html",
    statusAktif: true,
  },
  // { Inactive
  //   name: "Lailati Rohmah",
  //   image: "assets/img/mentor/laila-rohmah.webp",
  //   alt: "Gambar kak Lailati Rohmah",
  //   role: "Kids Online Mentor",
  //   url: "https://www.dialogika.co/mentor/lailati.html",
  //   statusAktif: false,
  // },
  // { Inactive
  //   name: "Ladia Aisah Andriana",
  //   image: "assets/img/mentor/ladia-andriana.jpg",
  //   alt: "Gambar kak Ladia Aisah Andriana",
  //   role: "Kids Online Mentor",
  //   url: "https://www.dialogika.co/mentor/ladia.html",
  //   statusAktif: false,
  // },
  // { Inactive
  //   name: "Indriana Putri Wijaya",
  //   image: "assets/img/mentor/indriana-putri.webp",
  //   alt: "Gambar kak Indriana Putri Wijaya",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/indriana-putri-wijaya.html",
  //   statusAktif: true,
  // },
  {
    name: "Nabila Putri Manda",
    image: "assets/img/mentor/nabila.jpg",
    alt: "Gambar kak Nabila Putri Manda",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/nabila.html",
    statusAktif: true,
  },
  {
    name: "Diah Nadiatul Jannah",
    image: "assets/img/mentor/diah.jpg",
    alt: "Gambar kak Diah Nadiatul Jannah",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/diah.html",
    statusAktif: true,
  },
  {
    name: "Sasmitaningtyas",
    image: "assets/img/mentor/Sasmitaningtiyas.webp",
    alt: "Gambar kak Sasmitaningtyas",
    role: "Online Mentor",
    url: "https://www.dialogika.co/mentor/Sasmitaningtyas.html",
    statusAktif: true,
  },
  {
    name: "Ibnu Fanhar Wibowo",
    image: "assets/img/mentor/Ibnu-Fanhar-Wibowo.webp",
    alt: "Gambar kak Ibnu Fanhar Wibowo",
    role: "Online & Offline Mentor",
    url: "https://www.dialogika.co/mentor/ibnu-fanhar-wibowo.html",
    statusAktif: true,
  },
  {
    name: "Anak Agung Ari Cahya Wibawa",
    image: "assets/img/mentor/Anak-Agung-Ari-Cahya-Wibawa.webp",
    alt: "Gambar kak Anak Agung Ari Cahya Wibawa",
    role: "Offline Mentor",
    url: "https://www.dialogika.co/mentor/anak-agung.html",
    statusAktif: true,
  },
  // { Inactive
  //   name: "Rahmat Kurnia (Erka)",
  //   image: "https://coacherka.com/gallery_gen/b7569f7c656bef1a435483126ca04976_940x940_fit.jpg?ts=1724281851",
  //   alt: "Gambar kak Rahmat Kurnia",
  //   role: "Online Mentor",
  //   url: "https://www.dialogika.co/mentor/rahmat-kurnia.html",
  //   statusAktif: true,
  // },
  // {
  //   name: "Naila Salma Al Fariha",
  //   image: "assets/img/mentor/Naila-Salma-Al-Fariha.webp",
  //   alt: "Kak Naila Salma al fariha",
  //   role: "Offline Mentor",
  //   url: "https://www.dialogika.co/mentor/naila-salma.html",
  //   statusAktif: true,
  // },
];

//
class MentorList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // Sort data mentor secara alphabet berdasarkan nama
    const sortedMentors = mentorData.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    // Filter hanya mentor yang aktif
    const activeMentors = sortedMentors.filter((m) => m.statusAktif);
    let mentorHTML = "";
    activeMentors.forEach((mentor) => {
      mentorHTML += `
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch mentor-card" data-aos="fade-up" data-aos-delay="100">
        <div class="team-member">
          <div class="member-img">
            <img style="width: 300px; height: 306px; object-fit: cover; object-position: top;"
              src="${mentor.image}" class="img-fluid" alt="${mentor.alt}">
          </div>
          <div class="member-info">
            <h4>${mentor.name}</h4>
            <span>${mentor.role}</span>
            <div class="card-buttons">
              <button data-section="#about"
                onclick="window.location.href='${mentor.url}'"
                class="is-active">
                <i class="bi bi-person-circle"></i> About Me
              </button>
            </div>
          </div>
        </div>
      </div>
      `;
    });

    // Sisipkan mentor ke dalam container (pastikan markup HTML target sudah ada)
    this.innerHTML = `<div class="container"><div class="row">${mentorHTML}</div></div>`;
  }
}
customElements.define("mentor-list", MentorList);
