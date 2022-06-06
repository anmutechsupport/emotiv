// -------------------------------------------------------
// Synthetic Data Generation
// -------------------------------------------------------

// let looping = false;
export const ondata = (decoded: string) => {
  let channelData = decoded.split(",").map((str) => Number.parseFloat(str)); // Organize Decoder Output into a Float Array
  return channelData; // Pass Array to DataTracks
};

// -------------------------------------------------------
// Template Callbacks
// -------------------------------------------------------

// const cortexDevice = {
//   // Generic
//   label: "cortex",
//   onconnect: () => {
//     console.log("Cortex Connected");
//   },
//   protocols: [],
// };

export const onconnect = () => {
  console.log("Cortex Connected");
};

export const ondisconnect = async (device: any) => {
  //   looping = false;
  console.log("Device disconnected", device);
};

export const onerror = console.error;

// -------------------------------------------------------
// Template Encoder / Decoder Specifications
// -------------------------------------------------------

let encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");
export const encode = (msg: any, _: string) => {
  return encoder.encode(msg);
};

export const decode = (msg: any, _: string) => {
  return decoder.decode(msg);
};
