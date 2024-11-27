const generateCouponCode = (title, expiryDate) => {
  const formattedTitle = title.toUpperCase().replace(/\s+/g, '');

  const formattedExpiryDate = expiryDate.toISOSring().slice(0, 10).split('-').reverse().join('');

  const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
  return couponCode;
};
