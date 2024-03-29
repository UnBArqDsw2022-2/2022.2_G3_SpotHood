import { APISpothood } from "./BaseService";

// const x = 'https://api.github.com';

const spotHoodService = {
  getPeople: async () => {
    const res = await APISpothood.get("/condominium/pessoa/")
    return res.data
  },

  login: async (email, senha) => {

    const res = await APISpothood.post("/condominium/login/",
    {
      email,
      senha
    })

    return res.data
  },

  getNews: async () => {
    const res = await APISpothood.get("/condominium/aviso/")
    return res.data
  },

  createAccount: async (cpf, nome, email, telefone, senha, sexo, data_nascimento) => {

    await APISpothood.post("/condominium/pessoa/",
    {
      cpf,
      nome,
      email,
      telefone,
      senha,
      sexo,
      data_nascimento
    })

  },

  getCond: async () => {
    const res = await APISpothood.get("/condominium/condominio/")

    return res.data
  },

  createNews: async (cnpj, titulo, descricao) => {
    await APISpothood.post("/condominium/aviso/", {
      cnpj,
      titulo,
      descricao,
    })

  },

  createImovel: async (cpf, cnpj, informacao_complementar) => {
    await APISpothood.post("/condominium/imovel/", {
      cpf,
      cnpj,
      informacao_complementar
    })
  },

  getImoveis: async () => {
    const res = await APISpothood.get("/condominium/imovel/");

    return res.data;

  },
  
  getHousing: async() => {
    const res = await APISpothood.get("/condominium/espaco-habitacional/")
    return res.data
  },

  createHousing: async ({cnpj, description, name}) => {
    await APISpothood.post("/condominium/espaco-habitacional/", {
      cnpj,
      description,
      name,
    })
  }
}

export {
  spotHoodService
}