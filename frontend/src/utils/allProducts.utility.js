export const convertDataFromApi = (data) => {
  let newData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }

    acc[item.category] = [...acc[item.category], item]

    return acc
  }, {})

  return newData
}
