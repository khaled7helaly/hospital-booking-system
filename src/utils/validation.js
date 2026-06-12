export const isValidPhone = (phone) => /^[0-9+\-\s]{7,18}$/.test(phone.trim());

export const isValidNationalId = (idNumber) => /^[0-9A-Za-z]{6,20}$/.test(idNumber.trim());
