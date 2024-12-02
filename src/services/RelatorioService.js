import api from './axiosConfig';

export const listarRelatorios = async () => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await api.get('/relatorios/tickets-fechados', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao listar relatórios:', error);
    throw error;
  }
};

export const buscarRelatorioPorTipo = async (tipoVeiculo) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await api.get(`/relatorios/tickets-fchado-tipo/${tipoVeiculo}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar relatórios por tipo:', error);
    throw error;
  }
};