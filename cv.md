### [rsschool-cv](/)

---

# Dmitri Stepaniuk

## My Contact Info

- Polevaia str, Brest, Belarus
- +375 29 527-28-70
- polevaiabrest@gmail.com
- [GitHub](https://github.com/dmitriStpaniuk)

### About Me

Music teacher. I have achieved a lot in my profession, my pupils are laureates of different performing international competitions and students of the Academy of Music. Now I want to change my specialization and realize myself in the 'it' industry.

### Skills

- Html
- Css
- JavaScript
- Git
- React
- Figma
- Windows OS, Linux(Ubuntu)

### Code Example

````
  import React from "react">
  export const MySelect = (
  { options, defaultValue, value, onChange }) => {
  return (
    <div>
      <hr style={{ margin: "15px 0" }} />
      <select
        value={value}
        onChange={item => onChange(item.target.value)}
      >
        <option key={options.value} disabled value="">
          {defaultValue}
        </option>
        {options.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
   );
  };
````

