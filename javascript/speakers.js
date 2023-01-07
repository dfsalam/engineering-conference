const speakers = [
  {
    name: 'Robert Goddard',
    title: 'Physicist at Worcester Polytechnic Institute',
    paragraph: "American engineer, professor, physicist, and inventor who is credited with creating and building the world's first liquid-fueled rocket.",
    image: '../images/robert_goddard.png',

  },
  {
    name: 'Mary Jackson',
    title: ' Mathematician and Aerospace engineer at (NACA)',
    paragraph: 'She worked to help women and other minorities to advance their careers, including advising them how to study in order to qualify for promotions. She participated in Project Mercury helping to do complex calculations without computers.',
    image: '../images/mary_jackson.png',
  },
  {
    name: 'Sergei Korolev',
    title: 'Rocket engineer, Chief Designer of the Soviet space program',
    paragraph: 'He was involved in the development of the R-7 Rocket, Sputnik 1, launching Laika, Sputnik 3, the first human-made object to make contact with another celestial body, Belka and Strelka, the first human being, Yuri Gagarin, into space, Voskhod 1, and the first person, Alexei Leonov, to conduct a spacewalk.',
    image: '../images/sergei_korolev.png',
  },
  {
    name: 'Wernher Von Braun',
    title: 'Chief architect of the Apollo Saturn V rocket',
    paragraph: 'Von Braun is widely seen as the "father of space travel",the "father of rocket science" or the "father of the American lunar program".',
    image: '../images/wernher_von_braun.png',
  },
  {
    name: 'Elon Musk',
    title: 'Founder, CEO and chief engineer of SpaceX',
    paragraph: 'His company manufactures the Falcon 9, Falcon Heavy, and Starship launch vehicles, several rocket engines, Cargo Dragon and Crew Dragon spacecraft, and Starlink communications satellites.',
    image: '../images/elon_musk.png',
  },
  {
    name: 'Tom Mueller',
    title: 'Founder, CEO, of Impulse Space',
    paragraph: "He is considered one of the world's leading spacecraft propulsion experts and holds several United States patents for propulsion technology.",
    image: '../images/tom_mueller.png',
  },
];
function loadElements() {
  const container = document.querySelector('.featured__speakers');
  let content = `
  <h1>Featured Speakers</h2>
  <div class="main__line"></div>`;
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
    <section class="speaker hide" id="${count}" >
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
    <h4 class="speaker__more">MORE 
    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="0.654541" y="0.343384" width="8" height="5.33333" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_76_149" transform="scale(0.0666667 0.1)"/>
    </pattern>
    <image id="image0_76_149" width="15" height="10" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMEM2QUUyNzMzMDQxMUU1OUQyQ0NDMDJGMDc1OEMxOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMEM2QUUyODMzMDQxMUU1OUQyQ0NDMDJGMDc1OEMxOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1NDUwQjFBMzJFNTExRTU5RDJDQ0MwMkYwNzU4QzE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEwQzZBRTI2MzMwNDExRTU5RDJDQ0MwMkYwNzU4QzE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+05HTxAAAAOVJREFUeNpi/BBo28fAwJAFxDX86w71MBAAH4PsSoBUCxBPYwRq/gNkMEPlsoEGTMOjEWTJVCj3LxOQuIEkPxmoIAyHRpD4ZCShGyDNIMG3UAEQfwlQoSuaRhB/CVSeAao+jPH///8gSXMgZz8Qc0IlvwGxE9ALJ6Fy+4CYCyr3HYgdQXJgzVDT3YHUZiBmhSp6A8TpQDwTiEWgYr+B2BeocSeIA9cMNSACSC0DiWPxNkhhFFDjCgYkP8IBVCIfR2DnI2vE0Aw1ABSiTWjCTVBxNLcAnY0NA+O/B4h/AXEvLjUAAQYAU8l2Ku4UmuwAAAAASUVORK5CYII="/>
    </defs>
    </svg>
    </h4>
  `;
    }
    count += 1;
  });
  // Add the LESS button
  content += `
<h4 class="speaker__less hide">LESS
<img src='../images/arrow_up.png' alt='arrow up'>
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
