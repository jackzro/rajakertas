export const handleBeli = (value: any) => {
  window.open(`https://wa.me/${value.phone}/?text=${value.message}`, "_blank");
};
