export const getUserCards = async () => {
  try {
    const promise = await fetch('http://localhost:5000/api/v1/user-cards/14');

    if (promise.ok) {
      const response = promise.json();
      return response;
    } else {
      throw new Error('Cards not found', 404);
    }
  } catch (error) {
    console.error(error.message);
  }
};
