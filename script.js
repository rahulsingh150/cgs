document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(
    ".aboutDTab, .visionMissionTab, .academicProgramTab, .facultyTab, .facilitiesTab, .achievementTab, .contactTab"
  );

  // Check if the number of tabs and sections match
  if (tabs.length !== sections.length) {
    console.error("The number of tabs and sections does not match.");
    return;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Hide all sections
      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      // Show the correct section based on tab index
      if (sections[index]) {
        // Additional check if section exists
        sections[index].classList.remove("hidden");
      }
    });
  });
});
