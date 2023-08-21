export const reconstructQueue = (people) => {
    console.log(people)
    people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
    const reconstruct = []
    people.forEach((p) => {
      reconstruct.splice(p[1], 0, p)
    })

    return reconstruct
  }