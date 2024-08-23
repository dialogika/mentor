document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const mentorContainer = document.querySelector(".container .row");
  const mentorArray = Array.from(mentorContainer.children);

  // Search logic
  const updateList = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    mentorContainer.innerHTML = ""; //bersihkan container mentor

    //mulai filter
    const filteredMentor = mentorArray.filter((item) => {
      const getName = item.querySelector("h4");
      return getName.innerText.toLowerCase().includes(searchTerm);
    });

    filteredMentor.forEach((item) => {
      item.classList.replace("d-none", "d-flex");
      mentorContainer.appendChild(item); // Masukkan mentor ke container
    });
  };

  searchInput.addEventListener("input", updateList);

  // Show more mentor logic
  const showMoreButton = document.getElementById("view-more");
  const visibleMentor = 8;
  let currentShowMentor = visibleMentor;

  mentorArray.slice(visibleMentor).forEach((mentor) => {
    mentor.classList.replace("d-flex", "d-none");
  });

  showMoreButton.addEventListener("click", () => {
    const remainingMentor = mentorArray.length - currentShowMentor;
    const mentorToShow = Math.min(remainingMentor, visibleMentor);

    mentorArray
      .slice(currentShowMentor, currentShowMentor + mentorToShow)
      .forEach((mentor) => {
        mentor.classList.replace("d-none", "d-flex");
      });

    currentShowMentor += mentorToShow;

    if (currentShowMentor >= mentorArray.length) {
      showMoreButton.style.display = "none";
    }
  });
});
