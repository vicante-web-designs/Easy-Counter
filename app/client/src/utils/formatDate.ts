export const formatDate = (date: string) => {
    const newDate = new Date(date)

    const formattedDate = newDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return formattedDate
}