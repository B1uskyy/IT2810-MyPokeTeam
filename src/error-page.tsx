import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data || error.statusText;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  return (
    <>
      <section
        className="error-page"
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </section>
    </>
  );
}
