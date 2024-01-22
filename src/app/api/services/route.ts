import axios from "axios";

interface Dragon {
  id: number;
  name: string;
  type: string;
}

const baseUrl = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1";

export const getDragons = async () => {
  const response = await axios.get(`${baseUrl}/dragon`);
  return response.data;
};

export const getDragon = async (id: string) => {
  const response = await axios.get(`${baseUrl}/dragon/${id}`);
  return response.data;
};

export const registerDragon = async (
  name: string,
  type: string,
  onRegister: (dragon: Dragon) => void
) => {
  const registeredDragon = { name, type };
  try {
    const response = await axios.post(`${baseUrl}/dragon`, registeredDragon);
    onRegister(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateDragon = async (
  id: string,
  name: string,
  type: string,
  onUpdate: (dragon: Dragon) => void
) => {
  const updatedDragon = { id, name, type };
  try {
    const response = await axios.put(`${baseUrl}/dragon/${id}`, updatedDragon);
    onUpdate(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const removeDragon = async (id: string) => {
  try {
    await axios.delete(`${baseUrl}/dragon/${id}`);
  } catch (error) {
    console.log(error);
  }
};
