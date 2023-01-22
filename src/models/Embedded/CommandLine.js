export const CommandLineEmbeddedSchema = {
    name: "CommandLineEmbedded",
    embedded: true,
    properties: {
        qte: "int",
        price: "int",
        productName: "string?",
        idProduct: "objectId?",
        product : "MarkEmbedded"
    }
  };