import i18n from 'i18next';

/**
 * Return link to the image with correct translation
 * @param image
 * @returns string
 */
export const getLanguageImage = (image) => {
  return i18n.language === 'en' ? image.en : image.uk;
};
