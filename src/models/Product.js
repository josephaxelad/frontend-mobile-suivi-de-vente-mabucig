// import Realm from "realm";

export const ProductSchema = {
    name: "Product",
    properties: {
        _id: "objectId",
        sku: "string",
        price: "int",
        numberByPack: "int",
        picture: "string",
        mark: "MarkEmbedded",
        idCodeQr: "string?",
        isDisabled: "bool?"
    },
    primaryKey: "_id",
  };

  