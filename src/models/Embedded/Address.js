export const AddressEmbeddedSchema = {
    name: "AddressEmbedded",
    embedded: true,
    properties: {
        name: "string?",
        neighborhood: "string",
        gpsLat: "string?",
        gpsLong: "string?",
        city: "CityEmbedded?",
    },
  };