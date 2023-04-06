
const Sum = ({ parts }) => {

    let total = parts.reduce((s,p) => {
        console.log('what is happening', s, p.exercises)
        return s + p.exercises
    }, 0)
    //parts.forEach(part => { sum += part.exercises });
    return (
    <h3>total of {total} exercises</h3>
    )
}

export default Sum;
