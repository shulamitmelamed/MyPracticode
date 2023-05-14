import axios from "axios";

const apiClient=axios.create({
  baseURL:"https://practicodeserver-gfpp.onrender.com"
})
apiClient.interceptors.response.use(
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
    const result = await apiClient.get(`/items`);
    return result.data;
  },

  addTask: async(newToDo)=>{
    console.log('addTask', newToDo)
    await apiClient.post(`/items`, {name:newToDo,isComplete:false});
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete});
    await apiClient.put(`/items/${id}`);
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await apiClient.delete(`/items/${id}`);
  }
};

