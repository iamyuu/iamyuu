const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

export { formatDate as f };
//# sourceMappingURL=date-d2ab7be4.mjs.map
