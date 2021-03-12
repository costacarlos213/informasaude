export function formatDate(date: string): string {
  const dateTime = date.split('T')
  dateTime.pop()
  const dateArray = dateTime[0].split('-')

  switch (dateArray[1]) {
    case '01':
      dateArray.splice(1, 1, 'janeiro')
      break
    case '02':
      dateArray.splice(1, 1, 'fevereiro')
      break

    case '03':
      dateArray.splice(1, 1, 'março')
      break

    case '04':
      dateArray.splice(1, 1, 'abril')
      break

    case '05':
      dateArray.splice(1, 1, 'maio')
      break

    case '06':
      dateArray.splice(1, 1, 'junho')
      break

    case '07':
      dateArray.splice(1, 1, 'julho')
      break

    case '08':
      dateArray.splice(1, 1, 'agosto')
      break

    case '09':
      dateArray.splice(1, 1, 'setembro')
      break

    case '10':
      dateArray.splice(1, 1, 'outubro')
      break

    case '11':
      dateArray.splice(1, 1, 'novembro')
      break

    case '12':
      dateArray.splice(1, 1, 'dezembro')
      break

    default:
      console.log('invalid month ')
      break
  }

  const formatedDate = `${dateArray[2]} de ${dateArray[1]} de ${dateArray[0]}`
  return formatedDate
}
