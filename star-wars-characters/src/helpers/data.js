export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'hermaphrodite', label: 'Hermaphrodite' },
  { value: 'none', label: 'None' },
  { value: 'n/a', label: 'N/A' },
];
export const filmOptions = [
  { value: 'A New Hope', label: 'A New Hope' },
  { value: 'The Empire Strikes Back', label: 'The Empire Strikes Back' },
  { value: 'Return of the Jedi', label: 'Return of the Jedi' },
  { value: 'The Phantom Menace', label: 'The Phantom Menace' },
  { value: 'Attack of the Clones', label: 'Attack of the Clones' },
  { value: 'Revenge of the Sith', label: 'Revenge of the Sith' },
  { value: 'The Force Awakens', label: 'The Force Awakens' },
];
export const specieOptions = [
  { value: 'Human', label: 'Human' },
  { value: 'Droid', label: 'Droid' },
  { value: 'Wookiee', label: 'Wookiee' },
  { value: 'Rodian', label: 'Rodian' },
  { value: 'Hutt', label: 'Hutt' },
  { value: "Yoda's species", label: "Yoda's species" },
  { value: 'Trandoshan', label: 'Trandoshan' },
  { value: 'Mon Calamari', label: 'Mon Calamari' },
  { value: 'Ewok', label: 'Ewok' },
  { value: 'Sullustan', label: 'Sullustan' },
  { value: 'Neimodian', label: 'Neimodian' },
  { value: 'Gungan', label: 'Gungan' },
  { value: 'Toydarian', label: 'Toydarian' },
  { value: 'Dug', label: 'Dug' },
  { value: "Twi'lek", label: "Twi'lek" },
  { value: 'Vulptereen', label: 'Vulptereen' },
  { value: 'Xexto', label: 'Xexto' },
  { value: 'Toong', label: 'Toong' },
  { value: 'Cerean', label: 'Cerean' },
  { value: 'Nautolan', label: 'Nautolan' },
  { value: 'Zabrak', label: 'Zabrak' },
  { value: 'Tholothian', label: 'Tholothian' },
  { value: 'Iktotchi', label: 'Iktotchi' },
  { value: 'Quermian', label: 'Quermian' },
  { value: 'Kel Dor', label: 'Kel Dor' },
  { value: 'Chagrian', label: 'Chagrian' },
  { value: 'Geonosian', label: 'Geonosian' },
  { value: 'Mirialan', label: 'Mirialan' },
  { value: 'Clawdite', label: 'Clawdite' },
  { value: 'Besalisk', label: 'Besalisk' },
  { value: 'Kaminoan', label: 'Kaminoan' },
  { value: 'Skakoan', label: 'Skakoan' },
  { value: 'Muun', label: 'Muun' },
  { value: 'Togruta', label: 'Togruta' },
  { value: 'Kaleesh', label: 'Kaleesh' },
  { value: "Pau'an", label: "Pau'an" },
];

export const stylesSelect = {
  option: (base, state) => ({
    ...base,

    color: '#fff',
    fontSize: '16px',
    backgroundColor: '#111',
    borderBottom: '1px solid #fff',
    padding: '2px 8px',
    '&:hover': {
      borderColor: '#FFE81F',
    },
  }),
  control: (base, state) => ({
    ...base,
    background: '#111',
    fontSize: '20px',

    color: '#fff',
    borderRadius: state.isFocused ? '2px 2px 0 0' : 1,
    padding: '0px 30px 0 48px',
    marginTop: '8px',

    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: state.isFocused ? '#fff' : '#FFE81F',
    },
  }),
  container: base => ({
    ...base,
    padding: 8,
  }),

  menuList: base => ({
    ...base,

    padding: 0,
  }),
};
