# node-project

Посилання на скріни.
https://monosnap.com/list/64205df2e297e4b4773809c4

Реалізовано можливість пошуку за декількома параметрами (id, name, email, phone)

Результат запиту

$ node index.js -a get --id 05olLMgyVQdWRwgKfg5J6 -n A -p 2360

Відбір проведено по id, у кого ім'я з літери "А" та телефон має збіг цифр 2360:

[
  {
    id: 'AeHIrLTr6JkxGE6SN-0Rw',
    name: 'Allen Raymond',
    email: 'nulla.ante@vestibul.co.uk',
    phone: '(992) 914-3792'
  },
  {
    id: '05olLMgyVQdWRwgKfg5J6',
    name: 'Cyrus Jackson',
    email: 'nibh@semsempererat.com',
    phone: '(501) 472-5218'
  },
  {
    id: '1DEXoP8AuCGYc1YgoQ6hw',
    name: 'Abbot Franks',
    email: 'scelerisque@magnis.org',
    phone: '(186) 568-3720'
  },
  {
    id: 'C9sjBfCo4UJCWjzBnOtxl',
    name: 'Simon Morton',
    email: 'dui.Fusce.diam@Donec.com',
    phone: '(233) 738-2360'
  },
  {
    id: 'rsKkOQUi80UsgVPCcLZZW',
    name: 'Alec Howard',
    email: 'Donec.elementum@scelerisquescelerisquedui.net',
    phone: '(748) 206-2688'
  }
]
