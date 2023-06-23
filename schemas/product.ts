export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'images', title: 'Images', type: 'array', of: [{type: 'string'}]},
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'brand', title: 'Brand', type: 'string'},
    {name: 'price', title: 'Price', type: 'number'},
    {name: 'saleprice', title: 'Sale Price', type: 'number'},
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Men', value: 'mens'},
          {title: 'Women', value: 'womens'},
          {title: 'Serum', value: 'serums'},
          {title: 'Cosmetics', value: 'cosmetics'},
        ],
      },
    },
  ],
}
