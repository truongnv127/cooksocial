import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import SignUpFormFields from './components/SignUpFormFields';
import { LABELS } from './constants';


function App() {
  return (
    <Authenticator
      signUpAttributes={[
        'email',
        'birthdate',
        'gender',
        'custom:nationality',
        'custom:allergies',
      ]}
      components={{
        SignUp: { FormFields: SignUpFormFields },
      }}
    >
      {({ signOut, user }) => (
        <main style={{ padding: '20px' }}>
          <h2>{LABELS.welcome} {user?.username}</h2>
          <p>{LABELS.email}: {user?.attributes?.email}</p>
          <p>{LABELS.birthdate}: {user?.attributes?.birthdate}</p>
          <p>{LABELS.gender}: {user?.attributes?.gender}</p>
          <p>{LABELS.nationality}: {user?.attributes?.['custom:nationality']}</p>
          <p>
            {LABELS.allergies}: {user?.attributes?.['custom:allergies'] || LABELS.none}
          </p>
          <button onClick={signOut}>{LABELS.signOut}</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
