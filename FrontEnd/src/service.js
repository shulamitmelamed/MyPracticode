
process.env.API_ADRESS.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error('An error occurred:', error);
      return Promise.reject(error);
    }
  );

export default {
  getTasks: async () => {
    const result = await process.env.API_ADRESS.get(`/items`);
    return result.data;
  },

  addTask: async(newToDo)=>{
    console.log('addTask', newToDo)
    await process.env.API_ADRESS.post(`/items`, {name:newToDo,isComplete:false});
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete});
    await process.env.API_ADRESS.put(`/items/${id}`);
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await process.env.API_ADRESS.delete(`/items/${id}`);
  }
};

