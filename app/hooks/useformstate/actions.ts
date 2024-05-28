export type Validation = {
  success: boolean;
  message: string;
};

export const recordInput = async (
  previousState: Validation,
  formData: FormData,
) => {
  //the previousState variable contains the last recorded value of the user's input
  console.log('previous recorded state ', previousState);
  //use the formData variable to get values:
  const userName = formData.get('userName');
  const email = formData.get('email');

  if ((userName?.length ?? 0) < 3)
    return {
      success: false,
      message: 'Username must be at least 3 characters long'
    }

  return { success: true, message: 'Success' };
};

