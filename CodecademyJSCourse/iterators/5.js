const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => animal === 'elephant');

const startsWithS = animals.findIndex(ani => ani.charAt(0) === 's');
