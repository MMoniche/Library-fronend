import React from 'react';

const BookPrintComponent = (props) => {
    return (
        <tr>
            <td>{props.term.id}</td>
            <td>{props.term.status}</td>

            <td className={"text-right"}>
                {
                    props.term.status === "AVAILABLE" &&
                    <a className={"btn btn-outline-success btn-dark"}
                       onClick={() => props.onMarkAsTaken(props.term.id)}>
                        Mark As Taken
                    </a>
                }
                {
                    props.term.status === "TAKEN" &&
                    <a className={"btn btn-outline-dark btn-success"}
                       onClick={() => props.onMarkAsReturned(props.term.id)}>
                        Mark As Returned
                    </a>
                }
                <a title={"Delete"} className={"btn btn-outline-dark btn-danger ml-2"}
                   onClick={() => props.onDeleteBookPrint(props.term.id)}>
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default BookPrintComponent;
