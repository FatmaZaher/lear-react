import React from 'react'

function Columns() {
    const items = []
    return (
        // <React.Fragment> or <>
        <>
            {
                items.map(item => {
                    <React.Fragment key={item.id}>
                        <h1>
                            tilte
                        </h1>
                        <p>
                            {item.title}
                        </p>
                    </React.Fragment>
                })
            }
            <td>Name</td>
            <td>Fatma</td>
        </>
        // </React.Fragment>
    )
}

export default Columns
