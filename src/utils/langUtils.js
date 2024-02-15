// import plArticles from '../assets/data/pl/entries.json';
import plArticles from '../components/AllEntries/DataEntries';
import enArticles from '../assets/data/en/entries.json';

const getArticles = (lang) => {
  switch (lang) {
    case "en":
      return enArticles;
    default:
      return plArticles;
  }
}

export {
  getArticles
}
