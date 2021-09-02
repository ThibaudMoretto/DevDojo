export const initialState = {
  datas: {
    categories: [
      { key: 'Front-End', text: 'Front-End', value: 1 },
      { key: 'Back-End', text: 'Back-End', value: 2 },
      { key: 'Autre', text: 'Autre', value: 3 },
    ],

    technologies: [
      { key: 'Javascript', text: 'Javascript', value: 1 },
      { key: 'ReactJS', text: 'ReactJS', value: 2 },
      { key: 'NodeJS', text: 'NodeJS', value: 3 },
      { key: 'SQL', text: 'SQL', value: 4 },
      { key: 'Angular', text: 'Angular', value: 5 },
      { key: 'Html', text: 'Html', value: 6 },
      { key: 'Css', text: 'Css', value: 7 },
      { key: 'Figma', text: 'Figma', value: 8 },
      { key: 'Bootstrap', text: 'Bootstrap', value: 9 },
      { key: 'Sass', text: 'Sass', value: 10 },
      { key: 'PHP', text: 'PHP', value: 11 },
      { key: 'VueJS', text: 'VueJS', value: 12 },
      { key: 'Git', text: 'Git', value: 13 },
      { key: 'Github', text: 'Github', value: 14 },
      { key: 'Npm', text: 'Npm', value: 15 },
      { key: 'Aws', text: 'Aws', value: 16 },
      { key: 'Wordpress', text: 'Wordpress', value: 17 },
      { key: 'Symphony', text: 'Symphony', value: 18 },
      { key: 'Java', text: 'Java', value: 19 },
      { key: 'Android', text: 'Android', value: 20 },
      { key: 'iOS', text: 'iOS', value: 21 },
    ],

    languages: [
      { key: 'Français', text: 'Français', value: 1 },
      { key: 'Anglais', text: 'Anglais', value: 2 },
      { key: 'Espagnol', text: 'Espagnol', value: 3 },
    ],

    levels: [
      { key: 'Débutant', text: 'Débutant', value: 1 },
      { key: 'Intermédiaire', text: 'Intermédiaire', value: 2 },
      { key: 'Confirmé', text: 'Confirmé', value: 3 },
      { key: 'Expert', text: 'Expert', value: 4 },
    ],

    free: [
      { key: 'Oui', text: 'Oui', value: true },
      { key: 'Non', text: 'Non', value: false },
    ],

    types: [
      { key: 'Vidéo', text: 'Vidéo', value: 1 },
      { key: 'Podcast', text: 'Podcast', value: 2 },
      { key: 'Livre', text: 'Livre', value: 3 },
      { key: 'PDF', text: 'PDF', value: 4 },
    ],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
