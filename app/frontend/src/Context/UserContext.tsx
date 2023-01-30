import React, {useState, createContext, ReactNode} from "react";

interface Props {
  children: ReactNode
}

interface CondominiumData {
  cpf: string;
  cnpj: string;
  nome_fantasia: string;
  cep: string;
  numero: number;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface HouseData {
  cpf: string;
  cnpj: string;
  informacao_complementar: string;
}

interface UserData {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  sexo: string;
  data_nascimento: Date;
}

interface UserContextData {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

interface CondominiumContextData {
  condominium: CondominiumData;
  setCondominium: React.Dispatch<React.SetStateAction<CondominiumData>>;
}

interface HouseContextData {
  house: HouseData;
  setHouse: React.Dispatch<React.SetStateAction<HouseData>>;
}

const UserContext = createContext<any>(null);
const CondominiumContext = createContext<any>(null);
const HouseContext = createContext<any>(null);

const UserProvider: React.FC<Props> = ( props ) => {
  const [user, setUser] = useState<any>({});
  const [condominium, setCondominium] = useState<any>({})
  const [house, setHouse] = useState<any>({})

  return (
    <UserContext.Provider value={{ user, setUser}}>
      <CondominiumContext.Provider value={{condominium, setCondominium}}>
        <HouseContext.Provider value={{house, setHouse}}>
          {props.children}
        </HouseContext.Provider>
      </CondominiumContext.Provider>
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserProvider
}