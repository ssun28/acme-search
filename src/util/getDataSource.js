import { DATA_PATH } from '../const';
import axios from 'axios';

async function readData(map) {
  for (let path of DATA_PATH) {
    const response = await axios.get(`${path}`);
    const resData = response.data[Object.keys(response.data)[0]];

    for (let info of resData) {
      const matchingTerms = info.matching_terms;

      for (let term of matchingTerms) {
        if (!map.has(term)) {
          const infoArray = [];
          map.set(term, infoArray);
        }
        map.get(term).push(info);
      }
    }
  }
}

function getDataSource() {
  const map = new Map();

  return {
    loadData: async () => await readData(map),

    getItem: (index) => {
      return map.get(index);
    },

    // deep copy map
    getItems: () => {
      const res = new Map(map);
      return res;
    },
  }
}

export default getDataSource();