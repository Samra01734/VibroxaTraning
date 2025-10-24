import { render, screen, waitFor } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const FetchUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://fakeapi.com/user')
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return <div>{user ? <p>{user.name}</p> : <p>Loading...</p>}</div>;
};

test('mocks API call and renders user name', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ name: 'Samra' }),
    })
  );

  render(<FetchUser />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('Samra')).toBeInTheDocument());
});
