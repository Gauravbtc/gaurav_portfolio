const INITIAL_STATE ={
  contactNew: {contact: null, error:null, loading: false,success: false,message: null}
};

const contacts = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case 'CREATE_CONTACT':
      return {...state, contactNew: { contact: null, error: null, loading: true,success: false,message: null}}
    case 'CREATE_CONTACT_SUCCESS':
      return {...state, contactNew: { contact: action.payload, error: null, loading: false,success: true,message: "Contact Created Successfully"}}
    case 'CREATE_CONTACT_FAILURE':
      error = action.payload 
      return {...state, contactNew: { contact: null,error: error, loading: false,message: "Errors during contact creation",success: false}}
  
    default: 
      return state;  
  }
}
export default contacts;