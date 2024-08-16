// JAVASCRIPT KAK YOGA TAPI BELUM JALAN

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const mentorContainer = document.querySelector(".container .row");
  const mentorArray = Array.from(mentorContainer.children);

  const updateList = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    mentorContainer.innerHTML = ""; //bersihkan container mentor

    //mulai filter
    const filteredMentor = mentorArray.filter((item) => {
      const getName = item.querySelector(h4);
      return getName.innerText.toLowerCase().includes(searchTerm);
    });

    filteredMentor.forEach((item) => {
      item.style.display = "block";
      mentorContainer.appendChild(item); //masukkan mentor ke container
    });
  };

  searchInput.addEventListener("input", updateList);
});

// JAVASCRIPT NYOBA SENDIRI TAPI BELUM JALAN

// const searchInput = document.getElementById("search");
// const mentorContainer = document.querySelector(".container .team-member");

// searchInput.addEventListener("input", (i) => filterData(i.target.value));

// function filterData(search) {
//   item.forEach((item) => {
//     if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
//       item.classList.remove("d-none");
//     } else {
//       item.classList.add("d-none");
//     }
//   });
// }
