'use client';

import { useFormState, useFormStatus } from "react-dom";
import { readUsername } from "./actions";

const Child = () => {
  const data = useFormStatus();
  return (
    <>
      <p>Please enter your username</p>
      <input name="userName" />
      <br />

      <input className="bg-blue-500 my-4 p-4 text-white disabled:opacity-75" type="submit" disabled={data.pending} />
    </>
  );
}

export default function Page() {
  const [data, formAction] = useFormState(readUsername, {
    success: false,
    message: 'Please, enter a valid username.'
  });

  return (
    <div className="m-4">
      <form action={formAction}>
        <Child />
      </form>
      <p>{data.message}</p>
    </div>
  );
}
