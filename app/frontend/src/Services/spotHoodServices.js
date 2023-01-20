import { APISpothood } from "./BaseService";

// const x = 'https://api.github.com';

const spotHoodService = {
  teste: () => {
    APISpothood.get("users/yukioz").then((res) => {
      console.log("teste", res)
      return res.data
    })
  }
}

export {
  spotHoodService
}