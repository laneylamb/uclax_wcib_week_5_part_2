const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'Once upon a time, it was a beautiful day in London (94 degrees Fahrenheit, to be exact), so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: is used to cool English weather, and it was a hot day.';
let insertX = ['the Prime Minister','the Queen','Charles Dickens'];
let insertY = ['Hyde Park','the British Library','Piccadilly Circus'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const temperature =  Math.round((94-32) * 5 / 9) + ' degrees Centigrade';
    newStory = newStory.replace('94 degrees Fahrenheit',temperature);
  }

  if(document.getElementById("wisteria").checked) {
    newStory = newStory.replace('Once upon a time','After a stretch of particularly dreadful weather');
  }

  if(document.getElementById("hibiscus").checked) {
    newStory = newStory.replace('Once upon a time','Once upon a time');
  }

  if(document.getElementById("rose").checked) {
    newStory = newStory.replace('Once upon a time','Bright with sunshine and fresh blossoms');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
