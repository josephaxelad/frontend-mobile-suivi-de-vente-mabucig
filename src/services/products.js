import axios from 'axios';
import { api } from '../constants';
import NetInfo from "@react-native-community/netinfo";
import Realm, { BSON } from "realm";
import { updateProductsAction } from '../store/actions/productsActions';
import { ProductSchema } from '../models/Product';
import { MarkEmbeddedSchema } from '../models/Embedded/Mark';

export const getProducts = () => (dispatch) => {
    NetInfo.fetch()
    .then(async state=>{
        if (state.isInternetReachable) {
            axios.get(api+'product/getAll/')
            .then(async res =>{
                // Update
                dispatch(updateProductsAction(res.data))

                // Update la sauvegarde
                // await updateProductsSaved(res.data)
            })
            .catch(error =>{
                console.log(error)
            })
        } else {
            // // Récuperer les semi-grossistes sauvegardés
            // const productsSaved = await getProductsSaved()

            // // Update
            // dispatch(updateProductsAction(productsSaved))
        }
    })
}

export const updateProductsSaved = async(products) => {
    const realm = await Realm.open({schema: [ProductSchema,MarkEmbeddedSchema],deleteRealmIfMigrationNeeded: true});
    realm.write(()=>{realm.delete(realm.objects("Product"))})
    products.forEach(product => {
        product._id = BSON.ObjectID(product._id)
        product.mark._id = BSON.ObjectID(product.mark._id)
        realm.write(() => {
            realm.create("Product", {...product });
          });
    });
    realm.close();
}

export const getProductsSaved = async() => {
    const realm = await Realm.open({schema: [ProductSchema,MarkEmbeddedSchema],deleteRealmIfMigrationNeeded: true});
    const productsSaved = realm.objects("Product")
    realm.close();
    return productsSaved
}