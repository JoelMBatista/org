import "./MiOrg.css"

const MiOrg = (props) => {

    return <section className="MiOrg-Section">
        <h2>Mi organización</h2>
        <img src="/img/add.png" alt="Add" onClick={props.ShowForm}/>
    </section>
}

export default MiOrg