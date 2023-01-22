// import Realm from "realm";

export const SemiWholesalerSchema = {
    name: "SemiWholesaler",
    properties: {
        _id: "objectId",
        idAccount: "string",
        idWholesaler: "string",
        name: "string",
        phone1: "string?",
        phone2: "string?",
        picture: "string?",
        address: "AddressEmbedded",
        isDisabled: "bool?"
    },
    primaryKey: "_id",
  };

  