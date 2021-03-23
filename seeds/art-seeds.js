const { Art } = require('../models');

const artData = [
    {
        name: 'sadie',
        smImageUrl: 'https://i.postimg.cc/8PmDdk6T/Screen-Shot-2020-12-29-at-9-24-05-PM.png',
        lgImageUrl: 'https://i.postimg.cc/QxxYPjz8/Screen-Shot-2020-12-29-at-9-24-05-PM.png',
        description: "'Sadie', watercolor on paper, 2020",
        category: 'people',
        year: 2020
    },
];

const seedArt = () => Art.bulkCreate(artData);

module.exports = seedArt;