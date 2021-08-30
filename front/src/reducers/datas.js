export const initialState = {
  datas: {
    categories: [
      { key: "Front-End", text: "Front-End", value: 1 },
      { key: "Back-End", text: "Back-End", value: 2 },
      { key: "Autre", text: "Autre", value: 3 },
    ],

    technologies: [
      { key: "Javascript", text: "Javascript", value: 1 },
      { key: "ReactJS", text: "ReactJS", value: 2 },
      { key: "NodeJS", text: "NodeJS", value: 3 },
      { key: "SQL", text: "SQL", value: 4 },
    ],

    languages: [
      { key: "Français", text: "Français", value: 1 },
      { key: "Anglais", text: "Anglais", value: 2 },
      { key: "Espagnol", text: "Espagnol", value: 3 },
    ],

    levels: [
      { key: "Débutant", text: "Débutant", value: 1 },
      { key: "Intermédiaire", text: "Intermédiaire", value: 2 },
      { key: "Confirmé", text: "Confirmé", value: 3 },
      { key: "Expert", text: "Expert", value: 4 },
    ],

    free: [
      { key: "Oui", text: "Oui", value: true },
      { key: "Non", text: "Non", value: false },
    ],

    types: [
      { key: "Vidéo", text: "Vidéo", value: 1 },
      { key: "Podcast", text: "Podcast", value: 2 },
      { key: "Livre", text: "Livre", value: 3 },
      { key: "PDF", text: "PDF", value: 4 },
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
