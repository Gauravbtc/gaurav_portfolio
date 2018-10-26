import Contact from '../component/contact';
import { connect } from 'react-redux';
import { createContact,createContactSuccess ,createContactFailure} from '../action/contact_action';


function mapStateToProps(state){
  return{
    contactNew: state.contact.contactNew 
  }
}

function matchDispatchToProps(dispatch){
  return {
    createContact: (params) => {
      (dispatch(createContact(params)).payload)
        .then((response) => {
          if(!response.error && response.status === 200){
            dispatch(createContactSuccess(response.data));
          }
          else{
            dispatch(createContactFailure(response.data));
          }
        })
        .catch((err)=>{
          dispatch(createContactFailure(err))
      })
    }
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(Contact);