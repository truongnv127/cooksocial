import React, { useState } from 'react';
import Select from 'react-select';
import countries from '../countries';
import { LABELS } from '../constants';

export default function SignUpFormFields() {
  const [nationality, setNationality] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <label htmlFor="email">{LABELS.email}</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">{LABELS.password}</label>
      <input id="password" name="password" type="password" required />

      <label htmlFor="birthdate">{LABELS.birthdate}</label>
      <input id="birthdate" name="birthdate" type="date" required />

      <label htmlFor="gender">{LABELS.gender}</label>
      <select id="gender" name="gender" required>
        <option value="">{LABELS.selectGender}</option>
        <option value="male">{LABELS.male}</option>
        <option value="female">{LABELS.female}</option>
      </select>

      <label htmlFor="nationality">{LABELS.nationality}</label>
      <Select
        options={countries}
        value={nationality}
        onChange={(selected) => setNationality(selected)}
        placeholder={LABELS.selectNationality}
        isSearchable
        name="nationality-select"
      />
      <input
        type="hidden"
        name="custom:nationality"
        value={nationality ? nationality.value || nationality.label : ''}
      />

      <label htmlFor="allergies">{LABELS.allergies}</label>
      <input id="allergies" name="custom:allergies" placeholder={LABELS.allergiesPlaceholder} />
    </div>
  );
}