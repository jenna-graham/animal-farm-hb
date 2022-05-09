import { findById } from '../utils.js';
import { animals } from '../data.js';

console.log('hello from animal detail page');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'));

const animal = findById(params.get('id'), animals);
console.log(animal);

const animalName = document.getElementById('animal-name');
animalName.textContent = animal.name;

const animalImage = document.createElement('img');
animalImage.src = `../assets/${animal.type}.svg`;

const animalSpan = document.createElement('span');
animalSpan.textContent = animal.says;
animalName.append(animalImage, animalSpan);
