import axios from 'axios';
import { api } from '../constants';
import NetInfo from "@react-native-community/netinfo";
import Realm, { BSON } from "realm";
import {CityEmbeddedSchema} from '../models/Embedded/City'
import {AddressEmbeddedSchema} from '../models/Embedded/Address'
import {SemiWholesalerSchema} from '../models/SemiWholesaler'
import { updateSemiWholesalersAction } from '../store/actions/semiWholesalersActions';
import { getCurrentUserSaved } from './auth';

// const SemiWholesalersSchema = {
//     name: "SemiWholesalers",
//     properties: {
//       _id: "string",
//       name: "string",
//       phone1: "string?",
//       phone2: "string?",
//     //   address: {
//     //     name: "string",
//     //     neighborhood: "string",
//     //     city: {name: "string"}
//     //   }
//     },
//     primaryKey: "_id",
//   };
//   const AddressSchema = {
//     name: "Address",
//     embedded: true, 
//     properties: {
//         name: "string",
//         neighborhood: "string",
//         city: "City",
//     },
//   };

//   const CitySchema = {
//     name: "City",
//     embedded: true, 
//     properties: {
//         name: "string",
//     },
//   };


 export const getSemiWholesalers = () => (dispatch,getState) => { 
    NetInfo.fetch()
    .then(async state=>{
        if (state.isInternetReachable) {
            // const currentUser = await getCurrentUserSaved();currentUser._id
            axios.get(api+'semi-wholesaler/getByWholesaler/'+getState().currentUserReducer.currentUser._id)
            .then(async res =>{
                
                // Update
                dispatch(updateSemiWholesalersAction(res.data))

                // // Update la sauvegarde
                // await updateSemiWholesalersSaved(res.data)
                

            })
            .catch(error =>{
                console.log(error)
            })
        } else {
            // // Récuperer les semi-grossistes sauvegardés
            // const semiWholesalersSaved = await getSemiWholesalersSaved()

            // // Update
            // dispatch(updateSemiWholesalersAction(semiWholesalersSaved))
        }
    })
    
 }

 const updateSemiWholesalersSaved = async(semiWholesalers) => { 
    const realm = await Realm.open({schema: [SemiWholesalerSchema,AddressEmbeddedSchema,CityEmbeddedSchema],deleteRealmIfMigrationNeeded: true});
    realm.write(()=>{realm.delete(realm.objects("SemiWholesaler"))})
    semiWholesalers.forEach(semiWholesaler => {
        semiWholesaler._id = BSON.ObjectID(semiWholesaler._id)
        semiWholesaler.address.city._id = BSON.ObjectID(semiWholesaler.address.city._id)
        realm.write(() => {
            realm.create("SemiWholesaler", {...semiWholesaler });
          });
    });
    realm.close();
    
  }

 const getSemiWholesalersSaved = async() => { 
    const realm = await Realm.open({schema: [SemiWholesalerSchema,AddressEmbeddedSchema,CityEmbeddedSchema],deleteRealmIfMigrationNeeded: true});
    const semiWholesalersSaved = realm.objects("SemiWholesaler")
    // console.log(semiWholesalersSaved)
    realm.close();
    return semiWholesalersSaved
  }
