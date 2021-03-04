export function splitDate(date: string): Array<string> {
  const dateTime = date.split('T')
  dateTime.pop()
  const dateArray = dateTime[0].split('-')
  return dateArray
}

export function formatDate(date: Array<string>): string {
  switch (date[1]) {
    case '01':
      date.splice(1, 1, 'janeiro')
      break
    case '02':
      date.splice(1, 1, 'fevereiro')
      break

    case '03':
      date.splice(1, 1, 'março')
      break

    case '04':
      date.splice(1, 1, 'abril')
      break

    case '05':
      date.splice(1, 1, 'maio')
      break

    case '06':
      date.splice(1, 1, 'junho')
      break

    case '07':
      date.splice(1, 1, 'julho')
      break

    case '08':
      date.splice(1, 1, 'agosto')
      break

    case '09':
      date.splice(1, 1, 'setembro')
      break

    case '10':
      date.splice(1, 1, 'outubro')
      break

    case '11':
      date.splice(1, 1, 'novembro')
      break

    case '12':
      date.splice(1, 1, 'dezembro')
      break

    default:
      console.log('invalid month ')
      break
  }

  const formatedDate = `${date[2]} de ${date[1]} de ${date[0]}`
  return formatedDate
}
