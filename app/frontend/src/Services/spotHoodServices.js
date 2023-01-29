import { APISpothood } from "./BaseService";

// const x = 'https://api.github.com';

const spotHoodService = {
  getPeople: async () => {

    console.log("teste")

    const res = await APISpothood.get("/condominium/pessoa/")

    return res.data
  }
}

export {
  spotHoodService
}