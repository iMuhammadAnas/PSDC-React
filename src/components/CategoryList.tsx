const list = ['Vegetables', 'Fruits', 'Dairy']

const CategoryList = () => {
  return (
      <ol>
        {list.map((category, index) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
  )
}

export default CategoryList
