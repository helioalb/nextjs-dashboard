export const readUsername = async (_: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const userName = formData.get('userName')?.toString();

  if (userName === 'helio')
    return { success: true, message: 'Success' }

  return { success: false, message: 'Username incorrect!' };
};
