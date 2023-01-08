const speakers = [
  {
    name: 'Robert Goddard',
    title: 'Physicist at Worcester Polytechnic Institute',
    paragraph: "American engineer, professor, physicist, and inventor who is credited with creating and building the world's first liquid-fueled rocket.",
    image: './images/robert_goddard.png',

  },
  {
    name: 'Mary Jackson',
    title: ' Mathematician and Aerospace engineer at (NACA)',
    paragraph: 'She worked to help women and other minorities to advance their careers, including advising them how to study in order to qualify for promotions. She participated in Project Mercury helping to do complex calculations without computers.',
    image: './images/mary_jackson.png',
  },
  {
    name: 'Sergei Korolev',
    title: 'Rocket engineer, Chief Designer of the Soviet space program',
    paragraph: 'He was involved in the development of the R-7 Rocket, Sputnik 1, launching Laika, Sputnik 3, the first human-made object to make contact with another celestial body, Belka and Strelka, the first human being, Yuri Gagarin, into space, Voskhod 1, and the first person, Alexei Leonov, to conduct a spacewalk.',
    image: './images/sergei_korolev.png',
  },
  {
    name: 'Wernher Von Braun',
    title: 'Chief architect of the Apollo Saturn V rocket',
    paragraph: 'Von Braun is widely seen as the "father of space travel",the "father of rocket science" or the "father of the American lunar program".',
    image: './images/wernher_von_braun.png',
  },
  {
    name: 'Elon Musk',
    title: 'Founder, CEO and chief engineer of SpaceX',
    paragraph: 'His company manufactures the Falcon 9, Falcon Heavy, and Starship launch vehicles, several rocket engines, Cargo Dragon and Crew Dragon spacecraft, and Starlink communications satellites.',
    image: './images/elon_musk.png',
  },
  {
    name: 'Tom Mueller',
    title: 'Founder, CEO, of Impulse Space',
    paragraph: "He is considered one of the world's leading spacecraft propulsion experts and holds several United States patents for propulsion technology.",
    image: './images/tom_mueller.png',
  },
];
function loadElements() {
  const container = document.querySelector('.featured__speakers');
  let content = '';
  let count = 1; // Variable to count the speakers
  speakers.forEach((e) => {
    if (count <= 2) {
      content += `
      <section class="speaker" id="${count}">
      <img src="${e.image}" alt="${e.name}">
      <div class="speaker__text">
        <h2 class="speaker__name">${e.name}</h2>
        <h3 class="speaker__title">${e.title}</h3>
        <div class="speaker__line"></div>
        <p class="speaker__intro">${e.paragraph}</p>
      </div>
      </section>
  
  `;
    } else {
      content += `
    <section class="speaker hide desktop__show" id="${count}" >
    <img src="${e.image}" alt="${e.name}">
    <div class="speaker__text">
      <h2 class="speaker__name">${e.name}</h2>
      <h3 class="speaker__title">${e.title}</h3>
      <div class="speaker__line"></div>
      <p class="speaker__intro">${e.paragraph}</p>
    </div>
    </section>
    `;
    }

    if (count === 2) {
      content += `
    <h4 class="speaker__more desktop__hide">MORE 
    <img src='./images/arrow_down.png' alt='arrow down'>
    </h4>
  `;
    }
    count += 1;
  });
  // Add the LESS button
  content += `
<h4 class="speaker__less hide desktop__hide">LESS
<img src='./images/arrow_up.png' alt='arrow up'>
</h4>
`;

  container.innerHTML = content;
}

function moreClick() {
  document.querySelector('.speaker__more').classList.add('hide');

  for (let i = 3; i <= speakers.length; i += 1) {
    document.getElementById(i).classList.remove('hide');
  }

  document.querySelector('.speaker__less').classList.remove('hide');
}

function lessClick() {
  for (let i = 3; i <= speakers.length; i += 1) {
    document.getElementById(i).classList.add('hide');
  }

  document.querySelector('.speaker__less').classList.add('hide');
  document.querySelector('.speaker__more').classList.remove('hide');
}

loadElements();

document.querySelector('.speaker__more').addEventListener('click', moreClick);
document.querySelector('.speaker__less').addEventListener('click', lessClick);
