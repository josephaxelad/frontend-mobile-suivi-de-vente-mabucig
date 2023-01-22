// import Realm from "realm";

export const ProductEmbeddedSchema = {
    name: "ProductEmbedded",
    embedded: true,
    properties: {
        _id: "objectId?",
        sku: "string",
        price: "int",
        numberByPack: "int",
        picture: "string",
        mark: "MarkEmbedded",
        idCodeQr: "string?",
        isDisabled: "bool?"
    },
  };

  