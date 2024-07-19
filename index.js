const aboutCode = [
  {
    title: "The WET Codbase",
    date: "October 4th, 2020",
    read: "11 min read",
    text: "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
  },

  {
    title: "Goodby, Clean Code",
    date: "November 22nd, 2019",
    read: "5 min read",
    text: "Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.",
  },

  {
    title: "My Decade In Review",
    date: "August 11th, 2018",
    read: "5 min read",
    text: "Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.",
  },

  {
    title: "What Are The React Team Principles",
    date: "June 4th, 2015",
    read: "5 min read",
    text: "Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.",
  },
];

const reviewCont = document.querySelector(".review-container");

const allReviewDetails = (items) => {
  items.forEach((item) => {
    const reviewDet = document.createElement("div");
    reviewDet.className = "review-details";
    reviewDet.innerHTML = `<h2>${item.title}</h2>
          <p class="time">
            <i>${item.date} <span>${item.read}</span></i>
          </p>
          <p class="text">
            ${item.text}
          </p>`;

    reviewCont.appendChild(reviewDet);
  });
};
allReviewDetails(aboutCode);

const darkModeToggle = () => {
  const darkMode = document.body;
  darkMode.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("dark-mode");
};

const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  darkModeToggle();
});
