// Fitur search mentor di homepage mentor
document.addEventListener("DOMContentLoaded", function () {
  // Ambil container mentor dari custom element yang sudah dirender
  const mentorContainer = document.querySelector("mentor-list .row");
  // Ambil seluruh mentorCard yang telah di-generate
  const mentorArray = Array.from(mentorContainer.children);

  const searchInput = document.getElementById("search");

  const updateList = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    // Bersihkan container agar bisa menampilkan hasil pencarian
    mentorContainer.innerHTML = "";

    // Filter mentor berdasarkan nama (case-insensitive)
    const filteredMentor = mentorArray.filter((item) => {
      const nameElement = item.querySelector("h4");
      return nameElement.innerText.toLowerCase().includes(searchTerm);
    });

    // Tampilkan mentor yang nama/isi h4-nya sama dengan value di input
    filteredMentor.forEach((item) => {
      // Pastikan class tampilan mengatur visibilitas
      item.classList.remove("d-none");
      item.classList.add("d-flex");
      mentorContainer.appendChild(item);
    });
  };

  searchInput.addEventListener("input", updateList);

  // Show more mentor logic
  const showMoreButton = document.getElementById("view-more");
  const visibleMentor = 8;
  let currentShowMentor = visibleMentor;

  mentorArray.slice(visibleMentor).forEach((mentor) => {
    mentor.classList.remove("d-flex");
    mentor.classList.add("d-none");
  });

  showMoreButton.addEventListener("click", () => {
    const remainingMentor = mentorArray.length - currentShowMentor;
    const mentorToShow = Math.min(remainingMentor, visibleMentor);

    mentorArray.slice(currentShowMentor, currentShowMentor + mentorToShow).forEach((mentor) => {
      mentor.classList.remove("d-none");
      mentor.classList.add("d-flex");
    });

    currentShowMentor += mentorToShow;

    if (currentShowMentor >= mentorArray.length) {
      showMoreButton.style.display = "none";
    }
  });
});
