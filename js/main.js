const icons = [
  {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
  },
  {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
  },
  {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
  },
  {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
  },
  {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
  },
  {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
  },
  {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
  },
  {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
  },
  {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
  },
];

const colors = [
  'blue',
  'green',
  'red'
];


// Stampo le icone
const print = (array, container) => {
  container.innerHTML = '';
  array.forEach((element) => {
      const { name, prefix, type, family, color } = element;
      container.innerHTML += `
      <div class="icon">
          <i class="${family} ${prefix}${name}" style= 'color:${color}'></i>
          <div>${name.toUpperCase()}</div>
      </div>
      `;
  });
};

// Filtro icone
const print_options = (array, select) => {
  array.forEach((element) => {
    select.innerHTML +=
    `<option value="${element}">${element}</option>`;
  });
};

const filter_values = (array, type) =>{
  const filter_icons = array.filter((element) =>{
    if(element.type === type) {
      return true;
    }
    return false;
  });
  if(type === '') {
    return array;
  }
  return filter_icons;
};

// Coloro le icone per tipo
const get_types = (array) => {
  const types = [];
  array.forEach((element) => {
    if(!types.includes(element.type)){
      types.push(element.type);
    }
  });
  return types;
};

const color_icons = (array, colors) => {
  const types = get_types(array);
  const new_color_array = array.map((element) =>{
    const index_type = types.indexOf(element.type);
    element.color = colors[index_type];
    return element;
  });
  return new_color_array;
};



//Applico le funzioni

const icons_container = document.getElementById('container');

const new_color_array = color_icons(icons, colors);
print(new_color_array, icons_container);

console.log(new_color_array);

const types = get_types(new_color_array);
console.log(types);

const select = document.getElementById('type');
print_options(types, select);
console.log(select);

select.onchange = function(element) {
  const filtered = filter_values(icons, element.target.value);
  print(filtered, icons_container);
};