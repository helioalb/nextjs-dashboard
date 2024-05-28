'use client';

import { useFormState } from "react-dom";
import { recordInput } from "./actions";
import { useEffect } from "react";

export default function Page() {

  const [data, formAction] = useFormState(recordInput, {
    success: false,
    message: 'Please, enter a valid username.'
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <form action={formAction}>
        <input name="userName" />
        <input type="email" name="email" />
        <input type="submit" />
      </form>

      <p>Sucess: {data.success ? <span>Yes</span> : <span>No</span>}</p>
      <p>{data.message}</p>
    </div>
  )
}
