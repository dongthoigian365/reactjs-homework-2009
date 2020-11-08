var nav = [
  {
    name: 'Home',
    children: [
      {
        name: 'Home 1',
        children: [
          {
            name: 'Home 1.1',
            children: [
              { name: 'Home 1.1.1' }
            ]
          },
          {
            name: 'Home 1.2',
            children: [
              { name: 'Home 1.2.1' }
            ]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [
          {
            name: 'Home 2.1'
          }
        ]
      },
      {
        name: 'Home 3',
        children: [
          {
            name: 'Home 3.1'
          }
        ]
      }
    ]
  },
  {
    name: 'About',
    children: [
      {
        name: 'About 1',
        children: [
          {
            name: 'About 1.1',
            children: [
              { name: 'About 1.1.1' }
            ]
          },
          {
            name: 'About 1.2',
            children: [
              {
                name: 'About 1.2.1',
                children: [
                  { name: 'About 1.2.1.1' },
                  { name: 'About 1.2.1.2' },
                  { name: 'About 1.2.1.3' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [
          {
            name: 'Home 2.1'
          }
        ]
      }
    ]
  }
]

const menu = [];

(function build(elements) {
  menu.push('<ul>');
  $.each(elements, function (i, val) {
    menu.push('<li><a href="">', val.name);
    build(val.children);
    menu.push('</a></li>');
  });
  menu.push('</ul>');
}(nav));

const string = menu.toString().replaceAll(',', '')
document.write(string)
