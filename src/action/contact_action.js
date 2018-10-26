import axios from 'axios';
const appHost = process.env.REACT_APP_API_HOST;

export const createContact = (params) => {
  const request = axios({
    method: 'post',
    url: `${appHost}/v1/contacts`,
    data: params
  });
  return {
    type: "CREATE_CONTACT",
    payload: request
  }
} 

export const createContactSuccess = (data) =>{
  return{
    type: "CREATE_CONTACT_SUCCESS",
    payload: data
  }
}

export const createContactFailure = (err) =>{
  return{
    type: "CREATE_CONTACT_FAILURE",
    payload: err
  }
}