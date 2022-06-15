export const toastMessege = (context: string,item='Project') => {
  const lowercased = context.toLowerCase();
  return {
    pending: `${context} loading...⏳`,
    error: `${context} failed 🤯`,
    success: `${item} ${lowercased} successful 😊`,
  };
};