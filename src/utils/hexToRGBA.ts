export const hexToRGBA = (hex:string | undefined, num:string) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = hex && parseInt(hex?.substring(0, 2), 16);
    const green =hex && parseInt(hex?.substring(2, 4), 16);
    const blue =hex && parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba1 = `rgba(${red}, ${green}, ${blue}, 0.75)`;
    const rgba2 = `rgba(${red}, ${green}, ${blue}, 0.33)`;
    if (num === "1") {
      return rgba1;
    } else {
      return rgba2;
    }
  };